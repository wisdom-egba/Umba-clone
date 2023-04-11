import React from "react"
import Footer from "../../components/Footer"
import BisHeader from "./BisHeader"
import BisInfo from "./BisInfo"
import BisNavBar from "./BisNavBar"
import BisSponsor from "./BisSponsor"

const Business = () => {
  return (
    <div>
      <BisHeader />
      <BisNavBar />
      <BisInfo />
      <BisSponsor />
      <Footer />
    </div>
  )
}

export default Business
