export default function Firstname({
  errors,
  setValues,
  setErrors,
  values,
}) {
  return (
    <div className="">
      <p className="font-semibold">Firstname</p>
      <div
        className={`h-11 w-full border-2 my-1 duration-300 rounded-md ${
          errors.firstname !== ""
            ? "border-red-500 bg-red-50"
            : "border-gray-300 bg-transparent"
        }`}
      >
        {" "}
        <input
          onChange={(e) => {
            setErrors({ ...errors, firstname: "", others: "" });
            setValues({ ...values, firstname: e.target.value });
          }}
          value={values.firstname}
          type="text"
          className="h-full w-full bg-transparent outline-none border-none px-2"
        />
      </div>
      {errors.firstname !== "" && (
        <p className="text-11 mt-[2px] text-red-500">{errors.firstname}</p>
      )}
      {errors.others !== "" && (
        <p className="text-11 mt-[2px] text-red-500">{errors.others}</p>
      )}
    </div>
  );
}
