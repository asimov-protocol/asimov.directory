import Image from "next/image";
import { CloudArrowDown } from "@phosphor-icons/react";
import { Dataset } from "@/types/dataset";

type Props = {
  name: Dataset["name"];
  description: Dataset["long_description"];
};

const DatasetHeroSection = ({ name, description }: Props) => (
  <div className="flex items-start justify-between w-full text-white">
    <div className="flex items-start space-x-6">
      <Image
        src="/logo.png"
        alt="Albert Einstein"
        className="w-28 h-28 rounded-lg object-cover"
        width={271}
        height={175}
      />
      <div>
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-gray-300">
          {description || "No description available."}
        </p>
      </div>
    </div>


    <button className="flex items-center space-x-2 bg-oOrange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 cursor-pointer transition-colors">
      <CloudArrowDown className="w-5 h-5" />
      <span>Download dataset</span>
    </button>
  </div>
);

export default DatasetHeroSection;
