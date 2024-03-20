
export default function Button2({background, text}) {
  return (
    <div className="flex">
      <button className="px-4 py-2 duration-300 active:scale-95 rounded-md text-white shadow-md" style={{backgroundColor: `${background}`}}>
        {text}
      </button>
    </div>
  );
}
