import React from "react"
import phone3 from "../assets/phone3.png"
const Banking = () => {
  return (
    <div className="w-full bg-[#e0eaf6]  pt-[120px] md:pt-[10px] lg:pt-[0px]">
      <div className="max-w-[340px] md:max-w-[95%] lg:max-w-[70%] m-auto py-10 grid md:flex">
        <div className=" pt-11 flex flex-col justify-center md:w-[70%] items-center">
          <div className="md:mr-9">
            <h1 className="w-full text-4xl md:w-[100%] md:text-[41px] lg:text-6xl">
              Imagine a Bank that pays you
            </h1>
            <p className="py-4 font-medium leading-snug lg:w-[70%] md:text-[17px] text-[#636666]">
              Enjoy up to 3% cashback on every bill you pay. We also reward your
              for every friend or family you refer. Keep track of your earnings
              in the rewards tabs to see what's earning you the most.
            </p>
          </div>
        </div>
        <div className="w-[50%] py-3 flex justify-center   ">
          <img src={phone3} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Banking
