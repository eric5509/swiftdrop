import { useState } from "react";
import { BsFilter, BsFunnel, BsFunnelFill } from "react-icons/bs";


export default function Filter({ setActiveLink }) {
  const [active, setActive] = useState(0);
  return (
    <div className="mt-12 mb-5 px-6 flex justify-between items-center">
      <div className="flex gap-5 text-13 items-center">
        <p
          onClick={() => {
            setActiveLink(0);
            setActive(0);
          }}
          className={`border-b-2 duration-300 pb-1 cursor-pointer ${
            active === 0 ? "border-b-blue-500 font-bold" : "border-transparent"
          }`}
        >
          Succeeded
        </p>
        <p
          onClick={() => {
            setActiveLink(1);
            setActive(1);
          }}
          className={`border-b-2 duration-300 pb-1 cursor-pointer ${
            active === 1 ? "border-b-blue-500 font-bold" : "border-transparent"
          }`}
        >
          Refunded
        </p>
        <p
          onClick={() => {
            setActiveLink(2);
            setActive(2);
          }}
          className={`border-b-2 duration-300 pb-1 cursor-pointer ${
            active === 2 ? "border-b-blue-500 font-bold" : "border-transparent"
          }`}
        >
          All
        </p>
      </div>
      <div className="flex bg-green-400 py-2 px-5 cursor-pointer text-white shadow-md rounded-md gap-2 items-center">
        <BsFunnelFill className="text-base" />
        <p>Filter</p>
      </div>
    </div>
  );
}
