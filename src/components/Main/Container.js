import React from "react"

export const Container = ({children}) => (
    <div className='container-fluid m-0 p-0'>
        <div className='row'>
            <div className='col-12'>
                {children}
            </div>
        </div>
    </div>
)
