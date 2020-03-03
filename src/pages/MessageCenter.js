import React from 'react'
import Header from '../components/Header/Header'
import HeaderSecondary from '../containers/HeaderSecondary'
import HrSeparator from '../components/Separator/HrSeparator'
import MainContentHeader from '../components/MainContentHeader/MainContentHeader'
import MainContent from '../components'
import Footer from '../components/Footer'
import Chat from '../components/Chat/Chat'
import Inbox from '../components/MainContentHeader/Inbox'
import Posted from '../components/MainContentHeader/Posted'
import Draft from '../components/MainContentHeader/Draft'
import Letters from '../components/MainContentHeader/Letters'
import TextModules from '../components/MainContentHeader/TextModules'
import MessageCenterComponent from '../components/MessageCenterComponent'

const MessageCenter = ({ ...props }) => (
  <>
    <Header />
    <HeaderSecondary />
    <HrSeparator className="main-separator" />
    <MainContentHeader>
      <Inbox />
      <Posted />
      <Draft />
      <Letters />
      <TextModules />
    </MainContentHeader>
    <HrSeparator className="second-separator" />
    <MainContent>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <MessageCenterComponent {...props} />
    </MainContent>
    <Footer />
    <Chat />
  </>
)

export default MessageCenter
