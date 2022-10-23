import { auth } from "./firebase"
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

export const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((re) => {
        //console.log(re);
    })
    .catch((err) => {
        console.log(err)
    })
}