export default function OrderC() {
  const items = [
    "ORDER ID",
    "DRIVER ",
    "DRIVER'S Name",
    "Email",
    "Action",
    "Status",
  ];
  const customer = [
    "#23342",
    "",
    "John Cena",
    "john@email.com",
    "Confirm ID",
    "Successful",
  ];

  return (
    <div>
      <div className="grid uppercase grid-cols-6 mt-5">
        {items.map((data, key) => (
          <div className="center" key={key}>
            <p className="font-bold">{data}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4 mt-7">
        {[1, 2, 3, 4, 5].map(() => (
          <div className="grid grid-cols-6">
            {customer.map((data, key) => (
              <div className="center" key={key}>
                {key === 1 ? (
                  <div className="h-10 w-10 border-2"></div>
                ) : (
                  <p
                    className={`${
                      key === 5 &&
                      "bg-green-500 shadow text-white px-4 py-2 rounded-full"
                    } ${
                      key === 4 &&
                      "bg-gray-300 text-11 px-2 py-2 shadow rounded-full"
                    }`}
                  >
                    {data}
                  </p>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
