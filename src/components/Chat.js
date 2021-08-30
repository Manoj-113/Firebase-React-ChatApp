import React, {userState, useEffect} from 'react'
import SignOut from './SignOut'
import {db} from '../firebase'
import SendMessage from './SendMessage'

function Chat() {

    const [messages,setMessages] = userState([])
    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    return (
        <div>

            <SignOut/>

            Chat
            {messages.map(({id,text,photoURL}) => {
                <div>
                    <img src={photoURL} alt=""/>
                    <p>{text}</p>
                </div>
            })}

            <SendMessage></SendMessage>

        
        </div>
    )
}

export default Chat
