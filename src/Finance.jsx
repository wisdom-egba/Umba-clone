import React from "react"
import phone2 from "./assets/phone2.png"

const Finance = () => {
  return (
    <div className="w-full bg-[white] pt-[120px] md:pt-[150px]">
      <div className="max-w-[340px] md:max-w-[95%] lg:max-w-[70%] m-auto py-10 grid md:flex">
        <div className=" pt-11 flex flex-col justify-center md:w-[62%] flex-r">
          <div className="md:ml-8 ">
            <h1 className="w-full text-4xl md:w-[100%] md:text-[41px] lg:text-6xl">
              Financial control at your fingertips
            </h1>
            <p className="py-4 font-medium leading-snug lg:w-[70%] md:text-[17px] text-[#636666]">
              Are you tired of switching banks, but still not getting value for
              your money? What if we told you we can fix that? Because we're
              customers too! We know what’s frustrating you.
            </p>
          </div>
        </div>
        <div className="py-3 flex justify-center items-center order-first  ">
          <img className="" src={phone2} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Finance
