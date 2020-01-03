import React from "react"

export const LeftSideSubtitle = ({text, children}) => (
    <h6 className='left-side-subtitle text-center'>
        {text}
        <br/>
        {children}
    </h6>
)
