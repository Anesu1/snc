'use client';

import { useState, useEffect } from 'react';
import AppImage from '../../../components/ui/AppImage';
import Icon from '../../../components/ui/AppIcon';

interface Project {
    id: string;
    title: string;
    category: string;
    location: string;
    client: string;
    description: string;
    images: string[];
    highlights: string[];
}

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Reset image index when modal opens
    useEffect(() => {
        if (isOpen) {
            setCurrentImageIndex(0);
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !project) return null;

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-6xl bg-card rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-[90vh] md:h-auto max-h-[90vh]">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                >
                    <Icon name="XMarkIcon" size={24} />
                </button>

                {/* Image Slider Section */}
                <div className="w-full md:w-2/3 bg-black relative flex items-center justify-center h-1/2 md:h-auto min-h-[400px]">
                    {project.images.length > 0 ? (
                        <div className="relative w-full h-full">
                            <AppImage
                                src={project.images[currentImageIndex]}
                                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                                className="w-full h-full object-contain"
                            />

                            {/* Navigation Buttons */}
                            {project.images.length > 1 && (
                                <>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                                    >
                                        <Icon name="ChevronLeftIcon" size={24} />
                                    </button>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                                    >
                                        <Icon name="ChevronRightIcon" size={24} />
                                    </button>

                                    {/* Dots Indicator */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                                        {project.images.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentImageIndex(index)}
                                                className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    ) : (
                        <div className="text-white/50">No images available</div>
                    )}
                </div>

                {/* Details Section */}
                <div className="w-full md:w-1/3 p-8 overflow-y-auto bg-card text-foreground">
                    <div className="mb-6">
                        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full mb-3">
                            {project.category}
                        </span>
                        <h2 className="text-3xl font-headline font-bold mb-2">{project.title}</h2>
                        <div className="flex items-center text-textSecondary space-x-4 text-sm mb-4">
                            <div className="flex items-center">
                                <Icon name="MapPinIcon" size={16} className="mr-1" />
                                {project.location}
                            </div>
                            <div className="flex items-center">
                                <Icon name="UserIcon" size={16} className="mr-1" />
                                {project.client}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-bold mb-2">Description</h3>
                            <p className="text-textSecondary leading-relaxed">{project.description}</p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-2">Key Highlights</h3>
                            <ul className="space-y-2">
                                {project.highlights.map((highlight, index) => (
                                    <li key={index} className="flex items-start text-textSecondary">
                                        <Icon name="CheckCircleIcon" size={18} className="text-success mt-0.5 mr-2 flex-shrink-0" />
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
