import Logo from "../../Assets/Logo.svg";
import { BsFacebook, BsInstagram, BsTelegram, BsTwitter } from "react-icons/bs";

export default function Footer() {
  const socials = [
    <BsFacebook />,
    <BsInstagram />,
    <BsTwitter />,
    <BsTelegram />,
  ];
  const links = [
    ["Link", ["About Us", "FAQ", "Contact Us", "Career"]],
    ["Policy", ["Security", "Privacy", "Terms of Use", "Return Privacy"]],
    ["Help", ["Membership", "Payment", "Account", "Shipping"]],
  ];
  return (
    <div className='bg-emerald-800 py-14 text-white'>
      <div className="grid container grid-cols-1 gap-7 lg:gap-0 px-6 lg:px-0 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div className="flex flex-col justify-between gap-10">
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-2">
              <img src={Logo} alt="" />
              <p className="font-semibold text-lg">SwifDrop</p>
            </div>
            <p className="text-base text-center lg:text-start font-semibold mt-3 mb-6">
              SwifDrop gives you the best of food in a flash
            </p>
          </div>
          <div className="hidden lg:block space-y-3">
            <p className="text-sm mb-7">
              Copyright 2024, All Rights Reserved by SwifDrop
            </p>
            <div className="flex gap-7 ">
              {socials.map((data, key) => (
                <div
                  className={`text-xl cursor-pointer duration-300 ${
                    key !== 1 ? "hover:text-blue-600" : "hover:text-rose-500"
                  }`}
                  key={key}
                >
                  {data}
                </div>
              ))}
            </div>
          </div>
        </div>
        {links.map((data, key) => (
          <div className="" key={key}>
            <p className="mb-3 text-lg font-semibold">{data[0]}</p>
            <div className="flex flex-col gap-3">
              {data[1].map((data1, key) => (
                <p className="text-sm w-fit hover:text-yellow-400 duration-200 hover:underline cursor-pointer" key={key}>{data1}</p>
              ))}
            </div>
          </div>
        ))}
         <div className="flex lg:hidden flex-col-reverse gap-6 mt-5 items-center text-center">
            <p className="text-sm">
              Copyright 2024, All Rights Reserved by SwifDrop
            </p>
            <div className="flex gap-6">
              {socials.map((data, key) => (
                <div
                  className={`text-xl cursor-pointer duration-300 ${
                    key !== 1 ? "hover:text-blue-600" : "hover:text-rose-500"
                  }`}
                  key={key}
                >
                  {data}
                </div>
              ))}
            </div>
          </div>
      </div>
    </div>
  );
}
