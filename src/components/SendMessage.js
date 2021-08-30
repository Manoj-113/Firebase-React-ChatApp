import React,{userState} from 'react'
import {Input, Button} from '@material-ui/core'


function SendMessage() {
    const [msg, setMsg] = userState('')
    return (
        <div>
            <form>
                <Input value={msg} onChange={(e) =>setMsg(e.target.value)} />placeholder="Message...."/>
                <Button>SendMessage</Button>
            </form>
        </div>
    )
}

export default SendMessage
