import React from "react";
import Typed from 'react-typed';

const Overview = ()=>{
  
    return (
        <div className="text-white">
         <div className="max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col">
            <p className="text-[#ecbe41] uppercase ">Tracking your attendance just got easier </p>
            <p className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 "> Track Your Attendance </p>
            <div>
                <p className=" md:text-5xl sm:text-4xl text-xl  text-gray-600">This software lets you track your attendance and <span>
                <Typed className="text-[#ecbe41]" strings={['save time' ,'xyz' ,'abcd']} typeSpeed={120} backSpeed={140}/></span> 
                </p>
                <button className=" bg-[#ecbe41] text-black w-[240px] rounded-md font-medium my-6 mx-auto py-3">Get Started</button>
            </div>
         </div>
        </div>
    )

}

export default Overview;