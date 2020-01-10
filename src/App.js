import React from "react"

import Header from "./components/Header/Header"
import HeaderSocondary from "./components/HeaderSecondary/HeaderSecondary"
import HrSeparator from "./components/Separator/HrSeparator"
import MainContentHeader from "./components/MainContentHeader/MainHeader"
import MainContent from "./components"
import Footer from "./components/Footer"
import Chat from "./components/Chat/Chat"

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderSocondary />
      <HrSeparator className="main-separator" />
      <MainContentHeader />
      <HrSeparator className="second-separator" />
      <MainContent />
      <Footer />
      <Chat />
    </div>
  )
}

export default App
