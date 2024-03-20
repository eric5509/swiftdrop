export default function FoodCard() {
  return (
    <div className="w-full border-2 border-green-500 bg-green-50 shadow-md rounded-lg p-3">
      <div className="flex items-center justify-between">
        <div className="text-10">
          <p className="text-11 font-semibold">Order #100144</p>
          <p className="text-gray-400">08:28 AM, 05/01/24</p>
        </div>
        <div className="h-5 w-5 rounded-full bg-red-500"></div>
      </div>
      <div className="flex mt-4 justify-between items-center">
        <div className="flex gap-2">
          <div className="h-14 w-14 rounded-full border-2 border-green-500"></div>
          <div className="">
            <p>Jollof rice</p>
            <p className="text-11 text-gray-400">Jollof rice and chicken</p>
            <p className="text-10 font-bold">N2,900</p>
          </div>
        </div>
        <p>(1)</p>
      </div>
      <p className="text-10 mt-1 text-end text-blue-600">+2 more</p>
      <div className="flex border-t pt-2 border-gray-300 mt-2 justify-between">
        <p className="text-11">Total:</p>
        <p className="font-bold">N9,000</p>
      </div>
      <div className="flex justify-end">
        <button className="p-2 bg-green-500 text-white text-10 rounded-xl mt-4">
          View Order
        </button>
      </div>
    </div>
  );
}
