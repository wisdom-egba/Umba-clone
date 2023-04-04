import React, { useState } from "react"
import logo from "../assets/logo.png"
import { BsXLg } from "react-icons/bs"
import { FaAlignJustify } from "react-icons/fa"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"

const NavBar = () => {
  const [toggle, setToggle] = useState(false)
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setToggle(!toggle)
  }
  return (
    <div className="w-full h-[90px] bg-slate-50 shadow-lg ">
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
            <div
              onMouseOver={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
              className="bg-[#3d7cc9] text-white flex items-center justify-between cursor-pointer "
            >
              <h1 className="py-4 px-6 text-md">Download umba</h1>
              <MdOutlineKeyboardArrowDown
                size={25}
                style={{ marginRight: "9px" }}
              />
              {/* dropdown */}

              <ul
                onMouseOver={() => setOpen(false)}
                onMouseLeave={() => setOpen(false)}
                className={`absolute top-[120px] w-[190px] right-30 w-40 py-2 mt-2 rounded-b-md shadow-xl bg-gray-300 ${
                  open ? "block" : "hidden"
                }`}
              >
                <li className="flex w-full items-center px-3 py-1 text-md hover:text-[black] text-[white] font-bold hover:font-semibold">
                  Umba for IOS <span className="text-[red]">(New)</span>
                </li>
                <li className="flex w-full items-center px-3 py-2 text-md hover:text-[black] font-bold hover:font-semibold text-[white] ">
                  Umba for Andriod
                </li>
              </ul>
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
            ? " relative z-10 p-4 px-8 w-full bg-white md:hidden rounded-b-lg mt-2 dropdown top-[-9%]  duration-500"
            : "hidden"
        }
      >
        <ul className="p-1 text-center ">
          <li className="p-2 cursor-pointer my-6 hover:bg-gray-100  ">Press</li>
          <li className="p-2  cursor-pointer my-6 hover:bg-gray-100">Career</li>
          <li className="p-2 cursor-pointer my-6 hover:bg-gray-100">Blog</li>
          <li className="p-2 cursor-pointer my-6 hover:bg-gray-100">Contact</li>

          <div
            onMouseOver={() => setOpen(true)}
            onClick={() => setOpen(!open)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className=" bg-[#3d7cc9] m-auto px-5 py-3 text-white font-semibold hover:bg-[#498ee2] flex justify-center items-center">
              Download Umba
              <MdOutlineKeyboardArrowDown
                size={25}
                style={{ marginRight: "9px" }}
              />
            </button>
            <ul
              onMouseOver={() => setOpen(false)}
              onMouseLeave={() => setOpen(false)}
              className={`w-[190px] py-2 rounded-b-md m-auto shadow-xl bg-gray-300 ${
                open ? "block" : "hidden"
              }`}
            >
              <li className="flex w-full items-center px-3 py-1 text-md hover:text-[black] text-[white] font-bold">
                Umba for IOS <span className="text-[red] font-bold">(New)</span>
              </li>
              <li className="flex w-full items-center px-3 py-2 text-md hover:text-[black] font-bold text-[white] ">
                Umba for Andriod
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
