import Link from 'next/link';
import { useBreadcrumbContext } from '@/context/BreadcrumbContext';

const Breadcrumbs = () => {
  const { currentDataset } = useBreadcrumbContext();

  const breadcrumbs = [{ label: 'Home', href: '/' }, { label: currentDataset }];

  return (
    <nav className="text-sm font-medium text-gray-400 flex gap-3">
      {breadcrumbs.map((crumb, index) => (
        <div key={crumb.label} className="flex items-center gap-3">
          {crumb.href ? (
            <Link
              href={crumb.href}
              className="text-orange-400 hover:text-orange-500"
              aria-current={
                index === breadcrumbs.length - 1 ? 'page' : undefined
              }
            >
              {crumb.label}
            </Link>
          ) : (
            <span className="text-gray-400 cursor-default">{crumb.label}</span>
          )}
          {index < breadcrumbs.length - 1 && (
            <span className="font-medium text-lg">/</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
