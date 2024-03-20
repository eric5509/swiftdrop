import { BsBell, BsChevronDown, BsSearch } from "react-icons/bs";

export default function TopNav() {
  return (
    <div className="flex h-full border-b-2 px-3 items-center gap-5">
      <div className="flex-1 bg-cyan-500 h-full relative">
        <BsSearch className="-translate-y-1/2 top-1/2 absolute left-1 text-base" />
        <input
          type="text"
          className="h-full w-full pl-8 outline-none"
          placeholder="Search..."
        />
      </div>
      <div className="h-10 w-10 rounded-full bg-green-200 center">
        <div className="relative">
          <BsBell className="text-lg text-green-500" />
          <div className="h-2 w-2 bg-red-500 top-0 absolute -right-0 rounded-full"></div>
        </div>
      </div>
      <div className="flex items-center cursor-pointer gap-2">
        <div className="h-10 w-10 rounded-full bg-yellow-400 center"></div>
        <p className="font-semibold">
          Chicken Republic <BsChevronDown className="inline" />
        </p>
      </div>
    </div>
  );
}
