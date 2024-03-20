"use client";
import { useState } from "react";


export default function Header({active, setActive}) {
  const [on, setOn] = useState(true)
  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-2xl font-bold">Orders</p>
        <div className="flex gap-5 text-sm">
          <p
            onClick={() => setActive(0)}
            className={`pb-1 duration-300 cursor-pointer ${
              active === 0
                ? "border-blue-500 text-blue-500"
                : "border-transparent text-yellow-400"
            } border-b-2`}
          >
            Pending
          </p>
          <p
            onClick={() => setActive(1)}
            className={`pb-1 duration-300 cursor-pointer ${
              active === 1
                ? "border-blue-500 text-blue-500"
                : "border-transparent text-yellow-400"
            } border-b-2`}
          >
            Delivery Ready
          </p>
        </div>
      </div>
      <div className="flex text-sm mt-3 py-2 justify-between items-center">
        <p>Order #12233</p>
        <p>08:28 AM, 05/01/24</p>
      </div>
      <div className="bg-green-100 flex items-center w-fit p-2 mt-3 rounded-full gap-20">
        <p>Toggle on to display your restaurant as open</p>
        <div onClick={() => setOn(!on)} className={`p-1 rounded-full cursor-pointer w-11 flex duration-700 ${on ? 'justify-end bg-green-500' : 'bg-gray-200 justify-start'}`}>
          <div className="h-5 w-5 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
