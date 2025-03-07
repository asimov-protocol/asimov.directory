// ModeControl.ts
import Control from 'ol/control/Control';

export interface ModeControlOptions {
  onChange?: (mode: 'objects' | 'heatmap') => void;
  defaultMode?: 'objects' | 'heatmap';
}

/**
 * A custom OpenLayers control that shows a button with a map icon.
 * When clicked, it expands a dropdown for "Objects" or "Heatmap".
 * Highlights the currently active mode in the dropdown.
 */
export default class ModeControl extends Control {
  private isOpen: boolean;
  private currentMode: 'objects' | 'heatmap';
  private onChange: (mode: 'objects' | 'heatmap') => void;
  private button: HTMLButtonElement;
  private dropdown: HTMLDivElement;
  private optionButtons: HTMLButtonElement[] = [];

  constructor(options: ModeControlOptions = {}) {
    const container = document.createElement('div');
    container.className =
      'absolute top-16 left-2 z-50 flex flex-col items-start';

    super({ element: container });

    this.isOpen = false;
    this.currentMode = options.defaultMode || 'objects';
    this.onChange = options.onChange || (() => {});

    this.button = document.createElement('button');
    this.button.type = 'button';
    this.button.ariaLabel = `Display mode: ${this.currentMode}`;
    this.button.className =
      'bg-white border border-gray-300 p-2 rounded shadow hover:bg-gray-100 flex items-center justify-center';

    this.button.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg"
           class="h-5 w-5 text-gray-700"
           fill="none"
           viewBox="0 0 24 24"
           stroke="currentColor"
           stroke-width="2">
        <path stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 20l-5.447-2.724A2 2 0 013 15.447V4.553A2 2 0 014.553 3l5.894 2.947a2 2 0 001.789 0l5.894-2.947A2 2 0 0120 4.553v10.894a2 2 0 01-1.106 1.776L13 20m-4 0v-9"/>
      </svg>
    `;

    this.button.addEventListener('click', () => {
      this.toggleDropdown();
    });

    this.dropdown = document.createElement('div');
    this.dropdown.className =
      'hidden mt-1 bg-white border border-gray-300 rounded shadow py-2';

    this.addDropdownOption('Objects');
    this.addDropdownOption('Heatmap');

    container.appendChild(this.button);
    container.appendChild(this.dropdown);

    this.onChange(this.currentMode);
    this.highlightActiveMode(this.currentMode);
  }

  private toggleDropdown(): void {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.dropdown.classList.remove('hidden');
    } else {
      this.dropdown.classList.add('hidden');
    }
  }

  private addDropdownOption(label: 'Objects' | 'Heatmap'): void {
    const option = document.createElement('button');
    option.type = 'button';
    option.textContent = label;
    option.value = label.toLowerCase();
    option.className =
      'block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-200';

    option.addEventListener('click', () => {
      this.currentMode = option.value as 'objects' | 'heatmap';
      this.button.ariaLabel = `Display mode: ${this.currentMode}`;
      this.toggleDropdown();
      this.highlightActiveMode(this.currentMode);
      this.onChange(this.currentMode);
    });

    this.dropdown.appendChild(option);
    this.optionButtons.push(option);
  }

  private highlightActiveMode(mode: string): void {
    this.optionButtons.forEach((btn) => {
      btn.classList.remove('bg-gray-100');
    });
    const activeBtn = this.optionButtons.find((btn) => btn.value === mode);
    if (activeBtn) {
      activeBtn.classList.add('bg-gray-100');
    }
  }
}
