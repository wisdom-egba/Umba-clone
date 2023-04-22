import React from "react"
import PressCard from "./PressCard"
import img1 from "../../assets/img1.png"
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.png"
import img4 from "../../assets/img4.png"
import img5 from "../../assets/img5.png"
import img6 from "../../assets/img6.png"

const PressInfo = () => {
  //CardTitles
  const title1 = `TECH CRUNCH`
  const title2 = `BUSINESS INSIDER AFRICA`
  const title3 = `NAIRAMETRICS`
  const title4 = `TECH FUND NEWS`
  const title5 = `PYMNTS`

  //CardContent
  const content1 = `Digital bank Umba raises $15M, plans to expand into three new African markets.`
  const content2 = `African digital banking platform, Umba raises $15 million Series A to deliver accessible, transparent banking to underserved mark `
  const content3 = `Umba, a digital bank for emerging markets, raises $2M Seed funding to expand across Africa`
  const content4 = `DEAL: Digital banking platform, Umba raises $15 million for expansion`
  const content5 = `Umba; Monzo founder backed fintech snaps $15M to expand across Africa`
  const content6 = `Digital First Banking Umba CEO: Emerging Markets’ Legacy Banking Systems Begging for All-In-One Fix`

  return (
    <div className="max-w-[340px] md:max-w-[95%] lg:max-w-[70%] m-auto bg-white md:mt-20">
      <h1 className=" ml-6 md:ml-5 text-3xl w-[60%] md:text-7xl md:w-[40%]">
        Umba
      </h1>
      <h1 className="ml-6 md:ml-6 md:pb-3 text-3xl w-[60%] md:text-7xl md:w-[60%] mb-4">
        in the press
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mx-6 lg:mx-8">
        <PressCard title={title1} content={content1} img={img1} />
        <PressCard title={title2} content={content2} img={img2} />
        <PressCard title={title1} content={content3} img={img3} />
        <PressCard title={title3} content={content4} img={img4} />
        <PressCard title={title4} content={content5} img={img5} />
        <PressCard title={title5} content={content6} img={img6} />
      </div>
    </div>
  )
}

export default PressInfo
