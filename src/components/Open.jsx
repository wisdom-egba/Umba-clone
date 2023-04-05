import React from "react"
import playstore from "../assets/playstore.png"
import appstore from "../assets/applestore.png"
const Open = () => {
  return (
    <div className="w-full  pt-[10px] md:pt-[10px] lg:pt-[0px] grid grid-cols-2">
      <div></div>
      <div className="bg-[#e0eaf6] w-[100%] h-screen flex justify-end items-end"></div>
      <div className="absolute h-full bg-[#e0eaf6] max-w-[340px] md:max-w-[95%] lg:max-w-[65%] m-auto py-10 flex rounded-l-[80px] rounded-r-[80px] justify-end items-center ">
        <div className=" h-full flex w-[80%] border border-l-2 border-l-black my-6">
          <div className="ml-9">
            <h1 className="text-[24px] leading-tight md:text-7xl lg:text-[90px] lg:w-[80%] md:text-[44px] py-2 w-[100%] lg:w-[100%]">
              Open your account today and experience next-gen banking
            </h1>
            <p className="leading-tight font-medium text-[15px] md:text-lg w-[100%] md:w-[80%] lg:w-[52%] lg:py-6 text-[#636666] leading-tight">
              With an Umba account, you have everything you need from your bank.
              Spend, pay bills, get loans, and cashback all from your phone.
            </p>
            <div className="flex items-center py-6 lg:py-2 gap-4 md:gap-0">
              <a href="#">
                <img className="md:w-[65%]" src={playstore} alt="" />
              </a>
              <a href="#">
                <img className="md:w-[65%]" src={appstore} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Open
