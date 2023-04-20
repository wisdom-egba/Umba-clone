import React from "react"
import blogImg from "../../assets/blog-img.png"

const Blog = () => {
  return (
    <div className="w-full h-[710px] md:h-[1230px] lg:h-[660px] bg-[#fff] py-[10px]">
      <div className="max-w-[340px] md:max-w-[77%] lg:max-w-[55%] m-auto py-10 grid">
        <div>
          <h1 className="text-3xl md:w-[60%] md:text-7xl lg:text-8xl md:text-[74px] py-2 w-[90%] lg:w-[100%]">
            Umba Updates
          </h1>
          <p className="md:w-[70%] py-8">
            Welcome to Umba Update. Stay up-to-date with the news on the latest
            products, promotions, and news from Umba!
          </p>
        </div>
        <div className="flex">
          <div className="w-[70%] ">
            <img className=" w-full h-[400px]" src={blogImg} alt="" />
          </div>
          <div className=" flex flex-col justify-start items-start w-[100%]">
            <p className="mx-8 bg-gray-400 rounded-md p-1 px-2 mt-6">Promo</p>
            <h1 className="mx-8 text-3xl py-3">
              Kenya launch! New year, new market 🎉
            </h1>
            <p className="mx-8 font-semibold">
              Your bank should always have your back, taking the stress out of
              finance so you can focus on the right things. That’s why we’re
              here. Make seamless transactions, pay bill bills, and get loans
              and cash backs, all from your phone.
            </p>
            <button className="mx-8 underline text-[16px] font-extrabold text-blue-700 my-24">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
