import React, { useState } from "react"
import logo from "../assets/logo.png"
import { BsXLg } from "react-icons/bs"
import { FaAlignJustify } from "react-icons/fa"

const NavBar = () => {
  const [toggle, setToggle] = useState(false)
  const handleClick = () => {
    setToggle(!toggle)
  }
  return (
    <div className="w-full h-[70px] bg-slate-50 ">
      <div className="max-w-[450px] md:max-w-[1124px]  m-auto h-full w-full items-center flex justify-between">
        <img src={logo} className="w-[110px]" alt="" />
        <div className="hidden md:flex justify-center items-center">
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
            <div className="bg-[#3d7cc9] text-white flex items-center justify-between ">
              <h1 className="p-5">Download umba</h1>^
            </div>
          </ul>
        </div>
        {/* Hamburger Menu toggle */}
        <div className="md:hidden cursor-pointer" onClick={handleClick}>
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
            ? " relative z-10 p-4 px-8 w-full bg-white md:hidden rounded-b-lg mt-2 dropdown top-[-9%]  duration-500"
            : "hidden"
        }
      >
        <ul className="p-1 text-center ">
          <li className="p-2 cursor-pointer my-6 hover:bg-gray-100  ">Press</li>
          <li className="p-2  cursor-pointer my-6 hover:bg-gray-100">Career</li>
          <li className="p-2 cursor-pointer my-6 hover:bg-gray-100">Blog</li>
          <li className="p-2 cursor-pointer my-6 hover:bg-gray-100">Contact</li>

          <div className="  gap-4 ">
            <button className=" bg-[#3d7cc9] my-6 px-12 py-3 rounded-md text-white font-semibold">
              Download Umba
            </button>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
