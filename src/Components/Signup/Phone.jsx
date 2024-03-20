
  export default function Phone({
    errors,
    setValues,
    setErrors,
    values,
  }) {
    return (
      <div className="">
        <p className="font-semibold">Phone Number</p>
        <div
          className={`h-11 w-full border-2 my-1 duration-300 rounded-md ${
            errors.phone !== ""
              ? "border-red-500 bg-red-50"
              : "border-gray-300 bg-transparent"
          }`}
        >
          {" "}
          <input
            onChange={(e) => {
              setErrors({ ...errors, phone: "", others: "" });
              setValues({ ...values, phone: e.target.value });
            }}
            value={values.phone}
            type="text"
            className="h-full w-full bg-transparent outline-none border-none px-2"
          />
        </div>
        {errors.phone !== "" && (
          <p className="text-11 mt-[2px] text-red-500">{errors.phone}</p>
        )}
      </div>
    );
  }
  