import { Route, Routes } from "react-router-dom"
import { Analytics } from "@vercel/analytics/react"
import Home from "./pages/home/home"
import NotFound from "./pages/NotFound"
import Documentation from "./pages/documentation/documentation"
import Header from "./layouts/Header"
import Footer from "./layouts/Footer"
import BuymeaCoffee from "./components/main/BuymeaCoffee"
import Toast from "./components/ui/Toast"

function App() {

  return (
    <>
    <BuymeaCoffee />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="documentation" element={<Documentation />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    <Toast />
    <Analytics />
    </>
  )
}

export default App
