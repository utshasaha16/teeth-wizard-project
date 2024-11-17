import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.init";
import { signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


export const authContext = createContext()
const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null)
    const handleSignUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }
    const handleSignIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
    }
    const handleGoogleSingIn = () => {
        signInWithPopup(auth, googleProvider)
    }
    const handleSignOut = () => {
        signOut(auth)
    }
    const authInfo = {
        handleSignUp,
        handleSignIn,
        handleGoogleSingIn,
        handleSignOut
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentsUser) => {
            console.log(currentsUser);

            return () => {
                unsubscribe()
            }
        })
    }, [])

    return (
        <div>
            <authContext.Provider value={authInfo}>{children}</authContext.Provider>
        </div>
    );
};

export default AuthProvider;