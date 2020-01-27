import React from 'react'
import Container from '../Containers/Container'
import ProfileHeader from './Profile/ProfileHeader'
import ProfileBody from './Profile/ProfileBody'
import GuideHeader from './Guide/GuideHeader'
import GuideBody from './Guide/GuideBody'
import Services from './Services/index'

const Main = () => (
  <>
    <Container>
      <ProfileHeader />
      <ProfileBody />
      <GuideHeader />
      <GuideBody />
    </Container>

    <Container>
      <Services />
    </Container>
  </>
)

export default Main
