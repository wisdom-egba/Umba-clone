import React from "react"
import ContactCards from "./ContactCards"

const ContactPage = () => {
  const title1 = "Press"
  const title2 = "Customers"
  const title3 = "Investors"

  const btn1 = "GET IN TOUCH"
  const btn2 = "CONTACT SUPPORT"

  const text1 = "Want to learn more about the brand? Talk to our PR team"
  const text2 = "Connect with our Customer Experience team for support"
  const text3 = "Be a part of the future. Talk to our Capital Markets team"
  return (
    <div className="w-full bg-white md:flex flex-col justify-center items-center lg:grid lg:grid-cols-3">
      <ContactCards title={title1} btn={btn1} text={text1} />
      <ContactCards title={title2} btn={btn2} text={text2} />
      <ContactCards title={title3} btn={btn1} text={text3} />
    </div>
  )
}

export default ContactPage
