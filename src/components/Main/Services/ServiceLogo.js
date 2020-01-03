import React from "react"

export const ServiceLogo = ({logo, header}) => (
    <div className='service-item p-4 w-100 h-100'>
        <img src={logo} alt=""/>
        <h6 className="m-2 text-center">{header}</h6>
    </div>
)
