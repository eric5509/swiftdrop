export default function Hero() {
  return (
    <div className="height2 bg-black grid text-white grid-cols-2">
      <div className=" flex flex-col gap-6 justify-center px-16">
        <div className="text-4xl italic">
          <p>Delicious Deliveries, Delivered </p>
          <p>to your Doorstep!</p>
        </div>
        <p>Our mission is to bring the diverse flavors of your city to your table with ease of a click. We partner with renowned local restaurants to ensure you experience the best the culinary world has to offer.</p>
        <div className="flex gap-5">
            <div className="h-12 w-80 border-2 border-green-500 bg-white rounded-full">
                <input type="text" className="w-full text-black outline-none border-none text-13 pl-3 h-full bg-transparent " placeholder="Find your favorite restaurant..."/>
            </div>
            <button className="bg-green-500 text-white font-semibold text-sm px-6 duration-300 active:scale-95 hover:bg-green-600 border-2 border-white h-12 center rounded-full">Search</button>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}
