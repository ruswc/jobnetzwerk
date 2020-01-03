import React from "react"
import chat from "img/vector/chat.svg"
import arrowup from "img/vector/arrowup.svg"

export const Chat = () => (
    <div id="chat-container" className='chat-container py-2 px-3'>
        <div className='chat-item'>
            <img src={chat} alt="" className="chat-logo"/>
        </div>
        <div className='chat-item'>
            Chat mit dem Vermittler
        </div>
        <div className='chat-item'>
            <img src={arrowup} alt="" className="chat-open-arrow"/>
        </div>
    </div>
)
