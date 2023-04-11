import React from "react"
import { Link } from "react-router-dom"
const BisHeader = () => {
  return (
    <div className="w-full h-[60px] bg-slate-200 ">
      <div className="max-w-[1124px] h-[60px] m-auto ">
        <div className="flex justify-start items-center h-full">
          <Link
            to="/"
            className="py-5 px-3  bg-[#c3e0f9] hover:bg-[#3d7cc9] hover:text-white "
          >
            For Individuals
          </Link>

          <Link
            className="py-5 px-6 bg-[#3d7cc9] ml-7 text-white  hover:text-white"
            to="/business"
          >
            Business
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BisHeader
