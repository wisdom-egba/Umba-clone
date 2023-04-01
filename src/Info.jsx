import React from "react"
import playstore from "./assets/playstore.png"
import appstore from "./assets/applestore.png"
import phone from "./assets/phone.png"

const Info = () => {
  return (
    <div className="w-full bg-[#e0eaf6] py-[10px]">
      <div className="max-w-[370px] md:max-w-[1480px] m-auto text-center py-10 grid lg:grid-cols-2">
        <div className=" items-start">
          <h1 className="text-4xl md:text-[60px]">
            Meet the next generation of banking
          </h1>

          <div>
            <p>
              With an Umba account, you have everything you need from your bank.
              Spend, pay bills, get loans, and cashback all from your phone.
            </p>
            <div className="flex">
              <a href="#">
                <img src={playstore} alt="" />
              </a>
              <a href="#">
                <img src={appstore} alt="" />
              </a>
            </div>
          </div>
        </div>
        <img src={phone} alt="" />
      </div>
    </div>
  )
}

export default Info
