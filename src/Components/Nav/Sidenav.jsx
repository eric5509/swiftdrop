import { useState } from "react";
import { NavLink, useLocation } from 'react-router-dom';

import {
  BsBadge4KFill,
  BsCheck2,
  BsChevronDown,
  BsCurrencyDollar,
  BsFire,
  BsHouse,
  BsMenuApp,
} from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

import Logo from '../../Assets/Logo.svg'
export default function Sidenav() {
  const pathname = useLocation().pathname
  const links = [
    [<BsHouse />, "Overview", "/overview"],
    [<BsFire />, "Orders", "/orders"],
    [<BsMenuApp />, "Food Menu", "/menu"],
    [<BsCurrencyDollar />, "Payment", "/payment"],
    [<FaBars />, "Dispute", "/dispute"],
    [<BsCheck2 />, "Discount", "/discount"],
  ];
  const [active, setActive] = useState(0);
  return (
    <main className="p-5 flex flex-col justify-between bg-emerald-50 h-full">
      <div className="">
        <div className="flex cursor-pointer w-fit items-center gap-2 mb-10">
          <div className="h-9 w-9 bg-gray-500 rounded-full">
            <img src={Logo} alt="" className='h-full w-full'/>
          </div>
          <p className="font-semibold text-sm">
            SwiftDrop <BsChevronDown className="inline text-11 stroke-1" />
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {links.map((data, key) => (
            <NavLink
              onClick={() => setActive(key)}
              to={`${data[2]}`}
              className={`flex duration-300 p-3 rounded-md ${
                pathname === data[2]
                  ? "bg-green-200 text-green-500"
                  : "bg-transparent"
              }  items-center gap-2`}
              key={key}
            >
              <p>{data[0]}</p>
              <p>{data[1]}</p>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <Link
          onClick={() => setActive(10)}
          href={"/settings"}
          className={`flex duration-300 p-3 rounded-md ${
            active === 10 ? "bg-green-200 text-green-500" : "bg-transparent"
          }  items-center gap-2`}
        >
          <p>
            <BsBadge4KFill />
          </p>
          <p>Settings</p>
        </Link>
      </div>
    </main>
  );
}
