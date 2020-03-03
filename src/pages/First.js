import React from 'react'
import Header from '../components/Header/Header'
import HeaderSecondary from '../containers/HeaderSecondary'
import HrSeparator from '../components/Separator/HrSeparator'
import MainContentHeader from '../components/MainContentHeader/MainContentHeader'
import MainContent from '../components'
import Footer from '../components/Footer'
import Chat from '../components/Chat/Chat'
import UserInfo from '../components/MainContentHeader/UserInfo'
import Main from '../components/Main'

const First = () => (
  <>
    <Header />
    <HeaderSecondary />
    <HrSeparator className="main-separator" />
    <MainContentHeader>
      <UserInfo />
    </MainContentHeader>
    <HrSeparator className="second-separator" />
    <MainContent>
      <Main />
    </MainContent>
    <Footer />
    <Chat />
  </>
)

export default First
