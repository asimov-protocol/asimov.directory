interface MetricsBadgeProps {
  href: string;
  value: string | number;
  icon: React.ComponentType<{ size: number; className?: string }>;
  variant?: 'desktop' | 'mobile';
  loading?: boolean;
}

export default function MetricsBadge({
  href,
  value,
  icon: Icon,
  variant,
  loading
}: MetricsBadgeProps) {
  const linkClass =
    variant === 'desktop'
      ? 'group flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white/80 px-3 py-1.5 text-sm transition-all hover:border-orange-200 hover:bg-orange-50'
      : 'flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm';

  const iconClass =
    variant === 'desktop' ? 'text-gray-500 group-hover:text-orange-600' : 'text-gray-500';

  const textClass =
    variant === 'desktop'
      ? 'font-medium text-gray-700 group-hover:text-orange-700'
      : 'font-medium text-gray-700';

  return (
    <>
      {loading ? (
        <div className="animate-pulse rounded-lg bg-gray-200 px-3 py-1.5">
          <div className="h-4 w-8 rounded bg-gray-300"></div>
        </div>
      ) : (
        <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <Icon size={14} className={iconClass} />
          <span className={textClass}>{value}</span>
        </a>
      )}
    </>
  );
}
