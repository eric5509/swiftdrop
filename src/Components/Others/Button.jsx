
export default function Button({background, text}) {
  return (
    <div className="flex">
      <button className="px-5 py-3 duration-300 active:scale-95 rounded-md text-white shadow-md" style={{backgroundColor: `${background}`}}>
        {text}
      </button>
    </div>
  );
}
