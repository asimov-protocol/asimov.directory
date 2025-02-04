import { useState } from 'react';
import { Dataset } from '@/types/dataset';
import Image from 'next/image';
import Link from 'next/link';
import { DatasetCategory, ShowAllCategories } from './Category';
import { labels, formatDate } from '@/utils';

type Props = {
  dataset: Dataset;
}

const LABELS_NUM = 3;

const DatasetRow = ({ dataset }: Props) => {
  const [expandLabels, setExpandLabels] = useState(false);
  const handleExpandLabels = () => {
    setExpandLabels((prev) => !prev);
  };

  return (
    <tr className="hover:bg-sSlate-600 transition-colors">
      <td className="px-5 py-4 min-w-16">
        <Image
          className="rounded-md"
          src="/logo.png"
          width={64}
          height={64}
          alt={`Dataset Logo for ${dataset.name}`}
        />
      </td>
      <td className="px-5 py-4 font-semibold">
        <div className="flex flex-col items-start gap-x-2 w-72">
          <Link
            href={`/datasets/${dataset.id}`}
            className="text-white hover:underline transition-colors"
          >
            {dataset.name}
          </Link>
          <div className="underline text-sm text-neutral-300">{dataset.creator || 'N/A'}</div>
          <div className='flex flex-wrap gap-1 mt-2'>
            {labels.slice(0, expandLabels ? labels.length - 1 : LABELS_NUM).map((label, index) => (
              <DatasetCategory key={index} category={label} />
            ))}
            {labels.length > LABELS_NUM && !expandLabels && (
              <ShowAllCategories
                ariaExpanded={expandLabels}
                onClick={handleExpandLabels}
                label={`+${labels.length - LABELS_NUM}`}
              />
            )}
          </div>
        </div>
      </td>
      <td className="px-5 py-4">{dataset.short_description}</td>
      <td className="px-5 py-4 min-w-36">
        {formatDate(dataset.created_at)}
      </td>
    </tr>
  );
};

export default DatasetRow;
