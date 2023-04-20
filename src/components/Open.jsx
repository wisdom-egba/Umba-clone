import React from "react"
import playstore from "../assets/playstore.png"
import appstore from "../assets/applestore.png"
const Open = () => {
  return (
    <div className="pt-[60px] grid grid-cols-2">
      <div className=" bg-white h-[400px] md:h-[430px] lg:h-[800px]"></div>
      <div className=" bg-[#e0eaf6] h-[400px] md:h-[430px] lg:h-[800px]"></div>
      <div className=" bg-[#e0eaf6] h-[400px] md:h-[430px] lg:h-[800px] rounded-l-[90px] rounded-r-[90px] flex justify-center absolute right-0 w-[94%] md:w-[97%] lg:w-[84%] ml-[90px]">
        <div className=" md:ml-[120px] w-[85%] md:w-[80%] border border-l-2 border-l-black my-[90px] md:my-[97px] lg:my-[123px] ">
          <div className="ml-9 md:ml-8 flex flex-col justify-center  ">
            <h1 className=" leading-tight  text-[28px] leading-tight md:text-7xl lg:text-[90px] w-[100%] lg:w-[80%] md:text-[44px] py-2 md:w-[100%] lg:w-[60%] ">
              Open your account today and experience next-gen banking
            </h1>
            <p className="leading-tight font-medium text-[15px] md:text-lg w-[100%] md:w-[80%] lg:w-[38%] lg:py-4 text-[#636666] leading-tight">
              With an Umba account, you have everything you need from your bank.
              Spend, pay bills, get loans, and cashback all from your phone.
            </p>
            <div className="flex py-6 gap-4 lg:py-2 ">
              <div>
                <a href="https://play.google.com/store/apps/details?id=com.beatha.mkopokaka&pli=1">
                  <img className="md:w-[62%]" src={playstore} alt="" />
                </a>
              </div>
              <div>
                <a href="https://apps.apple.com/us/app/umba/id1572066078">
                  <img className="md:w-[62%]" src={appstore} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="w-full pt-[10px] md:pt-[10px] lg:pt-[0px] grid grid-cols-2">
    //   <div></div>
    //   <div className="bg-[#e0eaf6] flex justify-end items-end"></div>
    //   <div className="absolute  bg-[#e0eaf6] max-w-[340px] md:max-w-[95%] lg:max-w-[65%] m-auto py-10 flex rounded-l-[80px] rounded-r-[80px] justify-end items-center ">
    //     <div className=" h-full flex w-[80%] border border-l-2 border-l-black my-6">
    //       <div className="ml-9">
    //         <h1 className="text-[24px] leading-tight md:text-7xl lg:text-[90px] lg:w-[80%] md:text-[44px] py-2 w-[100%] lg:w-[100%]">
    //           Open your account today and experience next-gen banking
    //         </h1>
    //         <p className="leading-tight font-medium text-[15px] md:text-lg w-[100%] md:w-[80%] lg:w-[52%] lg:py-6 text-[#636666] leading-tight">
    //           With an Umba account, you have everything you need from your bank.
    //           Spend, pay bills, get loans, and cashback all from your phone.
    //         </p>
    //         <div className="flex items-center py-6 lg:py-2 gap-4 md:gap-0">
    //           <a href="#">
    //             <img className="md:w-[65%]" src={playstore} alt="" />
    //           </a>
    //           <a href="#">
    //             <img className="md:w-[65%]" src={appstore} alt="" />
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Open
