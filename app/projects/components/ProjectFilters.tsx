'use client';

import { useState } from 'react';
import Icon from '../../../components/ui/AppIcon';

interface ProjectFiltersProps {
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  category: string;
  valueRange: string;
  status: string;
  searchQuery: string;
}

export default function ProjectFilters({ onFilterChange }: ProjectFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    valueRange: 'all',
    status: 'all',
    searchQuery: '',
  });

  const categories = [
    { value: 'all', label: 'All Projects', icon: 'RectangleStackIcon' },
    { value: 'commercial', label: 'Commercial', icon: 'BuildingOffice2Icon' },
    { value: 'residential', label: 'Residential', icon: 'HomeIcon' },
    { value: 'industrial', label: 'Industrial', icon: 'WrenchScrewdriverIcon' },
    { value: 'civil', label: 'Civil Engineering', icon: 'CogIcon' },
  ];

  const valueRanges = [
    { value: 'all', label: 'All Values' },
    { value: 'under-500k', label: 'Under $500K' },
    { value: '500k-1m', label: '$500K - $1M' },
    { value: 'over-1m', label: 'Over $1M' },
  ];

  const statuses = [
    { value: 'all', label: 'All Status' },
    { value: 'completed', label: 'Completed' },
    { value: 'ongoing', label: 'Ongoing' },
  ];

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <section className="bg-muted py-8 sticky top-20 z-40 shadow-md">
      <div className="container mx-auto px-4">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-2xl mx-auto">
            <Icon
              name="MagnifyingGlassIcon"
              size={20}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-textSecondary"
            />
            <input
              type="text"
              placeholder="Search projects by name, location, or client..."
              value={filters.searchQuery}
              onChange={(e) => handleFilterChange('searchQuery', e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => handleFilterChange('category', category.value)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  filters.category === category.value
                    ? 'bg-primary text-primary-foreground shadow-construction'
                    : 'bg-card text-foreground hover:bg-primary hover:text-primary-foreground border border-border'
                }`}
              >
                <Icon name={category.icon as any} size={18} />
                <span>{category.label}</span>
              </button>
            ))}
          </div>

          {/* Value Range Filter */}
          <select
            value={filters.valueRange}
            onChange={(e) => handleFilterChange('valueRange', e.target.value)}
            className="px-4 py-2 rounded-md text-sm font-medium bg-card text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {valueRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>

          {/* Status Filter */}
          <select
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
            className="px-4 py-2 rounded-md text-sm font-medium bg-card text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {statuses.map((status) => (
              <option key={status.value} value={status.value}>
                {status.label}
              </option>
            ))}
          </select>

          {/* Reset Button */}
          {(filters.category !== 'all' ||
            filters.valueRange !== 'all' ||
            filters.status !== 'all' ||
            filters.searchQuery !== '') && (
            <button
              onClick={() => {
                const resetFilters = {
                  category: 'all',
                  valueRange: 'all',
                  status: 'all',
                  searchQuery: '',
                };
                setFilters(resetFilters);
                onFilterChange(resetFilters);
              }}
              className="flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium bg-accent text-accent-foreground hover:bg-opacity-90 transition-all duration-300"
            >
              <Icon name="XMarkIcon" size={18} />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}