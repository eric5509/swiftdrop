import Image from "../../Assets/Image4.svg";
import { BsStarFill } from "react-icons/bs";
import { useState } from "react";
import Firstname from "../../Components/Signup/Firstname";
import Lastname from "../../Components/Signup/Lastname";
import Name from "../../Components/Signup/Name";
import Logo from "../../Components/Signup/Logo";
import Email from "../../Components/Signup/Email";
import Phone from "../../Components/Signup/Phone";
import Password from "../../Components/Signup/Password";
import ConfirmPassword from "../../Components/Signup/ConfirmPassword";
import Location from "../../Components/Signup/Location";
import RegNo from "../../Components/Signup/RegNo";

export default function SignupPage() {
  const [loading, setLoading] = useState(false);

  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    logo: "",
    location: "",
    regNo: "",
    confirmPassword: "",
    restaurantName: "",
  });
  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    logo: "",
    location: "",
    regNo: "",
    others: "",
    restaurantName: "",
    confirmPassword: "",
  });

  const Submit = async () => {
    setErrors({
      firstname: values.firstname.trim() === "" ? "Please fill in this field" :"",
      lastname: values.lastname.trim() === "" ? "Please fill in this field" :"",
      email: values.email.trim() === "" ? "Please fill in this field" :"",
      phone: values.phone.trim() === "" ? "Please fill in this field" :"",
      password: values.password.trim() === "" ? "Please fill in this field" :"",
      logo: values.logo.trim() === "" ? "Please fill in this field" :"",
      location: values.location.trim() === "" ? "Please fill in this field" :"",
      regNo: values.regNo.trim() === "" ? "Please fill in this field" :"",
      confirmPassword: values.confirmPassword.trim() === "" ? "Please fill in this field" :"",
      restaurantName: values.restaurantName.trim() === "" ? "Please fill in this field" :"",
    });
  };

  return (
    <div className="h-screen overflow-y-auto grid grid-cols-2">
      <div className="bg-green-500 justify-center flex flex-col items-center">
        <img src={Image} className="object-contain h-[400px] w-[400px]" />
        <div className=" w-96">
          <div className="flex my-4 gap-2">
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
      <div className="bg-gray-100 center flex-col h-screen overflow-y-auto">
        <div className="w-[500px] center flex-col">
          <p className="text-4xl mb-8 font-semibold ">Become Our Partner</p>
          <div className="grid grid-cols-2 gap-3 w-full">
            <Firstname
              values={values}
              setErrors={setErrors}
              setValues={setValues}
              errors={errors}
            />
            <Lastname
              values={values}
              setErrors={setErrors}
              setValues={setValues}
              errors={errors}
            />
            <Name
              values={values}
              setErrors={setErrors}
              setValues={setValues}
              errors={errors}
            />
            <Logo
              values={values}
              setErrors={setErrors}
              setValues={setValues}
              errors={errors}
            />
            <Email
              values={values}
              setErrors={setErrors}
              setValues={setValues}
              errors={errors}
            />
            <Phone
              values={values}
              setErrors={setErrors}
              setValues={setValues}
              errors={errors}
            />
            <Password
              values={values}
              setErrors={setErrors}
              setValues={setValues}
              errors={errors}
            />
            <ConfirmPassword
              values={values}
              setErrors={setErrors}
              setValues={setValues}
              errors={errors}
            />

            <RegNo
              values={values}
              setErrors={setErrors}
              setValues={setValues}
              errors={errors}
            />
            <Location
              values={values}
              setErrors={setErrors}
              setValues={setValues}
              errors={errors}
            />
          </div>
        </div>

        <div className="center mt-5">
          <button
            className="h-10 w-24 center duration-300 active:scale-95 rounded-lg shadow-md bg-green-500 text-white font-semibold"
            onClick={Submit}
          >
            {loading ? <span className="loader"></span> : "Signup"}
          </button>
        </div>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <span className="text-blue-500 font-semibold cursor-pointer ">
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
