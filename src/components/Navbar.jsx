import React , {useState}from "react";
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"

const Navbar =()=>{
    const [nav ,setNav]= useState(false);

    const navHandler = ()=>{
       setNav(!nav);
    }

    return(
        <div className=" flex justify-between items-center h-20 max-w-[1240px] mx-auto p-4  text-white ">
        <h1 className="w-full text-2xl text-[#ecbe41] font-bold ">myAttendanceTracker</h1>
        <ul className=" hidden md:flex ">
            <li className="p-4">Home</li>
            <li className="p-4">Contacts</li>
            <li className="p-4">About</li>
            <li className="p-4">Resources</li>
            <li className="p-4">Login</li>
        </ul>
        <div onClick={navHandler} className="block md:hidden">
            {!nav?<AiOutlineClose size={20}/>:<AiOutlineMenu size={20}/>}
        </div>
        <div className={!nav?'fixed left-0 top-0 w-[60%] h-full  border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 md:hidden':'fixed left-[-100%]' }>
        <h1 className="w-full text-2xl text-[#ecbe41] font-bold m-5">myAttendanceTracker</h1>           
        <ul className="pt-5 uppercase m-8">
            <li className="p-4 border-b border-b-gray-600">Home</li>
            <li className="p-4 border-b border-b-gray-600">Contacts</li>
            <li className="p-4 border-b border-b-gray-600">About</li>
            <li className="p-4 border-b border-b-gray-600">Resources</li>
            <li className="p-4">Login</li>
        </ul>
        </div>
        </div>
    );
};

export default Navbar;