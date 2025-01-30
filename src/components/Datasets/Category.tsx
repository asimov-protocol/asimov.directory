type CategoryProps = {
  category: string;
};

type ShowAllCategoriesProps = {
  ariaExpanded: boolean;
  onClick: () => void;
  label: string;
};

const DatasetCategory = ({ category }: CategoryProps) => (
  <div className="text-xs text-neutral-300 border border-gGray-400 rounded-sm px-1.5 py-0.5 font-semibold">
    {category}
  </div>
);

const ShowAllCategories = ({ ariaExpanded, onClick, label }: ShowAllCategoriesProps) => (
  <button
    className="text-xs text-neutral-300 border border-gGray-400 rounded-md px-1.5 py-0.5 cursor-pointer font-semibold"
    aria-expanded={ariaExpanded}
    onClick={onClick}
  >
    {label}
  </button>
);

export {
  DatasetCategory,
  ShowAllCategories
};
