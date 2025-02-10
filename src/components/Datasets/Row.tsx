import type { CompactedNode } from '@/types/dataset';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  dataset: CompactedNode;
};

// const LABELS_NUM = 3;

const DatasetRow = ({ dataset }: Props) => {
  const label = Array.isArray(dataset.label) ? dataset.label : [dataset.label];
  const enLabel = label.find((l) => l!.language === 'en')!;
  // const [expandLabels, setExpandLabels] = useState(false);
  // const handleExpandLabels = () => {
  //   setExpandLabels((prev) => !prev);
  // };

  const extractLastSegment = (url: string) => {
    // Split by slash
    const parts = url.split('/');
    // Return the last element in the array
    return parts[parts.length - 1];
  };

  const sourceName = extractLastSegment(dataset.id!);
  const link = `https://testnet.nearblocks.io/address/${sourceName}`;

  return (
    <tr className="hover:bg-sSlate-600 transition-colors">
      <td className="px-5 py-4 min-w-16">
        <div className="rounded flex items-center justify-center bg-sSlate-600 w-16 h-16">
          <Image
            className="rounded-md"
            src="/logo-stacked-white.svg"
            width={64}
            height={64}
            alt={`Dataset Logo for ${enLabel.value}`}
          />
        </div>
      </td>
      <td className="px-5 py-4 font-semibold">
        <div className="flex flex-col items-start gap-x-2 w-72">
          <Link
            href={`/datasets/${btoa(dataset.id!)}`}
            className="text-white hover:underline transition-colors"
          >
            {enLabel?.value}
          </Link>
          {/* <div className="underline text-sm text-neutral-300">{dataset.isDefinedBy?.id || 'N/A'}</div> */}
          {/* <div className='flex flex-wrap gap-1 mt-2'>
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
          </div> */}
        </div>
      </td>
      <td className="px-5 py-4 min-w-36">
        <Link
          href={link}
          className="text-white hover:underline transition-colors"
          target="_blank"
        >
          {sourceName}
        </Link>
      </td>
      <td className="px-5 py-4">{dataset.isDefinedBy?.id}</td>
    </tr>
  );
};

export default DatasetRow;
