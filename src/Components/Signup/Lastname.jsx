

export default function Lastname({errors, setValues, setErrors, values}) {
return (
  <div className="">
    <p className="font-semibold">Lastname</p>
    <div
      className={`h-11 w-full border-2 my-1 duration-300 rounded-md ${
        errors.lastname !== ""
          ? "border-red-500 bg-red-50"
          : "border-gray-300 bg-transparent"
      }`}
    >
      {" "}
      <input
        onChange={(e) => {
          setErrors({ ...errors, lastname: "", others: "" });
          setValues({ ...values, lastname: e.target.value });
        }}
        value={values.lastname}
        type="text"
        className="h-full w-full bg-transparent outline-none border-none px-2"
      />
    </div>
    {errors.lastname !== "" && (
      <p className="text-11 mt-[2px] text-red-500">{errors.lastname}</p>
    )}
  </div>
);
}
