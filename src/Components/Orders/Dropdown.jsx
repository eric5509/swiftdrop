export default function Dropdown() {
  return (
    <div className="h-full w-full ">
      <div className="flex p-3 bg-green-100 justify-between items-center">
        <p>Jollof Rice</p>
        <p className="font-bold">N1,500</p>
      </div>
      <p className="bg-gray-200 p-3">Side items</p>
      <div className="border-2 border-b-0">
        {[1, 2 ].map(() => (
          <div className="flex justify-between p-3 border-b-2 items-center">
            <p>Roasted Chicken</p>
            <p className="font-semibold">N1,500</p>
          </div>
        ))}
      </div>
    </div>
  );
}
