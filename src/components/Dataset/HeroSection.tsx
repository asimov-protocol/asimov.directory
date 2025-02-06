import Image from "next/image";
import { CloudArrowDown } from "@phosphor-icons/react";

type Props = {
  name: string;
  description: string;
};

const DatasetHeroSection = ({ name, description }: Props) => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-white">
    <div className="sm:col-span-3 flex items-start space-x-6">
      <div className="rounded flex items-center justify-center shrink-0 bg-sSlate-600 size-32">
        <Image
          src="/logo-stacked-white.svg"
          alt="Albert Einstein"
          className="w-28 h-28 rounded-lg object-cover"
          width={271}
          height={175}
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-gray-300">
          {description || "No description available."}
        </p>
      </div>
    </div>

    <div>
      <button className="flex items-center ml-auto space-x-2 bg-oOrange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 cursor-pointer transition-colors">
        <CloudArrowDown className="w-5 h-5" />
        <span className="font-arges text-2xl font-semibold tracking-wider">Download dataset</span>
      </button>
    </div>
  </div>
);

export default DatasetHeroSection;
