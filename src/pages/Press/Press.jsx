import React from "react"
import PressVideo from "./PressVideo"
import { CareerHeader } from "../Career"
import { Footer, NavBar } from "../../components"
import PressInfo from "./PressInfo"
import PressResource from "./PressResource"
import PressAccordion from "./PressAccordion"
import Brand from "./Brand"

const Press = () => {
  return (
    <div>
      <CareerHeader />
      <NavBar />
      <PressVideo />
      <PressInfo />
      <PressResource />
      <PressAccordion />
      <Brand />
      <Footer />
    </div>
  )
}

export default Press
