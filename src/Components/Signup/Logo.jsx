import React from "react";
import { BsCloudUploadFill } from "react-icons/bs";


export default function Logo({errors, setValues, setErrors, values}) {
  return (
    <div className="">
      <p className="font-semibold">Restaurant's Logo</p>
      <div
        className={`h-11 w-full flex border-2 my-1 duration-300 rounded-md ${
          errors.logo !== ""
            ? "border-red-500 bg-red-50"
            : "border-gray-300 bg-transparent"
        }`}
      >
        {" "}
        <div className="h-full w-10 bg-white center text-lg overflow-hidden rounded-l-md">
          <BsCloudUploadFill className="text-green-500" />
        </div>
        <input
          onChange={(e) => {
            setErrors({ ...errors, logo: "", others: "" });
            setValues({ ...values, logo: e.target.value });
          }}
          value={values.logo}
          type="text"
          className="h-full flex-1 bg-transparent outline-none border-none px-2"
        />
      </div>
      {errors.logo !== "" && (
        <p className="text-11 mt-[2px] text-red-500">{errors.logo}</p>
      )}
      
    </div>
  );
}
