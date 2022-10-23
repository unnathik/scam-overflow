import { useContext, createContext } from "react";
import { GoogleAuthProvider, 
    signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }

    return (
        <AuthContextProvider value={{googleSignIn}}>
            {children}
        </AuthContextProvider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}