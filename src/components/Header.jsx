import React from "react"

const Header = () => {
  return (
    <div className="w-full h-[70px] bg-slate-200 fixed">
      <div className="max-w-[1024px] h-[70px] m-auto ">
        <div className="flex justify-start items-center h-full">
          <h1 className="p-5 bg-[#3d7cc9] text-white ">For Individuals</h1>
          <h1 className="p-5 bg-[#c3e0f9]  ml-9 hover:bg-[#3d7cc9] hover:text-white">
            For Business
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Header
