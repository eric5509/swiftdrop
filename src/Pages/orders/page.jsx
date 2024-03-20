import { useState } from "react";
import FoodCard from "../../Components/Menu/FoodCard";
import Header from "../../Components/Orders/Header";
import Order from "../../Components/Orders/Order";
import Button from "../../Components/Others/Button";
import OrderC from "../../Components/Orders/OrderC";
import OrderB from "../../Components/Orders/OrderB";
import Dropdown from "../../Components/Orders/Dropdown";

export default function OrderPage() {
  const [active, setActive] = useState(0);

  const details = {
    order: 6900,
    discount: 500,
  };
  return (
    <div>
      <Header setActive={setActive} active={active} />
      {active === 0 ? (
        <div className="">
          <div className="grid grid-cols-4 gap-5 mt-5">
            {[1, 2, 3, 4, 5].map(() => (
              <FoodCard />
            ))}
          </div>
          <div className="flex flex-col gap-4 mt-5">
            {[1, 2, 3].map(() => (
              <Order />
            ))}
          </div>
          <div className="flex mt-8 font-semibold text-sm border-t-2 pt-4 justify-between items-center">
            <p>Order Price:</p>
            <p>{details.order.toLocaleString()}</p>
          </div>
          <div className="flex mt-5 pb-4 font-semibold text-sm border-b-2 justify-between items-center">
            <p>Discount:</p>
            <p>N{details.discount}</p>
          </div>
          <div className="flex mt-5 text-lg font-semibold justify-between items-center">
            <p>Total:</p>
            <p>N{(details.discount + details.order).toLocaleString()}</p>
          </div>
          <div className="center mt-5 gap-5">
            <Button background={"red"} text={"Cancel Order"} />
            <Button background={"green"} text={"Accept Order"} />
          </div>
        </div>
      ) : (
        <div className="">
          <OrderC />
          <OrderB />
          <Dropdown />
        </div>
      )}
    </div>
  );
}
