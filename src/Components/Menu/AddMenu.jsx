
export default function AddMenu() {
  return (
    <div className="w-72 p-5 flex items-center flex-col rounded-2xl border-2">
      <p className="text-lg font-bold">Add New Menu</p>

      <div className="w-full mt-7">
        <p className="text-11 mb-[2px]">Menu Name</p>
        <div className="h-10 border-2 rounded-md"></div>
      </div>
      <div className="w-full center">
        <button className="bg-green-500 text-white rounded-md px-5 shadow-md py-2 mt-6">Save</button>
      </div>
    </div>
  );
}
