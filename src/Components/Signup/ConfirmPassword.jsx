
export default function ConfirmPassword({
  errors,
  setValues,
  setErrors,
  values,
}) {
  return (
    <div className="">
      <p className="font-semibold">Confirm Password</p>
      <div
        className={`h-11 w-full border-2 my-1 duration-300 rounded-md ${
          errors.confirmPassword !== ""
            ? "border-red-500 bg-red-50"
            : "border-gray-300 bg-transparent"
        }`}
      >
        {" "}
        <input
          onChange={(e) => {
            setErrors({ ...errors, confirmPassword: "", others: "" });
            setValues({ ...values, confirmPassword: e.target.value });
          }}
          value={values.confirmPassword}
          type="password"
          className="h-full w-full bg-transparent outline-none border-none px-2"
        />
      </div>
      {errors.confirmPassword !== "" && (
        <p className="text-11 mt-[2px] text-red-500">{errors.confirmPassword}</p>
      )}
    
    </div>
  );
}
