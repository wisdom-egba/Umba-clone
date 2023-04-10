import React from "react"
import Footer from "../../components/Footer"

import BisHeader from "./BisHeader"
import BisInfo from "./BisInfo"
import BisNavBar from "./BisNavBar"

const Business = () => {
  return (
    <div>
      <BisHeader />
      <BisNavBar />
      <BisInfo />
      <Footer />
    </div>
  )
}

export default Business
