import React,{userState} from 'react'


function SendMessage() {
    const [msg, setMsg] = userState('')
    return (
        <div>
            <form>
                <Input placeholder="Message...."/>
                <Button>SendMessage</Button>
            </form>
        </div>
    )
}

export default SendMessage
