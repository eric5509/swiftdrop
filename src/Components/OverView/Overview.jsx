import { useState } from "react";
import { BiSolidBulb } from "react-icons/bi";

export default function Overview() {
  const userId = localStorage.getItem("userId");
  const [overview, setOverview] = useState({
    delivered: 0,
    orders: 0,
    pending: 0,
    confirm: 0,
    ontheway: 0,
  });
  const FetchAll = async () => {
    const responseDelivered = await fetch(
      ` https://swifdropp.onrender.com/api/v1/restaurant/delivered/${userId}`
    );
    const dataDelivered = await responseDelivered.json();

    const responseOrders = await fetch(
      `https://swifdropp.onrender.com/api/v1/orders/restaurantorderss/${userId}`
    );
    const dataOrders = await responseOrders.json();

    const responsePending = await fetch(
      `https://swifdropp.onrender.com/api/v1/restaurant/pending/${userId}`
    );
    const dataPending = await responsePending.json();

    const responseConfirm = await fetch(
      `https://swifdropp.onrender.com/api/v1/restaurant/confirm/${userId}`
    );
    const dataConfirm = await responseConfirm.json();

    const responseOntheway = await fetch(
      `https://swifdropp.onrender.com/api/v1/restaurant/ontheway/${userId}`
    );

    const dataOntheway = await responseOntheway.json();

    setOverview({
      delivered: dataDelivered,
      orders: dataOrders,
      pending: dataPending,
      confirm: dataConfirm,
      ontheway: dataOntheway,
    });
  };

  return (
    <div className="p-6 pb-0">
      <p className="text-2xl font-bold">Overview</p>
      <div className="grid mt-5 grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((data, key) => (
          <div
            key={key}
            className="p-7 text-white bg-green-500 flex flex-col gap-5 items-center rounded-xl shadow-lg"
          >
            <div
              className={`flex w-full ${
                key === 3 ? "justify-center" : "justify-between"
              }`}
            >
              <p className="text-13 font-semibold">New Orders</p>
              {key !== 3 && <BiSolidBulb className="text-yellow-400 text-lg" />}
            </div>
            <p className="text-3xl font-bold">12</p>
            <div
              className={`gap-1 items-center ${key === 3 ? "hidden" : "flex"}`}
            >
              <div className="h-2 w-2 rounded-full bg-white"></div>
              <p>Updated at every new order</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
