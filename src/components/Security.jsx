import React from "react"
import lock from "../assets/lock.png"

const Security = () => {
  return (
    <div className="w-full bg-[white] md:pt-[10px]">
      <div className="max-w-[340px] md:max-w-[95%] lg:max-w-[70%] m-auto md:py-10 grid md:flex">
        <div className=" py-4 flex flex-col justify-center md:w-[70%] lg:w-[50%]  items-center">
          <div className="md:ml-10">
            <h1 className="w-full text-4xl md:w-[100%] md:text-[43px] lg:text-6xl">
              Your money is safe with us
            </h1>
            <p className="py-4 font-medium leading-snug lg:w-[95%] md:text-[17px] text-[#636666]">
              We make sure{" "}
              <span className="font-bold">
                no one else is able to access your funds
              </span>{" "}
              through photo verification and security pins. We treat your money
              with the same care you do.
            </p>
          </div>
        </div>
        <div className="lg:ml-16 lg:w-[50%] md:w-[50%] py-12 flex justify-center order-first">
          <img className="lg:w-[80%]" src={lock} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Security
