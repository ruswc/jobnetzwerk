import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header/Header'
import HrSeparator from '../components/Separator/HrSeparator'

const Error = () => (
  <>
    <Header />
    <HrSeparator className="second-separator" />
    <div className="w-100 h-100 d-flex flex-column">
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>Oops!</h1>
            <h2>404 - The Page can&apos;t be found</h2>
          </div>
          <Link to="/"> Go to Homepage </Link>
        </div>
      </div>
    </div>
  </>
)

export default Error
