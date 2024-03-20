import { BiSolidEdit } from "react-icons/bi";
import { BsPlus, BsTrash } from "react-icons/bs";

export default function FoodMenu() {
  return (
    <div>
      <div className="flex items-center gap-2 my-3">
        <p className="text-xl font-bold">FoodMenu</p>
        <div className="h-7 w-7 rounded-full center bg-green-100">
          <BsPlus className="text-green-500 text-lg" />
        </div>
      </div>
      <div className="flex items-center justify-between bg-green-50 px-3 py-2 rounded-md">
        <p className="text-13 font-semibold">Burger</p>
        <div className="flex items-center gap-3">
          <BiSolidEdit className="cursor-pointer text-sm text-green-500" />
          <BsTrash className="cursor-pointer text-sm text-red-500" />
        </div>
      </div>
    </div>
  );
}
