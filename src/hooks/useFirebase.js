import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

import initializeFirebase from "../Pages/Firebase/firebase.init";

initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();

    const emailLogin = (email, password) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {

                setUser(result.user);
            })
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        });
    }, [])

    return {
        emailLogin,
        user,
        setUser,
        logOut
    }
}
export default useFirebase;