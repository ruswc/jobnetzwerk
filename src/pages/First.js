import React from 'react'
import Header from '../components/Header/Header'
import HeaderSocondary from '../components/HeaderSecondary/HeaderSecondary'
import HrSeparator from '../components/Separator/HrSeparator'
import MainContentHeader from '../components/MainContentHeader/MainContentHeader'
import MainContent from '../components'
import Footer from '../components/Footer'
import Chat from '../components/Chat/Chat'
import UserInfo from '../components/MainContentHeader/UserInfo'
import Main from '../components/Main'
import Cont from '../redux/container'
import HookContainer from '../redux/HookContainer'
import DateContainer from '../redux/dates/DateContainer'
import HookDateContainer from '../redux/dates/HookDateContainer'
import NewEventContainer from '../redux/dates/NewEventContainer'

const First = () => (
  <>
    <Cont />
    <DateContainer />
    <HookContainer />
    <HookDateContainer />
    <NewEventContainer />
    <Header />
    <HeaderSocondary />
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
