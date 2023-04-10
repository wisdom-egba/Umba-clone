import React from "react"
import laptop from "../../assets/laptop.png"
import phone4 from "../../assets/phone4.png"

const BisInfo = () => {
  return (
    <div className="w-full bg-[white]   pt-[10px] md:pt-[10px] lg:pt-[0px]">
      <div className="max-w-[100%] bg-[#e0eaf6] md:max-w-[100%] lg:max-w-[70%] m-auto  grid rounded-br-[200px] pb-[230px]">
        <div className="md:flex m-auto justify-center max-w-[340px] md:max-w-[82%] lg:max-w-[70%]">
          <div className="w-[80%]">
            <h1 className="text-7xl">Maximizing work efficiency, every day!</h1>
          </div>
          <div>
            <form action="" className="">
              <input
                className="rounded-[40px] w-full p-2 border border-transparent focus:border-white"
                type="text"
                placeholder="Name"
                id="name"
              />
              <div className="flex gap-5 py-8">
                <input
                  className="rounded-[40px] p-2 w-[80%]"
                  type="email"
                  placeholder="Work mail"
                />
                <input
                  className="rounded-[40px] p-2 w-[80%]"
                  type="number"
                  placeholder="Phone no."
                />
              </div>
              <button className="bg-[#0d3356] m-auto px-7 py-2 text-white font-semibold text-lg ">
                REQUEST DEMO
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="relative z-20 max-w-[340px] md:max-w-[82%] lg:max-w-[70%] m-auto ">
        <img className="w-[92%]" src={laptop} alt="" />
        <div className="absolute top-0 z-30 right-[0]">
          <img className="w-[40%]" src={phone4} alt="" />
        </div>
      </div>
    </div>
  )
}

export default BisInfo
