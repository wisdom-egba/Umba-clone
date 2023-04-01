import React from "react"

const Header = () => {
  return (
    <div className="w-full h-[60px] bg-slate-200 ">
      <div className="max-w-[1124px] h-[60px] m-auto ">
        <div className="flex justify-start items-center h-full">
          <h1 className="p-5 bg-[#3d7cc9] text-white ">For Individuals</h1>
          <h1 className="p-5 bg-[#c3e0f9]  ml-7 hover:bg-[#3d7cc9] hover:text-white">
            For Business
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Header
