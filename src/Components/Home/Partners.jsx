import Img from "../../Assets/pizzaimage.png";

export default function Partners() {
  return (
    <div className="center py-16 bg-white flex-col gap-10">
      <p className="text-3xl lg:text-5xl font-bold mb-2 lg:mb-5">Our Partners</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className=" flex items-center justify-end">
          <p className="w-full lg:w-[40ch] px-3 lg:px-0 text-base text-center lg:text-start lg:text-xl ">
            <b>Elevate</b> your <b>Restaurant's</b> reach with us and also streamline your
            potential management for <b>Swift Success</b>.
          </p>
        </div>
        <div className="center px-3 lg:px-0">
          <img src={Img} alt="" className="w-[500px]" />
        </div>
      </div>
    </div>
  );
}
