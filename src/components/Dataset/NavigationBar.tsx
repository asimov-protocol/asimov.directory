import { useEffect, useRef } from "react";
import { useTabContext } from "@/context/TabsContext";
import { datasetTabs as tabs } from "@/utils";

const NavigationBar: React.FC = () => {
  const { activeTab, setActiveTab } = useTabContext();
  const indicatorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const activeButton = document.querySelector<HTMLButtonElement>(
      `button[data-tab="${activeTab}"]`
    );
    const indicator = indicatorRef.current;

    if (activeButton && indicator) {
      const { offsetLeft, offsetWidth } = activeButton;
      indicator.style.transform = `translateX(${offsetLeft}px)`;
      indicator.style.width = `${offsetWidth}px`;
    }
  }, [activeTab]);

  return (
    <div className="w-full border-b border-gray-800">
      <div className="flex items-center gap-4 relative">
        {tabs.map(({ label, value }) => (
          <button
            key={value}
            data-tab={value}
            onClick={() => setActiveTab(value)}
            className={`relative text-sm font-medium w-3/4 pb-4 transition-colors duration-300 ${
              activeTab === value ? "text-orange-400" : "text-gray-400 hover:text-orange-300"
            }`}
          >
            {label}
          </button>
        ))}
        <span
          ref={indicatorRef}
          className="absolute bottom-0 h-0.5 bg-orange-500 rounded-md transition-all duration-300"
          style={{ transform: "translateX(0)", width: "0" }}
        ></span>
      </div>
    </div>
  );
};

export default NavigationBar;
