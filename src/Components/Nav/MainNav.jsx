import { FaBars } from 'react-icons/fa'
import Logo from "../../Assets/Logo.svg";
import { NavLink } from 'react-router-dom';
export default function MainNav() {
  const links = ["Home", "Services", "About", "Features"];
  return (
    <div className="h-[50px] lg:h-[70px]">
      <div className="flex bg-white border-b-2 shadow-md h-[50px] lg:h-[70px] px-3 lg:px-10 fixed top-0 left-0 w-screen justify-between items-center">
        <img src={Logo} alt="" className='h-10 lg:h-auto'/>
        <div className="flex text-sm gap-10 items-center">
          <div className="hidden lg:flex gap-6 items-center">
            {links.map((data, key) => (
              <NavLink to={`${key === 0 ? '/' : `/${data.toLocaleLowerCase()}`}`} className='cursor-pointer duration-300 hover:text-green-500'>{data}</NavLink>
            ))}
          </div>
          <div className="flex items-center gap-5">
            <NavLink to={'/signup'} className='hidden lg:block cursor-pointer hover:text-green-500 duration-300'>Signup</NavLink>
            <NavLink  to={'/signin'} className="hidden lg:block px-5 py-3 cursor-pointer active:scale-95 hover:bg-green-600 duration-300 rounded-md shadow-md bg-green-500 text-white">Login</NavLink>
            <FaBars className='lg:hidden text-base'/>
          </div>
        </div>
      </div>
    </div>
  );
}
