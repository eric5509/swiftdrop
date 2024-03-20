export default function Recieved() {
    const items = ['#113154', '12 JAN, 2024', 2500, 'successful']
  return (
    <div> 
        <div className="grid py-2 grid-cols-4">
        {items.map((data, key) => (
          <div className="center" key={key}>
            <p className={`capitalize ${key === 3 && 'text-green-500 font-semibold'}`}>{key === 2 && 'N'}{data.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
