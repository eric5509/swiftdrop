export default function Email({errors, setValues, setErrors, values}) {
  return (
    <div className="">
      <p className="font-semibold">Email</p>
      <div
        className={`h-11 w-full border-2 my-1 duration-300 rounded-md ${
          errors.email !== ""
            ? "border-red-500 bg-red-50"
            : "border-gray-300 bg-transparent"
        }`}
      >
        {" "}
        <input
          onChange={(e) => {
            setErrors({ ...errors, email: "", others: "" });
            setValues({ ...values, email: e.target.value });
          }}
          value={values.email}
          type="text"
          className="h-full w-full bg-transparent outline-none border-none px-2"
        />
      </div>
      {errors.email !== "" && (
        <p className="text-11 mt-[2px] text-red-500">{errors.email}</p>
      )}
     
    </div>
  );
}
