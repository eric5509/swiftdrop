export default function Succeed() {

  const customer = [
    'Eric Emeka Ibe',
    '#23492NDD',
    'Solomon Kalou',
    'Successful',
    'JAN 5, 09:42 AM',
    '#4,500'
  ]
  return (
    <main>
      <div className="flex flex-col mt-4 gap-4">
        {[1, 2, 3, 4, 5,5,5,5,5,5,5,5,5,5,5,5,5,5,].map(() => (
          <div className="flex gap-3 border-b-2 pb-2 items-center">
            <div className="h-4 w-4 cursor-pointer border"></div>
            <div className="flex-1 grid gap-3 grid-cols-6">
              {customer.map((data, key) => (
                <div className="center" key={key}>
                  <p className={`${key === 3 && data === 'Successful' && 'text-white bg-green-500 px-2 py-1 rounded-md'}`}>{data}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
