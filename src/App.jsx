import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {
  Banking,
  Finance,
  Footer,
  Header,
  Info,
  NavBar,
  Open,
  Security,
} from "./components"
import { Business } from "./pages/Business"
import { Career } from "./pages/Career"
import { ContactUs } from "./pages/Contact"
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <NavBar />
                <Info />
                <Finance />
                <Banking />
                <Security />
                <Open />
                <Footer />
              </div>
            }
          />
          <Route path="/business" element={<Business />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
