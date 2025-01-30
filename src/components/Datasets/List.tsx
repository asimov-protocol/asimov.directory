import { Dataset } from "@/types/dataset";
import DatasetRow from "./Row";

type Props = {
  datasets: Dataset[];
};

const DatasetList = ({ datasets }: Props) => {
  return (
    <div className="overflow-x-auto">
      <div className='min-w-5xl w-full'>
        <table className="table-auto w-full text-left">
          <thead>
            <tr className="border-b border-gGray-300 text-gGray-300 text-sm font-normal">
              {["", "Dataset", "LLM Application", "Created At"].map((header) => (
                <th key={header.toLowerCase()} className="px-5 py-2">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gGray-300">
            {datasets.map((dataset) => (
              <DatasetRow key={dataset.id} dataset={dataset} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DatasetList;
