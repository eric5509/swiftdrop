import Img from "../../Assets/iPhone.png";
import Play from "../../Assets/Play Store.png";
import App from "../../Assets/App Store.png";

export default function Download() {
  return (
    <div className="center py-16 bg-green-50 gap-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="center">
          <img src={Img} alt="" className="" />
        </div>
        <div className=" flex flex-col gap-5 items-center justify-center">
          <p className="text-xl lg:text-3xl text-green-500">Download SwifDrop</p>
          <p className="w-full text-center lg:text-start lg:w-[40ch] text-base lg:text-xl ">
            Enjoy swift deliveries on anything you order!
          </p>
          <div className="flex items-center gap-3">
            <img src={Play} alt="" className="h-8 lg:h-12"/>
            <img src={App} alt="" className="h-8 lg:h-12"/>
          </div>
        </div>
      </div>
    </div>
  );
}
