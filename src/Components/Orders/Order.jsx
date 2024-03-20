export default function Order() {
  return (
    <div>
      <div className="flex p-4 rounded-md bg-emerald-100 shadow-md justify-between">
        <div className="flex gap-4 items-center">
          <div className="h-11 w-11 rounded-full border-2 border-green-500"></div>
          <div className="text-11">
            <p className="font-semibold text-sm">Jollof Rice</p>
            <p className="text-gray-700 mt-1">Side Menu: Roasted chicken, salad, pepsi, bottle water</p>
            <p className="text-gray-700 mt-1">Packaging: Plastic container</p>
          </div>
        </div>
        <p className="font-bold">N3,750</p>
      </div>
      
    </div>
  );
}
