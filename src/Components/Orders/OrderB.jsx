import { BsChevronDown } from "react-icons/bs";
import Button from "../Others/Button";
import Button2 from "../Others/Button2";
import Dropdown from "./Dropdown";

export default function OrderB() {
  return (
    <main className="flex flex-col gap-4 mt-5">
      {[1,4,6,7,7].map(() => (
        <div className="">
          <div className="flex relative items-center py-3 px-8 bg-green-50 border rounded-lg border-green-500 justify-between">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              <p className="font-bold">ORDER #122299</p>
            </div>
            <div className="flex gap-4 items-center">
              <Button2 background={"green"} text={"Dispatch Order"} />
              <BsChevronDown className="text-11 stroke-1" />
            </div>
          </div>
          <Dropdown />
        </div>
      ))}
    </main>
  );
}
