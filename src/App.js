
import './App.css';
import Chat from './components/Chat';
import SignIn from './components/Signin';
import {useAuthState} from 'react-firebase-hooks';
import {auth} from './firebase';

function App() {

  const {user} = useAuthState(auth)

  return (
    <>
      <SignIn/>
      <Chat/>
    </>
  );
}

export default App;
