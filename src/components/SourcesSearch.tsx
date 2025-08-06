import { useState } from 'react';
import { MagnifyingGlass, X } from '@phosphor-icons/react';

interface SourcesSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SourcesSearch({
  value,
  onChange,
  placeholder = 'Search data sources, endpoints, and modules...'
}: SourcesSearchProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = () => {
    onChange('');
  };

  return (
    <div className="relative max-w-md">
      <div
        className={`relative flex items-center transition-all duration-200 ${
          isFocused
            ? 'ring-oOrange-500 border-oOrange-500 ring-2'
            : 'border-sSlate-200 hover:border-sSlate-300'
        } rounded-lg border bg-white`}
      >
        <div className="absolute left-3 flex items-center">
          <MagnifyingGlass className="text-gGray-400 text-sm" />
        </div>

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="text-sSlate-800 placeholder-gGray-400 w-full rounded-lg border-0 bg-transparent py-3 pr-10 pl-10 text-sm focus:outline-none"
        />

        {value && (
          <button
            onClick={handleClear}
            className="bg-gGray-200 text-gGray-500 hover:bg-gGray-300 hover:text-gGray-700 absolute right-3 flex h-5 w-5 items-center justify-center rounded-full transition-colors"
            aria-label="Clear search"
          >
            <X className="text-xs" />
          </button>
        )}
      </div>
    </div>
  );
}
