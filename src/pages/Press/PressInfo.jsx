import React from "react"
import { TbCircleArrowUpRight } from "react-icons/tb"
import img1 from "../../assets/img1.png"

const PressInfo = () => {
  return (
    <div className="max-w-[340px] md:max-w-[95%] lg:max-w-[80%] m-auto bg-white md:mt-20">
      <h1 className="md:text-7xl md:w-[40%]">Umba in the press</h1>
      <div>
        <div className="md:w-[45%] mx-8">
          <img className="rounded-[40px]" src={img1} alt="" />
          <h1>TECH CRUNCH</h1>
          <p>
            Digital bank Umba raises $15M, plans to expand into three new
            African markets.
          </p>
          <div className="flex items-center justify-center">
            <TbCircleArrowUpRight
              size={20}
              style={{ color: "white", backgroundColor: "#3d7cc9" }}
            />
            <button>READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PressInfo
