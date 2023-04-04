import React from "react"
import playstore from "./assets/playstore.png"
import appstore from "./assets/applestore.png"
import phone from "./assets/phone.png"

const Info = () => {
  return (
    <div className="w-full h-[710px] md:h-[1230px] lg:h-[660px] bg-[#e0eaf6] py-[10px]">
      <div className="max-w-[340px] md:max-w-[95%] lg:max-w-[70%] m-auto py-10 grid lg:grid-cols-2">
        <div>
          <h1 className="text-3xl md:text-7xl lg:text-8xl md:text-[74px] py-2 w-[90%] lg:w-[100%]">
            Meet the next generation of banking
          </h1>

          <div className=" w-full border border-l-2 border-l-black my-6">
            <div className="ml-9">
              <p className="leading-tight font-medium text-[15px] md:text-lg w-[100%] md:w-[60%] lg:w-[80%] text-[#636666]">
                With an Umba account, you have everything you need from your
                bank. Spend, pay bills, get loans, and cashback all from your
                phone.
              </p>
              <div className="flex items-center py-6 gap-4 md:gap-0">
                <a href="#">
                  <img className="md:w-[75%]" src={playstore} alt="" />
                </a>
                <a href="#">
                  <img className="md:w-[75%]" src={appstore} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-3 flex justify-center items-center  ">
          <img className="lg:w-[70%]" src={phone} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Info
