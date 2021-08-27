import React from 'react'
import {auth} from '../firebase'
import {Button} from '@material-ui/core'


function SignOut() {
    return (
        <div>
            <Button onClick={() =>auth.Signout()}>Sign Out</Button>
        </div>
    )
}

export default SignOut
