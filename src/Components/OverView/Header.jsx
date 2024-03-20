export default function Header() {
    const links = [
        "Customer Name",
        "Order Id",
        "Drivers Name",
        "Status",
        "Date",
        "Total Spent",
      ];
  return (
    <div className="flex gap-3 mt-4 items-center">
      <div className="h-4 w-4 cursor-pointer border"></div>
      <div className="flex-1 font-semibold text-gray-800 grid gap-3 grid-cols-6">
        {links.map((data, key) => (
          <div className="center" key={key}>
            <p>{data}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
