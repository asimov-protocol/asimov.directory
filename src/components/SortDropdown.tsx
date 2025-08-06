import { CaretDown } from '@phosphor-icons/react';
import type { SortOption } from '../types';

interface SortDropdownProps {
  value: SortOption;
  onChange: (sort: SortOption) => void;
  className?: string;
}

const sortOptions = [
  { value: 'relevant' as const, label: 'Most Relevant' },
  { value: 'popular' as const, label: 'Most Popular' },
  { value: 'newest' as const, label: 'Newest' },
  { value: 'updated' as const, label: 'Recently Updated' }
];

export default function SortDropdown({ value, onChange, className = '' }: SortDropdownProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as SortOption);
  };

  return (
    <div className={`relative ${className}`}>
      <select
        value={value}
        onChange={handleChange}
        className="border-sSlate-200 focus:ring-oOrange-500 focus:border-oOrange-500 text-sSlate-800 appearance-none rounded-lg border bg-white px-4 py-2 pr-10 text-sm transition-colors focus:ring-2"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <CaretDown className="text-gGray-400 text-sm" />
      </div>
    </div>
  );
}
