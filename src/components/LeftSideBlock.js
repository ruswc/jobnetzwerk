import React from "react"
import {LeftSideSubtitle} from "./LeftSideSubtitle"


export const LeftSideBlock = ({img, text}) => (
    <div className='left-side-block'>
        {img && <img className="logo" src={img} alt=""/>}
        {text && <LeftSideSubtitle text={text}/>}
    </div>
)
