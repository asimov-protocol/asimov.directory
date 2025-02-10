import Link from 'next/link';

// bg-linear-to-bl from-transparent from-85% to-oOrange-500/50

const HeroSection = () => (
  <div className="flex flex-col lg:flex-row w-full h-(--hero-height) text-white">
    {/* Left Section */}
    <div className="flex flex-col justify-center items-start w-full lg:w-1/2 space-y-6">
      <div className="flex items-center space-x-2 bg-gGray-500 px-1 py-1 rounded-full font-semibold">
        <span className="text-white px-2 text-sm">Launch in Q1 2025</span>
        <Link
          href="#"
          className="bg-oOrange-500 px-2 py-1 rounded-full text-sm hover:text-orange-300"
        >
          Visit TGE website
        </Link>
      </div>
      <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
        Unbiased AI starts with{' '}
        <span className="text-oOrange-500">unbiased data</span>
      </h1>
      <p className="text-lg lg:text-xl text-gray-300">
        Eliminate bias in AI with LLM-agnostic, tamper-proof datasets secured by
        blockchain
      </p>
      <span className="text-oOrange-500 font-bold">#BuildOnTruth</span>
      <div className="flex space-x-4">
        <Link
          href="/datasets"
          className="bg-white text-black rounded-xl transition-colors hover:bg-gray-200 px-6 py-3 text-lg font-medium"
        >
          Explore datasets
        </Link>
        <Link
          href="#"
          className="text-white hover:underline px-6 py-3 text-lg font-medium"
        >
          Learn more
        </Link>
      </div>
    </div>

    {/* Right Section */}
    <div className="w-full lg:w-1/2"></div>
  </div>
);

export default HeroSection;
