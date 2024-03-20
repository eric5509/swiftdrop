import { BsChevronDown } from "react-icons/bs";

export default function AddFood() {
  return (
    <div className="p-3 border-2 text-11 rounded-md shadow-md flex flex-col w-72 items-center">
      <p className="text-xl mb-7 font-bold">Add New Food</p>
      <div className="h-16 w-16 border-2 rounded-md"></div>
      <p className="mt-1 text-11">Choose Image</p>
      <div className="w-full mt-4">
        <p className="ml-1 mb-[2px] mbp">Choose Category</p>
        <div className="flex h-10 text-11 px-1 justify-between border-2 w-full items-center">
          <p>(Select Food Categories) </p>
          <BsChevronDown />
        </div>
      </div>
      <div className="w-full mt-5">
        <p>Food Name</p>
        <div className="h-10 w-full border-2 "></div>
      </div>
      <div className="w-full mt-5">
        <p>Details</p>
        <div className="h-10 w-full border-2 "></div>
      </div>
      <div className="w-full mt-4">
        <p className="">Choose Side Menu</p>
        <div className="flex h-10 text-11 px-2 justify-between border-2 w-full items-center">
          <p>(Select Side Menu) </p>
          <BsChevronDown />
        </div>
      </div>
      <div className="w-full mt-4">
        <p className="">Discount</p>
        <div className="flex h-10 text-11 px-2 justify-between border-2 w-full items-center">
          <p>% </p>
          <BsChevronDown />
        </div>
      </div>
      <div className="w-full mt-4">
        <p className="">Price</p>
        <div className="flex h-10 text-11 px-2 justify-between border-2 w-full items-center">
          <p>% </p>
          <BsChevronDown />
        </div>
      </div>
      <div className="mt-5 center">
        <button className="px-3 py-2 rounded-md bg-green-500 text-white font-semibold shadow-md ">Save</button>
      </div>
    </div>
  );
}
