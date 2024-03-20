import { BsCheck, BsEye, BsEyeSlash, BsStarFill } from "react-icons/bs";
import { useState } from "react";
import Logo from "../../Assets/Image4.svg";

export default function SigninPage() {
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
    rememberMe: checked,
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    others: "",
  });

  const Submit = async () => {
    if (values.email.trim() === "" || values.password.trim() === "") {
      setErrors({
        email: values.email.trim() === "" ? "Please fill in this field" : "",
        password:
          values.password.trim() === "" ? "Please fill in this field" : "",
        others: "",
      });
      return;
    }
    setLoading(true);
    try {
      const loginResponse = await fetch(
        "https://swifdropp.onrender.com/api/v1/login-Restaurant",
        {
          method: "POST",
          body: JSON.stringify({
            email: values.email,
            password: values.password,
            rememberMe: checked,
          }),

          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (loginResponse.ok) {
        const responseData = await loginResponse.json();
        sessionStorage.setItem("token", responseData.token);
        const userId = responseData.restaurant._id;
        console.log(userId, responseData);
        localStorage.setItem("userId", userId);
      } else {
        const errorData = await loginResponse.json();
        setErrors({ ...errors, others: errorData.error });

        // if (errorData.error) {
        //   setFormErrors({ serverError: errorData.error });
        // }
      }
    } catch (error) {
      console.error("Error Login:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="h-screen grid grid-cols-2">
        <div className="bg-green-500 justify-center flex flex-col items-center">
          <img
            src={Logo}
            alt=""
            className="object-contain h-[420px] w-[420px]"
          />
          <div className=" w-96">
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map(() => (
                <BsStarFill className="text-yellow-400 text-base" />
              ))}
            </div>
            <p className="mt-5">
              "Swiftdrop gives you the blocks and components you need to take to
              your sales to the next level"
            </p>
            <div className="flex items-center gap-2 mt-5">
              <div className="h-12 w-12 rounded-full border-2"></div>
              <div className="">
                <p className="font-semibold">Anny Bella Crayon</p>
                <p>Founder, Tasty Native</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white center flex-col">
          <div className="w-[400px]">
            <p className="text-3xl mb-3 font-bold">Welcome Back!</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              reiciendis temporibu.
            </p>
            <div className="mt-7 ">
              <p>Email Address</p>
              <div
                className={`h-11 w-full border-2 my-1 duration-300 rounded-md ${
                  errors.email !== ""
                    ? "border-red-500 bg-red-50"
                    : "border-gray-300 bg-white"
                }`}
              >
                <input
                  type="text"
                  onChange={(e) => {
                    setErrors({ ...errors, email: "", others: "" });
                    setValues({ ...values, email: e.target.value });
                  }}
                  value={values.email}
                  className="h-full w-full bg-transparent outline-none border-none px-2"
                />
              </div>
              {errors.email !== "" && (
                <p className="text-red-500">{errors.email}</p>
              )}
            </div>
            <div className="mt-5">
              <p>Password</p>
              <div
                className={`h-11 w-full border-2 relative my-1 duration-300 rounded-md ${
                  errors.password !== ""
                    ? "border-red-500 bg-red-50"
                    : "border-gray-300 bg-white"
                }`}
              >
                {" "}
                <input
                  onChange={(e) => {
                    setErrors({ ...errors, password: "", others: "" });
                    setValues({ ...values, password: e.target.value });
                  }}
                  value={values.password}
                  type={isPassword ? 'password' : 'text'}
                  className="h-full w-full bg-transparent outline-none border-none px-2"
                />
                {!isPassword ? (
                  <BsEye onClick={() => setIsPassword(!isPassword)} className="absolute top-1/2 -translate-y-1/2 right-2 text-base cursor-pointer" />
                ) : (
                  <BsEyeSlash onClick={() => setIsPassword(!isPassword)} className="absolute top-1/2 -translate-y-1/2 right-2 text-base cursor-pointer" />
                )}
              </div>
              {errors.password !== "" && (
                <p className="text-11 mt-[2px] text-red-500">
                  {errors.password}
                </p>
              )}
              {errors.others !== "" && (
                <p className="text-11 mt-[2px] text-red-500">{errors.others}</p>
              )}
            </div>
            <div
              className="flex items-center
             justify-between mt-4"
            >
              <div
                className="flex cursor-pointer items-center gap-2"
                onClick={() => setChecked(!checked)}
              >
                <div
                  className={`h-[18px] w-[18px] center ${
                    checked ? "bg-blue-600" : "bg-white"
                  } text-white duration-300 border-2 rounded-sm`}
                >
                  <BsCheck className="text-base" />
                </div>
                <p>Remeber Password</p>
              </div>
              <p className="text-blue-500 cursor-pointer">
                Forgotten password?
              </p>
            </div>
            <div className="center mt-5">
              <button
                className="h-10 w-24 center duration-300 active:scale-95 rounded-lg shadow-md bg-green-500 text-white font-semibold"
                onClick={Submit}
              >
                {loading ? <span className="loader"></span> : "Login"}
              </button>
            </div>
            <p className="text-center mt-4">
              Dont have an account?{" "}
              <span className="text-blue-500 font-semibold cursor-pointer ">
                Create a free account
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
