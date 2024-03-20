import { useState } from "react";
import { BsChevronBarUp, BsEye } from "react-icons/bs";
import Recieved from "./Recieved";

export default function Main() {
  const sections = [
    ["Swift Wallet Balance", 43059],
    ["Available Balance", 230445],
    ["Total Amount in Wallet", 273504],
  ];
  const headers = ["Invoice ID", "Date", "Total Spent", "Status"];
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="flex border-b-2 bg-white p-6 pb-4 justify-between items-center">
        <p className="text-2xl font-bold">Payment</p>
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 bg-green-500 rounded-full center shadow">
            <BsChevronBarUp className="text-base text-white stroke-1" />
          </div>
          <p className="font-semibold">Withdrawal</p>
        </div>
      </div>
      <div className="p-6">
        <div className="grid mt-3 grid-cols-3 gap-5">
          {sections.map((data, key) => (
            <div
              className="px-10 py-12 center flex-col gap-3 rounded-md bg-green-50 shadow-md rounded-xl"
              key={key}
            >
              <div className="flex text-green-500 gap-2">
                <p className="text-11 font-semibold">{data[0]}</p>
                <BsEye className="text-base" />
              </div>
              <p className="text-green-500 font-bold text-xl">
                N{data[1].toLocaleString()+'.00'}
              </p>
            </div>
          ))}
        </div>
        <div className="flex mt-5 items-center gap-1">
          <div className="h-[6px] w-[6px] bg-gray-600 rounded-full "></div>
          <p className="text-gray-500 text-11">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            sit quam voluptatibus mollitia eos laborum enim cupiditate sint
            eaque nemo.
          </p>
        </div>
        <div className="grid mt-5 border-2 border-green-500 grid-cols-2 h-12">
          <div
            onClick={() => setActive(0)}
            className={`center cursor-pointer duration-300 ${
              active === 0
                ? "bg-green-500 text-white"
                : "bg-transparent text-green-500"
            }`}
          >
            <p>Recieved</p>
          </div>
          <div
            onClick={() => setActive(1)}
            className={`center cursor-pointer duration-300 ${
              active === 1
                ? "bg-green-500 text-white"
                : "bg-transparent text-green-500"
            }`}
          >
            <p>Withdrawal</p>
          </div>
        </div>
        <div className="grid bg-white mt-3 mb-2 py-3 grid-cols-4">
          {headers.map((data, key) => (
            <div className="center" key={key}>
              <p className="font-semibold">{data}</p>
            </div>
          ))}
        </div>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map(() => (
            <Recieved /> 
          ))}
        </div>
      </div>
    </div>
  );
}
