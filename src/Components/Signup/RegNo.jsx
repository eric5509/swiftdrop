
  
  export default function RegNo({errors, setValues, setErrors, values}) {
  return (
    <div className="">
      <p className="font-semibold">Registration Number</p>
      <div
        className={`h-11 w-full border-2 my-1 duration-300 rounded-md ${
          errors.regNo !== ""
            ? "border-red-500 bg-red-50"
            : "border-gray-300 bg-transparent"
        }`}
      >
        {" "}
        <input
          onChange={(e) => {
            setErrors({ ...errors, regNo: "", others: "" });
            setValues({ ...values, regNo: e.target.value });
          }}
          value={values.regNo}
          type="text"
          className="h-full w-full bg-transparent outline-none border-none px-2"
        />
      </div>
      {errors.regNo !== "" && (
        <p className="text-11 mt-[2px] text-red-500">{errors.regNo}</p>
      )}
    </div>
  );
  }
  