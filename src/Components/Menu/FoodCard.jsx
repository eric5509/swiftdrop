import { useState } from "react";
import { BsPencil, BsTrash2 } from "react-icons/bs";
import { TiArrowSortedDown } from "react-icons/ti";

export default function FoodCard() {
  const [on, setOn] = useState(true);
  return (
    <div className="w-full p-3 border-2 border-green-500 bg-green-50 shadow-md rounded-xl">
      <div className="h-40 p-2 flex flex-col justify-between rounded-xl bg-red-500">
        <div className="flex items-center justify-between">
          <div
            onClick={() => setOn(!on)}
            className={`p-1 rounded-full cursor-pointer w-9 flex duration-700 ${
              on ? "justify-end bg-green-500" : "bg-gray-200 justify-start"
            }`}
          >
            <div className="h-4 w-4 bg-white rounded-full"></div>
          </div>
          <div className="h-8 w-8 border-2 rounded-full bg-white shadow-md center">
            <BsTrash2 className="text-base" />
          </div>
        </div>
        <div className="flex justify-end">
          <p className="px-2 py-2 rounded-full shadow text-white bg-green-500 w-fit">
            N2,500
          </p>
        </div>
      </div>
      <div className="flex mt-2 justify-between items-center">
        <p className="font-semibold">Mega Stark Burger</p>
        <BsPencil />
      </div>
      <p className="mt-2">Side Dish</p>
      <div className="flex mt-2 rounded-sm p-2 bg-white justify-between">
        <p>Required</p>
        <TiArrowSortedDown />
      </div>
      <div className="flex mt-2 rounded-sm p-2 bg-white justify-between">
        <p>Optional</p>
        <TiArrowSortedDown />
      </div>
    </div>
  );
}
