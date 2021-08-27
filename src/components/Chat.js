import React, {userState, useEffect} from 'react'
import SignOut from './SignOut'

function Chat() {

    const [messages,setMessages] = userState([])
    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    return (
        <div>

            <SignOut></SignOut>

            Chat
            {messages.map(({id,text,photoURL}) => {
                <div>

                </div>
            })}

        
        </div>
    )
}

export default Chat
