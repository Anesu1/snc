'use client';

import { useState } from 'react';
import Icon from '../../../components/ui/AppIcon';

interface QuoteFormData {
  // Step 1: Project Type
  projectType: 'residential' | 'commercial' | 'industrial' | '';
  projectCategory: string;
  
  // Step 2: Project Details
  projectName: string;
  projectDescription: string;
  location: string;
  siteAddress: string;
  
  // Step 3: Scope & Timeline
  projectScope: string;
  estimatedBudget: string;
  preferredStartDate: string;
  expectedDuration: string;
  urgency: 'standard' | 'urgent' | 'emergency';
  
  // Step 4: Requirements
  requiresSiteVisit: boolean;
  siteVisitDate: string;
  siteVisitTime: string;
  additionalServices: string[];
  specialRequirements: string;
  
  // Step 5: Contact Information
  clientType: 'individual' | 'business' | 'government';
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  alternatePhone: string;
  preferredContact: 'email' | 'phone' | 'whatsapp';
}

interface QuoteFormStepsProps {
  onSubmit: (data: QuoteFormData) => void;
}

const QuoteFormSteps = ({ onSubmit }: QuoteFormStepsProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<QuoteFormData>({
    projectType: '',
    projectCategory: '',
    projectName: '',
    projectDescription: '',
    location: '',
    siteAddress: '',
    projectScope: '',
    estimatedBudget: '',
    preferredStartDate: '',
    expectedDuration: '',
    urgency: 'standard',
    requiresSiteVisit: false,
    siteVisitDate: '',
    siteVisitTime: '',
    additionalServices: [],
    specialRequirements: '',
    clientType: 'individual',
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    alternatePhone: '',
    preferredContact: 'email',
  });

  const totalSteps = 5;

  const projectTypes = [
    {
      type: 'residential' as const,
      icon: 'HomeIcon',
      title: 'Residential',
      description: 'Houses, apartments, renovations',
      categories: ['New Construction', 'Renovation', 'Extension', 'Interior Finishing'],
    },
    {
      type: 'commercial' as const,
      icon: 'BuildingOfficeIcon',
      title: 'Commercial',
      description: 'Offices, retail, hospitality',
      categories: ['Office Buildings', 'Retail Spaces', 'Hotels', 'Restaurants', 'Shopping Centers'],
    },
    {
      type: 'industrial' as const,
      icon: 'WrenchScrewdriverIcon',
      title: 'Industrial',
      description: 'Factories, warehouses, mining',
      categories: ['Manufacturing Plants', 'Warehouses', 'Mining Infrastructure', 'Processing Facilities'],
    },
  ];

  const additionalServicesList = [
    'Civil Engineering',
    'Structural Design',
    'Architectural Services',
    'Plant Hire',
    'Project Management',
    'Quality Assurance',
    'Safety Compliance',
    'Environmental Assessment',
  ];

  const budgetRanges = [
    'Under USD 50,000',
    'USD 50,000 - 100,000',
    'USD 100,000 - 250,000',
    'USD 250,000 - 500,000',
    'USD 500,000 - 1,000,000',
    'USD 1,000,000 - 2,000,000',
    'Over USD 2,000,000',
  ];

  const handleInputChange = (field: keyof QuoteFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(service)
        ? prev.additionalServices.filter((s) => s !== service)
        : [...prev.additionalServices, service],
    }));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return formData.projectType !== '' && formData.projectCategory !== '';
      case 2:
        return (
          formData.projectName.trim() !== '' &&
          formData.projectDescription.trim() !== '' &&
          formData.location.trim() !== ''
        );
      case 3:
        return (
          formData.projectScope.trim() !== '' &&
          formData.estimatedBudget !== '' &&
          formData.preferredStartDate !== ''
        );
      case 4:
        if (formData.requiresSiteVisit) {
          return formData.siteVisitDate !== '' && formData.siteVisitTime !== '';
        }
        return true;
      case 5:
        return (
          formData.fullName.trim() !== '' &&
          formData.email.trim() !== '' &&
          formData.phone.trim() !== '' &&
          (formData.clientType !== 'business' || formData.companyName.trim() !== '')
        );
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };


  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch('/api/send-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitSuccess(true);
        onSubmit(formData);
      } else {
        const data = await res.json();
        setSubmitError(data.error || 'Failed to send quote request.');
      }
    } catch (err: any) {
      setSubmitError('Failed to send quote request.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
            <div key={step} className="flex items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-headline font-bold transition-all duration-300 ${
                  step < currentStep
                    ? 'bg-success text-success-foreground'
                    : step === currentStep
                    ? 'bg-primary text-primary-foreground shadow-construction'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {step < currentStep ? <Icon name="CheckIcon" size={20} /> : step}
              </div>
              {step < totalSteps && (
                <div
                  className={`flex-1 h-1 mx-2 transition-all duration-300 ${
                    step < currentStep ? 'bg-success' : 'bg-muted'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Step {currentStep} of {totalSteps}
          </p>
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-card rounded-lg p-6 md:p-8 shadow-construction">
        {/* Step 1: Project Type */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-headline font-bold text-foreground mb-2">
                Select Project Type
              </h2>
              <p className="text-muted-foreground">
                Choose the type of construction project you need
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {projectTypes.map((type) => (
                <button
                  key={type.type}
                  onClick={() => {
                    handleInputChange('projectType', type.type);
                    handleInputChange('projectCategory', '');
                  }}
                  className={`p-6 rounded-lg border-2 transition-all duration-300 text-left ${
                    formData.projectType === type.type
                      ? 'border-primary bg-primary text-white bg-opacity-5 shadow-construction'
                      : 'border-border hover:border-primary hover:shadow-md'
                  }`}
                >
                  <Icon
                    name={type.icon as any}
                    size={32}
                    className={`mb-4 ${
                      formData.projectType === type.type ? 'text-white' : 'text-muted-foreground'
                    }`}
                  />
                  <h3 className={`text-lg ${
                      formData.projectType === type.type ? "text-white" : ""} font-headline font-semibold text-foreground mb-1`}>
                    {type.title}
                  </h3>
                  <p className={`text-sm ${
                      formData.projectType === type.type ? "text-white" : ""} text-muted-foreground`}>{type.description}</p>
                </button>
              ))}
            </div>

            {formData.projectType && (
              <div className="space-y-3">
                <label className="block text-sm font-medium text-foreground">
                  Project Category *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {projectTypes
                    .find((t) => t.type === formData.projectType)
                    ?.categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => handleInputChange('projectCategory', category)}
                        className={`p-4 rounded-lg border transition-all duration-200 text-left ${
                          formData.projectCategory === category
                            ? 'border-primary bg-primary bg-opacity-5 text-white font-medium' :'border-border hover:border-primary'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 2: Project Details */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-headline font-bold text-foreground mb-2">
                Project Details
              </h2>
              <p className="text-muted-foreground">Tell us about your construction project</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Name *
                </label>
                <input
                  type="text"
                  value={formData.projectName}
                  onChange={(e) => handleInputChange('projectName', e.target.value)}
                  placeholder="e.g., New Office Building, Home Renovation"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Description *
                </label>
                <textarea
                  value={formData.projectDescription}
                  onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                  placeholder="Describe your project requirements, goals, and any specific features you need"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200 resize-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Location/City *
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    placeholder="e.g., Harare, Bulawayo"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Site Address
                  </label>
                  <input
                    type="text"
                    value={formData.siteAddress}
                    onChange={(e) => handleInputChange('siteAddress', e.target.value)}
                    placeholder="Full address (optional)"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Scope & Timeline */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-headline font-bold text-foreground mb-2">
                Scope & Timeline
              </h2>
              <p className="text-muted-foreground">
                Help us understand your project scope and timeline
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Scope *
                </label>
                <textarea
                  value={formData.projectScope}
                  onChange={(e) => handleInputChange('projectScope', e.target.value)}
                  placeholder="Describe the scope of work: materials, size, specific requirements, etc."
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Estimated Budget Range *
                </label>
                <select
                  value={formData.estimatedBudget}
                  onChange={(e) => handleInputChange('estimatedBudget', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Preferred Start Date *
                  </label>
                  <input
                    type="date"
                    value={formData.preferredStartDate}
                    onChange={(e) => handleInputChange('preferredStartDate', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Expected Duration
                  </label>
                  <select
                    value={formData.expectedDuration}
                    onChange={(e) => handleInputChange('expectedDuration', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                  >
                    <option value="">Select duration</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="6-12 months">6-12 months</option>
                    <option value="12+ months">12+ months</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Project Urgency
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    { value: 'standard', label: 'Standard', icon: 'ClockIcon' },
                    { value: 'urgent', label: 'Urgent', icon: 'BoltIcon' },
                    { value: 'emergency', label: 'Emergency', icon: 'ExclamationTriangleIcon' },
                  ].map((urgency) => (
                    <button
                      key={urgency.value}
                      onClick={() => handleInputChange('urgency', urgency.value)}
                      className={`p-4 rounded-lg border transition-all duration-200 flex items-center space-x-3 ${
                        formData.urgency === urgency.value
                          ? 'border-primary bg-primary bg-opacity-5 text-white font-medium' :'border-border hover:border-primary'
                      }`}
                    >
                      <Icon name={urgency.icon as any} size={20} />
                      <span>{urgency.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Requirements */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-headline font-bold text-foreground mb-2">
                Additional Requirements
              </h2>
              <p className="text-muted-foreground">
                Let us know about any additional services or requirements
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-4 bg-muted rounded-lg">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.requiresSiteVisit}
                    onChange={(e) => handleInputChange('requiresSiteVisit', e.target.checked)}
                    className="mt-1 w-5 h-5 rounded border-input text-primary focus:ring-2 focus:ring-primary"
                  />
                  <div>
                    <span className="font-medium text-foreground">Request Site Visit</span>
                    <p className="text-sm text-muted-foreground mt-1">
                      Schedule an on-site assessment with our team for accurate project evaluation
                    </p>
                  </div>
                </label>

                {formData.requiresSiteVisit && (
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        value={formData.siteVisitDate}
                        onChange={(e) => handleInputChange('siteVisitDate', e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Preferred Time *
                      </label>
                      <select
                        value={formData.siteVisitTime}
                        onChange={(e) => handleInputChange('siteVisitTime', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                      >
                        <option value="">Select time</option>
                        <option value="08:00-10:00">08:00 - 10:00</option>
                        <option value="10:00-12:00">10:00 - 12:00</option>
                        <option value="12:00-14:00">12:00 - 14:00</option>
                        <option value="14:00-16:00">14:00 - 16:00</option>
                        <option value="16:00-18:00">16:00 - 18:00</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Additional Services
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {additionalServicesList.map((service) => (
                    <label
                      key={service}
                      className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:border-primary transition-all duration-200 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={formData.additionalServices.includes(service)}
                        onChange={() => handleServiceToggle(service)}
                        className="w-5 h-5 rounded border-input text-primary focus:ring-2 focus:ring-primary"
                      />
                      <span className="text-sm text-foreground">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Special Requirements or Notes
                </label>
                <textarea
                  value={formData.specialRequirements}
                  onChange={(e) => handleInputChange('specialRequirements', e.target.value)}
                  placeholder="Any specific requirements, constraints, or additional information we should know"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200 resize-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 5: Contact Information */}
        {currentStep === 5 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-headline font-bold text-foreground mb-2">
                Contact Information
              </h2>
              <p className="text-muted-foreground">
                How should we reach you with your project quote?
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Client Type *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    { value: 'individual', label: 'Individual', icon: 'UserIcon' },
                    { value: 'business', label: 'Business', icon: 'BuildingOfficeIcon' },
                    { value: 'government', label: 'Government', icon: 'BuildingLibraryIcon' },
                  ].map((type) => (
                    <button
                      key={type.value}
                      onClick={() => handleInputChange('clientType', type.value)}
                      className={`p-4 rounded-lg border transition-all duration-200 flex items-center space-x-3 ${
                        formData.clientType === type.value
                          ? 'border-primary bg-primary bg-opacity-5 text-white font-medium' :'border-border hover:border-primary'
                      }`}
                    >
                      <Icon name={type.icon as any} size={20} />
                      <span>{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                  />
                </div>

                {formData.clientType === 'business' && (
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      placeholder="Your company name"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                    />
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+263 123 456 789"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Alternate Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.alternatePhone}
                  onChange={(e) => handleInputChange('alternatePhone', e.target.value)}
                  placeholder="+263 987 654 321 (optional)"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Preferred Contact Method *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    { value: 'email', label: 'Email', icon: 'EnvelopeIcon' },
                    { value: 'phone', label: 'Phone Call', icon: 'PhoneIcon' },
                    { value: 'whatsapp', label: 'WhatsApp', icon: 'ChatBubbleLeftRightIcon' },
                  ].map((method) => (
                    <button
                      key={method.value}
                      onClick={() => handleInputChange('preferredContact', method.value)}
                      className={`p-4 rounded-lg border transition-all duration-200 flex items-center space-x-3 ${
                        formData.preferredContact === method.value
                          ? 'border-primary bg-primary bg-opacity-5 text-white font-medium' :'border-border hover:border-primary'
                      }`}
                    >
                      
                      <Icon name={method.icon as any} size={20} />
                      <span>{method.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex flex-col gap-4 items-center justify-between mt-8 pt-6 border-t border-border">
          {submitSuccess ? (
            <div className="text-white text-center font-semibold flex flex-col items-center">
              <Icon name="CheckCircleIcon" size={32} className="mb-2" />
              Your quote request has been sent! We'll be in touch soon.
            </div>
          ) : (
            <>
              {submitError && (
                <div className="text-destructive text-center font-semibold flex flex-col items-center">
                  <Icon name="ExclamationTriangleIcon" size={24} className="mb-1" />
                  {submitError}
                </div>
              )}
              <div className="flex w-full items-center justify-between">
                <button
                  onClick={handlePrevious}
                  disabled={currentStep === 1 || submitting}
                  className="flex items-center space-x-2 px-6 py-3 rounded-lg border border-border text-foreground hover:bg-muted transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Icon name="ChevronLeftIcon" size={20} />
                  <span>Previous</span>
                </button>

                {currentStep < totalSteps ? (
                  <button
                    onClick={handleNext}
                    disabled={!validateStep(currentStep) || submitting}
                    className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:shadow-construction-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
                  >
                    <span>Next Step</span>
                    <Icon name="ChevronRightIcon" size={20} />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!validateStep(currentStep) || submitting}
                    className="flex items-center space-x-2 px-8 py-3 rounded-lg bg-accent text-accent-foreground font-headline font-semibold hover:shadow-construction-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
                  >
                    {submitting ? (
                      <>
                        <Icon name="ArrowPathIcon" size={20} className="animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Icon name="PaperAirplaneIcon" size={20} />
                        <span>Submit Quote Request</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteFormSteps;
