import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    setPersistence,
    browserLocalPersistence,
    onAuthStateChanged,
} from 'firebase/auth'
import { firebaseConfig } from '../../shared/firebase/firebaseConfig'

const firebaseAuth = getAuth(firebaseConfig)

export const signIn = async (email, password) => {
    try {
        await setPersistence(firebaseAuth, browserLocalPersistence)

        const response = await signInWithEmailAndPassword(
            firebaseAuth,
            email,
            password
        )

        return response.user
    } catch (err) {
        throw new Error(err)
    }
}

export const signOutFromService = async (email, password) => {
    try {
        await signOut(firebaseAuth)
    } catch (err) {
        throw new Error(err)
    }
}

export const setOnAuthStateChanged = (action) => {
    onAuthStateChanged(firebaseAuth, action)
}
