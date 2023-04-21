import React from "react"
import logoGrid from "../../assets/logo-grid.png"
const PressResource = () => {
  return (
    <div className="max-w-[340px] md:max-w-[95%] lg:max-w-[70%] m-auto bg-white md:mt-20">
      <div className="flex items-center ">
        <div className="mx-6 w-[53%]">
          <h1 className="md:text-[41px] lg:text-6xl py-6">Press resources</h1>
          <p className="w-[65%] text-lg font-normal">
            Here, you will find Umba brand assets including logos, and team
            photos, and how to use them appropriately in different
            circumstances.
          </p>
          <button className="mt-20 bg-[#3d7cc9] hover:bg-[#0d3356] transition duration-900  md:bg-[#0d3356] md:hover:bg-[#21538f] m-auto px-9 py-3 text-white font-light text-lg">
            DOWNLOAD ASSETS
          </button>
        </div>
        <div className="mt-4 w-[29%] lg:w-[25%] flex items-end">
          <img className="" src={logoGrid} alt="" />
        </div>
      </div>
    </div>
  )
}

export default PressResource
