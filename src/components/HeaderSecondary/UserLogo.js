import React from "react"
import {LeftSideSubtitle} from "../LeftSideSubtitle"

export const UserLogo = ({img}) => (
    <div className='user-logo-container p-4'>
        <div className='tassel'/>
        <div className='user-logo-frame p-3'>
            <img src={img} alt=""/>
        </div>
        <LeftSideSubtitle text='Beverberprofil'>
            Derya Bulut
        </LeftSideSubtitle>
    </div>
)
