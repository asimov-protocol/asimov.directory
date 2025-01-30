import { MagnifyingGlass } from "@phosphor-icons/react";

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ onChange }: Props) => {
  return (
    <div className="flex items-center w-full bg-transparent border border-gGray-300 rounded-xl p-2">
      <MagnifyingGlass className="text-gGray-300 w-5 h-5 mx-2" />
      <input
        type="text"
        placeholder="Search"
        className="text-white placeholder-gGray-300 focus:outline-none w-full"
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
