import React,{userState} from 'react'
import {db, auth} from '../firebase'
import {Input, Button} from '@material-ui/core'


function SendMessage() {
    const [msg, setMsg] = userState('')

    async function sendMessage{
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <Input value={msg} onChange={(e) =>setMsg(e.target.value)} />placeholder="Message...."/>
                <Button type="submit">SendMessage</Button>
            </form>
        </div>
    )
}

export default SendMessage
