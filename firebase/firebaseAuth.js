import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    setPersistence,
    browserLocalPersistence,
    onAuthStateChanged,
    browserSessionPersistence,
} from 'firebase/auth'
import { firebaseConfig } from './firebaseConfig'

const firebaseAuth = getAuth(firebaseConfig)

export const signIn = async (email, password, rememberMe) => {
    try {
        await setPersistence(
            firebaseAuth,
            rememberMe ? browserLocalPersistence : browserSessionPersistence
        )

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

export const signOutFromService = async () => {
    await signOut(firebaseAuth)
}

export const setOnAuthStateChanged = (action) => {
    onAuthStateChanged(firebaseAuth, action)
}
