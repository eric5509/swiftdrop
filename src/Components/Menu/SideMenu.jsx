import { BiSolidEdit } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";

export default function SideMenu() {
  return (
    <div>
      <p className="text-lg font-bold">All Your Side Menu</p>
      <p className="font-semibold mt-3">Required Side Menu</p>
      <div className="mt-4 space-y-3">
        <div className="flex items-center justify-between border border-green-500 px-3 py-2 rounded-md">
          <p className="text-13 font-semibold">Burger</p>
          <div className="flex font-semibold items-center gap-3">
            <p>N1,500</p>
            <BiSolidEdit className="cursor-pointer text-sm text-green-500" />
            <BsTrash className="cursor-pointer text-sm text-red-500" />
          </div>
        </div>
       
      </div>
    </div>
  );
}
