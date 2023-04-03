import React from "react"
import playstore from "./assets/playstore.png"
import appstore from "./assets/applestore.png"
import phone from "./assets/phone.png"

const Info = () => {
  return (
    <div className="w-full bg-[#e0eaf6] py-[10px]">
      <div className="max-w-[340px] md:max-w-[1480px] m-auto py-10 grid lg:grid-cols-2">
        <div>
          <h1 className="text-3xl md:text-4xl md:text-[60px] py-2">
            Meet the next generation of banking
          </h1>

          <div className=" w-full border border-l-1 border-l-black">
            <div className="ml-9">
              <p className="leading-tight">
                With an Umba account, you have everything you need from your
                bank. Spend, pay bills, get loans, and cashback all from your
                phone.
              </p>
              <div className="flex py-6 gap-4">
                <a href="#">
                  <img src={playstore} alt="" />
                </a>
                <a href="#">
                  <img src={appstore} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <img className="py-3" src={phone} alt="" />
      </div>
    </div>
  )
}

export default Info
