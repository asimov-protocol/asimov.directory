import { Dataset } from "@/types/dataset";
import { labels } from "@/utils";
import { DatasetCategory } from "../Datasets/Category";

type Props = {
  dataset: Dataset;
};

const AsideSection = ({ dataset }: Props) => {
  return (
    <div className="text-white pt-0 py-6 divide-y divide-gray-700">

      <div className="pb-3">
        <h3 className="text-lg font-semibold mb-4">Stats</h3>
        <p className="text-xl font-bold">254 <span className="text-sm font-normal text-gray-400">Views</span></p>
        <p className="text-xl font-bold">87 <span className="text-sm font-normal text-gray-400">Downloads</span></p>
      </div>

      <div className="py-3">
        <h3 className="text-lg font-semibold">Author</h3>
        <p className="text-orange-400 underline">{dataset.creator}</p>
      </div>

      <div className="py-3">
        <h3 className="text-lg font-semibold">Format</h3>
        <p className="text-gray-300">JSON</p>
      </div>

      <div className="py-3">
        <h3 className="text-lg font-semibold">Size</h3>
        <p className="text-gray-300">8MB</p>
      </div>

      <div className="py-3">
        <h3 className="text-lg font-semibold">Tags</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {labels.map(tag => (
            <DatasetCategory key={tag} category={tag} />
          ))}
        </div>
      </div>

      <div className="py-3">
        <h3 className="text-lg font-semibold">Data</h3>
        <p className="text-gray-300">4,198,543 <span className="text-sm">Triples</span></p>
        <p className="text-gray-300">59,999 <span className="text-sm">Nodes</span></p>
        <p className="text-gray-300">249,999 <span className="text-sm">Edges</span></p>
      </div>

      <div className="py-3">
        <h3 className="text-lg font-semibold">Added</h3>
        <p className="text-gray-300">{new Date(dataset.created_at).toLocaleString()}</p>
      </div>

      <div className="py-3">
        <h3 className="text-lg font-semibold">Updated</h3>
        <p className="text-gray-300">{new Date(dataset.updated_at).toLocaleString()}</p>
      </div>

      <div className="py-3">
        <h3 className="text-lg font-semibold">Version</h3>
        <p className="text-gray-300">1.0.1</p>
      </div>

      <div className="py-3">
        <h3 className="text-lg font-semibold">License</h3>
        <p className="text-gray-300">CC0: Public Domain</p>
      </div>
    </div>
  );
};

export default AsideSection;
