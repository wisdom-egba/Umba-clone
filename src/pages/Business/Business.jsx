import React from "react"
import Footer from "../../components/Footer"
import BisHeader from "./BisHeader"
import BisInfo from "./BisInfo"
import BisNavBar from "./BisNavBar"
import BisSponsor from "./BisSponsor"
import BisService from "./BisService"
import BisSignUp from "./BisSignUp"
import BisQuestion from "./BisQuestion"

const Business = () => {
  return (
    <div>
      <BisHeader />
      <BisNavBar />
      <BisInfo />
      <BisSponsor />
      <BisService />
      <BisSignUp />
      <BisQuestion />
      <Footer />
    </div>
  )
}

export default Business
