import Img from "../../Assets/Bike delivery.png";

export default function About() {
  const items = [
    ["5K+", "Happy Users"],
    ["20+", "Restaurants"],
    ["50+", "Food Menu"],
  ];
  return (
    <div className="center py-16 bg-green-50 px-3 flex-col gap-10">
      <p className="text-3xl lg:text-5xl font-bold mb-5">About Us</p>
      <div className="grid grid-cols-1 container lg:grid-cols-2 gap-10">
        <div className="center">
          <img src={Img} alt="" className="" />
        </div>
        <div className=" flex flex-col justify-between">
          <p className="text-2xl font-semibold text-green-500 text-center lg:text-start">Overview</p>
          <p className="w-full lg:w-[30ch] text-center lg:text-start text-base">
            Experience the fastest way to savor your favorites with our delivery
            app. Swift deliveries, guaranteed!
          </p>
          <div className="flex gap-10 justify-center lg:justify-start mt-6">
            {items.map((data, key) => (
              <div className="space-y-2 flex flex-col lg:items-start items-center" key={key}>
                <p className="text-base lg:text-xl font-semibold">{data[0]}</p>
                <p className="text-sm lg:text-base mt-2 text-green-500">{data[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
