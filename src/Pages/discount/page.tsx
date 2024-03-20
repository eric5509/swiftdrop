import { BsTrash } from "react-icons/bs";

export default function DiscountPage() {
  return (
    <div>
      <div className="flex bg-green-500 justify-between items-center">
        <p>Discount</p>
        <p>Add Discount</p>
      </div>
      <div className="grid grid-cols-3 bg-red-500">
        <div className="">
            <p>5%</p>
            <p>Hello</p>
        </div>
        <div className="center text-center items-center">
            <p>54%</p>
        </div>
        <div className="flex items-center justify-end">
            <p>Edit</p>
            <BsTrash />
        </div>

      </div>
    </div>
  );
}
