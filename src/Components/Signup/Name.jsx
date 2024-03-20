export default function Name({errors, setValues, setErrors, values}) {
  return (
    <div className="">
      <p className="font-semibold">Restaurant's Name</p>
      <div
        className={`h-11 w-full border-2 my-1 duration-300 rounded-md ${
          errors.restaurantName !== ""
            ? "border-red-500 bg-red-50"
            : "border-gray-300 bg-transparent"
        }`}
      >
        {" "}
        <input
          onChange={(e) => {
            setErrors({ ...errors, restaurantName: "", others: "" });
            setValues({ ...values, restaurantName: e.target.value });
          }}
          value={values.restaurantName}
          type="text"
          className="h-full w-full bg-transparent outline-none border-none px-2"
        />
      </div>
      {errors.restaurantName !== "" && (
        <p className="text-11 mt-[2px] text-red-500">{errors.restaurantName}</p>
      )}
    </div>
  );
}
