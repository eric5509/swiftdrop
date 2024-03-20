import React from "react";
import { BsCloudUploadFill } from "react-icons/bs";
import { FaLocationDot, FaLocationPin } from "react-icons/fa6";

export default function Location({errors, setValues, setErrors, values}) {
  return (
    <div className="">
      <p className="font-semibold">Restaurant's Location</p>
      <div
        className={`h-11 w-full flex border-2 my-1 duration-300 rounded-md ${
          errors.location !== ""
            ? "border-red-500 bg-red-50"
            : "border-gray-300 bg-transparent"
        }`}
      >
        {" "}
        <div className="h-full w-10 bg-white center text-lg overflow-hidden rounded-l-md">
          <FaLocationDot className="text-green-500" />
        </div>
        <input
          onChange={(e) => {
            setErrors({ ...errors, location: "", others: "" });
            setValues({ ...values, location: e.target.value });
          }}
          value={values.location}
          type="text"
          className="h-full flex-1 bg-transparent outline-none border-none px-2"
        />
      </div>
      {errors.location !== "" && (
        <p className="text-11 mt-[2px] text-red-500">{errors.location}</p>
      )}
    </div>
  );
}
