import Img1 from "../../Assets/Restaurant.png";
import Img2 from "../../Assets/Driver vector.png";
import Img3 from "../../Assets/Group 70.png";

export default function Services() {
  const items = [
    {
      image: Img1,
      header: "Register your restaurant",
      text: "Elevate your business with SwifDrop! Partner with us to boost sales, and unlock new opportunities.",
      button: "Register your Store",
    },
    {
      image: Img2,
      header: "Become our rider",
      text: "Indulge in flexibility, seize freedom, and earn competitively as you deliver with SwifDrop.",
      button: "Start Earning",
    },
    {
      image: Img3,
      header: "Careers",
      text: "Want to be part of us and contribute to the amazing work we're doing",
      button: "Apply Now",
    },
  ];
  return (
    <div className="flex py-16 bg-white flex-col items-center gap-5">
      <p className="text-3xl lg:text-5xl font-bold mb-5">Our Services</p>
      <div className="grid container grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-3">
        {items.map((data, key) => (
          <div className="" key={key}>
            <div className="center">
              <img src={data.image} alt="" />
            </div>
            <div className="center text-center flex-col gap-5 mt-5">
              <p className="text-base font-semibold">{data.header}</p>
              <p className="w-[40ch]">{data.text}</p>
              <button className="px-6 hover:scale-105 py-3 shadow-md duration-300 active:scale-95 rounded-xl bg-green-500 text-white">{data.button}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
