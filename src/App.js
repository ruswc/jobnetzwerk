import React from "react"
// import logo from './logo.svg';
// import './App.css';

import Header from "./components/Header/Header"
import HeaderSocondary from "./components/HeaderSecondary/HeaderSecondary"
import Hr from "./components/Hr"
import MainHeader from "./components/MainHeader"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import Chat from "./components/Chat/Chat"

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderSocondary />
      <Hr className="main-separator" />
      <MainHeader />
      <Hr className="second-separator" />
      <MainContent />
      <Footer />
      <Chat />
    </div>
  )
}

export default App
