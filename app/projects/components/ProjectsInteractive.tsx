'use client';

import { useState, useEffect } from 'react';
import ProjectFilters, { FilterState } from './ProjectFilters';
import ProjectCard from './ProjectCard';

interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  value: string;
  valueNumeric: number;
  duration: string;
  completionDate: string;
  status: string;
  image: string;
  alt: string;
  client: string;
  description: string;
  highlights: string[];
}

interface ProjectsInteractiveProps {
  initialProjects: Project[];
}

import ProjectModal from './ProjectModal';

export default function ProjectsInteractive({ initialProjects }: ProjectsInteractiveProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(initialProjects);
  const [displayCount, setDisplayCount] = useState(6);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleFilterChange = (filters: FilterState) => {
    if (!isHydrated) return;

    let filtered = [...initialProjects];

    // Category filter
    if (filters.category !== 'all') {
      filtered = filtered.filter(
        (project) => project.category.toLowerCase() === filters.category.toLowerCase()
      );
    }

    // Value range filter
    if (filters.valueRange !== 'all') {
      filtered = filtered.filter((project) => {
        const value = project.valueNumeric;
        switch (filters.valueRange) {
          case 'under-500k':
            return value < 500000;
          case '500k-1m':
            return value >= 500000 && value <= 1000000;
          case 'over-1m':
            return value > 1000000;
          default:
            return true;
        }
      });
    }

    // Status filter
    if (filters.status !== 'all') {
      filtered = filtered.filter(
        (project) => project.status.toLowerCase() === filters.status.toLowerCase()
      );
    }

    // Search query filter
    if (filters.searchQuery.trim() !== '') {
      const query = filters.searchQuery.toLowerCase();
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.location.toLowerCase().includes(query) ||
          project.client.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query)
      );
    }

    setFilteredProjects(filtered);
    setDisplayCount(6);
  };

  const loadMore = () => {
    if (!isHydrated) return;
    setDisplayCount((prev) => prev + 6);
  };

  if (!isHydrated) {
    return (
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-card rounded-lg overflow-hidden shadow-construction animate-pulse"
              >
                <div className="h-64 bg-muted"></div>
                <div className="p-6 space-y-4">
                  <div className="h-6 bg-muted rounded w-3/4"></div>
                  <div className="h-4 bg-muted rounded w-1/2"></div>
                  <div className="h-20 bg-muted rounded"></div>
                  <div className="h-10 bg-muted rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <ProjectFilters onFilterChange={handleFilterChange} />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-lg text-textSecondary">
              Showing <span className="font-headline font-bold text-foreground">{Math.min(displayCount, filteredProjects.length)}</span> of{' '}
              <span className="font-headline font-bold text-foreground">{filteredProjects.length}</span> projects
            </p>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {filteredProjects.slice(0, displayCount).map((project: any) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={() => {
                      setSelectedProject(project);
                      setIsModalOpen(true);
                    }}
                  />
                ))}
              </div>

              <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
              />

              {/* Load More Button */}
              {displayCount < filteredProjects.length && (
                <div className="text-center">
                  <button
                    onClick={loadMore}
                    className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-md font-headline font-semibold text-base hover:bg-secondary transition-all duration-300 hover:shadow-construction"
                  >
                    <span>Load More Projects</span>
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-headline font-bold text-foreground mb-2">
                No Projects Found
              </h3>
              <p className="text-lg text-textSecondary">
                Try adjusting your filters or search query to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}