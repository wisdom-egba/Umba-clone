import React from "react"
import { useState } from "react"
import logo from "../../assets/bisLogo.png"
import { FaAlignJustify } from "react-icons/fa"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"

const BisNavBar = () => {
  const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    setToggle(!toggle)
  }
  return (
    <div className="w-full h-[90px] bg-slate-50 drop-shadow-lg ">
      <div className="max-w-[450px] md:max-w-[1124px]  m-auto h-full w-full items-center flex justify-between">
        <img src={logo} className="w-[110px]" alt="" />
        <div className="hidden md:hidden lg:flex justify-center items-center">
          <ul className="flex items-center gap-4">
            <li className="mx-5 p-5">
              <a className="font-semibold" href="">
                Press
              </a>
            </li>
            <li className="mx-5 p-5">
              <a className="font-semibold" href="">
                career
              </a>
            </li>
            <li className="mx-5 p-5">
              <a className="font-semibold" href="">
                blog
              </a>
            </li>
            <li className="mx-5 p-5">
              <a className="font-semibold" href="">
                contact
              </a>
            </li>
            <div className="bg-[#0d3356] hover:bg-[#295994] text-white flex items-center justify-between cursor-pointer ">
              <h1 className="py-4 px-6 text-md">Login/Sign Up</h1>
            </div>
          </ul>
        </div>
        {/* Hamburger Menu toggle */}
        <div className="lg:hidden cursor-pointer" onClick={handleClick}>
          {toggle ? (
            <div className="p-3 bg-slate-400 h-full">
              <FaAlignJustify
                size={23}
                style={{ background: "#E5E9EE", color: "white" }}
              />
            </div>
          ) : (
            <div className="p-2 h-full">
              <FaAlignJustify size={24} />
            </div>
          )}
        </div>
      </div>
      {/* dropdown page */}
      <div
        className={
          toggle
            ? " relative z-10 p-4 px-8 w-full bg-white md:hidden rounded-b-lg mt-2 dropdown top-[-9%]  duration-500 "
            : "hidden"
        }
      >
        <ul className="p-1 text-center ">
          <li className="p-2 cursor-pointer my-6 hover:bg-gray-100  ">Press</li>
          <li className="p-2  cursor-pointer my-6 hover:bg-gray-100">Career</li>
          <li className="p-2 cursor-pointer my-6 hover:bg-gray-100">Blog</li>
          <li className="p-2 cursor-pointer my-6 hover:bg-gray-100">Contact</li>

          <div>
            <button className=" bg-[#0d3356] m-auto px-5 py-3 text-white font-semibold hover:bg-[#295994] flex justify-center items-center">
              Login/Sign Up
            </button>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default BisNavBar
