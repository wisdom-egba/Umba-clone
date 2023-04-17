import React from "react"
import Jobs from "./Jobs"
import { careerData } from "./CareerData"
import jazzHR from "../../assets/jazzHr.png"
const CareerInfo = () => {
  return (
    <div className="w-full bg-[white] pt-[50px] md:pt-[50px]">
      <div className="max-w-[340px] md:max-w-[80%] lg:max-w-[40%] m-auto py-10 grid  ">
        <div className="w-full grid ">
          <h className="text-center md:text-start max-w-[80%] m-auto text-[45px] md:text-[49px] text-[#3672bd] font-bold leading-tight md:ml-6 pb-12 ">
            Come work with us!
          </h>
        </div>
        <div>
          {careerData.map((category) => {
            return (
              <div>
                <Jobs category={category} />
              </div>
            )
          })}
        </div>
        <div className="m-2  md:m-0 md:mr-7 md:ml-7 py-6">
          <img src={jazzHR} alt="" />
        </div>
      </div>
    </div>
  )
}

export default CareerInfo
