import React from 'react'
import Dot from './Dot'

const Loader = () => {
  return (
    <>
      <Dot />
      <Dot delay="0.2s" />
      <Dot delay="0.4s" />
    </>
  )
}

export default Loader
