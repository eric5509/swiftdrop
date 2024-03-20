import { BsChevronDown } from "react-icons/bs"

export default function Main() {
  return (
    <div>
      <div className="p-6 border-b-2 bg-white">
        <p className="text-xl font-bold">Dispute</p>
      </div> 
      <div className="grid p-6 grid-cols-2 gap-4 ">
        <div className="">
          <p className="mb-[2px] text-11">Name</p>
          <div className="w-full h-10 bg-white border-2 rounded-md">
            <input
              type="text"
              placeholder="Your name"
              className="flex-1 text-11 px-2 h-full outline-none border-none bg-transparent"
            />
          </div>
        </div>
        <div className="">
          <p className="mb-[2px] text-11">Email</p>
          <div className="w-full h-10 bg-white border-2 rounded-md">
            <input
              type="text"
              placeholder="you@company.com"
              className="flex-1 text-11 px-2 h-full outline-none border-none bg-transparent"
            />
          </div>
        </div>
        <div className="">
          <p className="mb-[2px] text-11">Phone Number</p>
          <div className="w-full h-10 bg-white px-1 flex border-2 rounded-md">
            <select
              name=""
              className="h-full text-gray-500 text-11 outline-none border-none"
            >
              <option value="">NGN</option>
            </select>
            <input
              type="text"
              placeholder="+234 (70) 000-0000"
              className="flex-1 text-11 px-1 h-full outline-none border-none bg-transparent"
            />
          </div>
        </div>
        <div className="">
          <p className="mb-[2px] text-11">Order ID</p>
          <div className="w-full h-10 bg-white border-2 rounded-md">
          <input
              type="text"
              placeholder="#SWJ2622"
              className="flex-1 text-11 px-2 h-full outline-none border-none bg-transparent"
            />
          </div>
        </div>
        <div className="">
          <p className="mb-[2px] text-11">Restaurant's Name</p>
          <div className="w-full h-10 bg-white border-2 rounded-md"></div>
        </div>
        <div className="">
          <p className="mb-[2px] text-11">Nature of Complaint</p>
          <div className="w-full h-10 flex items-center text-gray-400 px-2 bg-white border-2 rounded-md">
            <p><BsChevronDown className="inline mr-1"/> (Select all that apply)</p>
          </div>
        </div>
      </div>
      <div className="space-y-2 p-6 pt-0">
        <p className="mb-[2px] text-11">Description</p>
        <div className="h-80 bg-white border-2 rounded-md">
        <textarea name="" className="h-full w-full p-2" placeholder="Enter a detailed description">
        </textarea>
        </div>
      </div>
      <div className="flex px-6 gap-2 items-center ">
        <div className="h-5 w-5 border rounded-sm"></div>
        <p>I agree to the Terms & Condition</p>
      </div>
      <div className="w-full px-6 mt-8 center">
        <button className="px-5 py-3 rounded-md shadow-md text-white font-semibold bg-green-500">Send message</button>
      </div>
    </div>
  );
}
