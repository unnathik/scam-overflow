import {useState} from 'react';
import {BsSearch, BsChatRight, BsArrowLeftShort} from "react-icons/bs";
import {BiLogOut} from "react-icons/bi"
import { FiHome } from "react-icons/fi"

const Scam = () => {
  const [open, setOpen] = useState(true);
  const [auth, setAuth] = useState(false);
  const Menus = [
    { title: "Home", icon: <FiHome />}, 
    {title: "Scam or Not?", icon: <BsSearch />, route: '/'},
    {title: "Forum", icon: <BsChatRight />, route: '/forum'},
    {title: "Log Out",  spacing: true, icon: <BiLogOut />}
  ]

  return (
    <div className="flex">
    <div className={`bg-blue-900	h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
    <BsArrowLeftShort className={`bg-white text-blue-900 text-3xl rounded-full
    absolute -right-3 top-9 border border-blue-900 cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}/>
    <div>
      <h1 className={`text-white font-medium text-2xl ${!open && "scale-0"} duration-300`}>Scam Overflow</h1>
    </div>
    <ul className="pt-2">
      {Menus.map((menu, index) => <>
      <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2
      hover:text-white ${menu.spacing ? "mt-9" : "mt-2"}`}>
        <span className="text-2xl block float-left">
          {menu.icon}
        </span>
        <a href={menu.route}>
        <span className={`text-base font-medium flex-1 ${!open && "hidden"} duration-200`} >
          {menu.title}
        </span>
        </a>
      </li>
      </>)}
    </ul>
    </div>
    
    <div className="p-7">
      <h1 className="text-2xl font-bold">
        Scam or not?
      </h1>
      <form>
        <input type="text" className='bg-gray-100 border border-gray-400 rounded mt-2' />
        <input type="submit" value="Submit" />
    </form>
    </div>
    </div>
  )
}

export default Scam;