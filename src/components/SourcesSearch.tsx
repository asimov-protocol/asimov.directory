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
  placeholder = "Search data sources, endpoints, and modules..."
}: SourcesSearchProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = () => {
    onChange('');
  };

  return (
    <div className="relative max-w-md">
      <div className={`relative flex items-center transition-all duration-200 ${
        isFocused
          ? 'ring-2 ring-oOrange-500 border-oOrange-500'
          : 'border-sSlate-200 hover:border-sSlate-300'
      } rounded-lg border bg-white`}>
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
          className="w-full py-3 pl-10 pr-10 text-sm text-sSlate-800 placeholder-gGray-400 bg-transparent border-0 rounded-lg focus:outline-none"
        />

        {value && (
          <button
            onClick={handleClear}
            className="absolute right-3 flex items-center justify-center h-5 w-5 rounded-full bg-gGray-200 text-gGray-500 hover:bg-gGray-300 hover:text-gGray-700 transition-colors"
            aria-label="Clear search"
          >
            <X className="text-xs" />
          </button>
        )}
      </div>
    </div>
  );
}
