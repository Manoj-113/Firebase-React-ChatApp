import React from 'react'
import {Button} from '@material-ui/core/button'
import firebase from 'firebase'
import {auth} from '../firebase'

function SignIn() {

    function SignInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }


    return (
        <div>
            <Button Onclick = {signInWithGoogle}>
                Sign In With Google
            </Button>
        </div>
    )
}

export default SignIn
