import React from "react"

export const Row = ({img, header, text}) => (
    <div className='row'>
        <div className='col-1 p-0 d-flex justify-content-center align-items-center'>
            <img src={img} alt="" className='icon'/>
        </div>
        <div className='col-11'>
            {header && <h5 className='text-capitalize'>{header}</h5>}
            {text && <p className='text-body'>{text}</p>}
        </div>
    </div>
)


// col-2 col-md-1
// col-10 col-md-11
