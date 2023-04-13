import React from "react"
import { BsArrowRight } from "react-icons/bs"

const BisSignUp = () => {
  return (
    <div className="pt-[60px] grid grid-cols-2">
      <div className=" bg-white h-[350px] md:h-[410px] lg:h-[800px]"></div>
      <div className=" bg-[#e0eaf6] h-[350px] md:h-[410px] lg:h-[800px]"></div>
      <div className=" bg-[#e0eaf6] h-[350px] md:h-[410px] lg:h-[800px] rounded-l-[90px] rounded-r-[90px] flex justify-center absolute right-0 w-[94%] md:w-[97%] lg:w-[84%] md:ml-[90px]">
        <div className=" md:ml-[40px] w-[85%] md:w-[80%] my-[90px] md:my-[97px] lg:my-[123px] ">
          <div className="ml-2 md:ml-8 flex flex-col justify-center  ">
            <h1 className=" leading-tight  text-[28px]  lg:text-[90px] w-[40%] lg:w-[80%] md:text-[69px] py-2 md:w-[40%] ">
              Sign Up Now!
            </h1>
            <div className=" flex justify-between">
              <p className=" font-medium text-[15px] md:text-lg w-[85%] md:w-[60%] lg:w-[38%] py-5 lg:py-4 text-[#636666]">
                We are committed to making payroll processing as effortless and
                straightforward as possible.
              </p>
              <div className="md:mr-[60px] pt-[60px] md:pt-0 md:flex items-center mr-5 ">
                <a className="" href="#">
                  <BsArrowRight size={50} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BisSignUp
