import React from "react"
import laptop from "../../assets/laptop.png"
import phone4 from "../../assets/phone4.png"

const BisInfo = () => {
  return (
    <div className="w-full bg-[white] pt-[10px] md:pt-[10px] lg:pt-[0px] ">
      <div className="max-w-[100%] bg-[#e0eaf6] m-auto  grid rounded-br-[180px] pb-10 md:pb-[230px] lg:pb-[150px] lg:h-[1000px]">
        <div className="md:flex m-auto justify-center max-w-[340px] md:max-w-[82%] lg:max-w-[55%] ">
          <div className="w-[80%] m-auto py-4 pt-[50px] lg:py-0 lg:pt-0 md:pt-0">
            <h1 className="text-3xl md:text-7xl lg:text-8xl">
              Maximizing work efficiency, every day!
            </h1>
          </div>
          <div>
            <form action="" className="pt-1 max-w-[88%] m-auto md:max-w-[100%]">
              <input
                className="rounded-[40px] mt-2 flex h-12 w-full items-center justify-center border bg-white p-3 text-sm outline-none focus:border-blue-200"
                type="text"
                placeholder="Name"
                id="name"
              />
              <div className="flex justify-center items-center gap-5 py-8">
                <div>
                  <input
                    className="rounded-[40px] p-2 mt-2 w-[50%] border focus:bg-white  text-sm outline-none focus:border-blue-300"
                    type="email"
                    name="email"
                    placeholder="Work mail"
                  />
                  <input
                    className="rounded-[40px] p-2 w-[50%] focus:border-blue-200 outline-none"
                    type="tel"
                    placeholder="Phone no."
                  />
                </div>
              </div>
              <div className="py-7 pt-10 md:py-7 md:w-[60%]">
                <button className="bg-[#3d7cc9] hover:bg-[#0d3356] md:bg-[#0d3356] w-full m-auto px-5 py-2 text-white font-semibold text-lg outline-none ">
                  REQUEST DEMO
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="relative z-20 max-w-[340px] md:max-w-[82%] lg:max-w-[58%] m-auto mt-[70px] md:mt-0 md:top-[-130px] lg:top-[-400px]">
        <div>
          <img
            className="w-[60%] m-auto lg:w-[95%] md:w-[92%]"
            src={laptop}
            alt=""
          />
        </div>
        <div className="absolute flex top-[22px] md:top-[78px] z-30 items-end justify-end md:right-7 right-[57px]">
          <img className="w-[20%] lg:w-[60%] md:w-[40%]" src={phone4} alt="" />
        </div>
      </div>
    </div>
  )
}

export default BisInfo
