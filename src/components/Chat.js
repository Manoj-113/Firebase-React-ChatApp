import React, {userState, useEffect} from 'react'
import SignOut from './SignOut'

function Chat() {

    const [messages,setMessages] = userState([])

    return (
        <div>

            <SignOut></SignOut>

            Chat

        
        </div>
    )
}

export default Chat
