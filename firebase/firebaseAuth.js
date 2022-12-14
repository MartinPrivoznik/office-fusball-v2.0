import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    setPersistence,
    browserLocalPersistence,
    onAuthStateChanged,
    browserSessionPersistence,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    updateProfile,
} from 'firebase/auth'
import { firebaseConfig } from './firebaseConfig'

const firebaseAuth = getAuth(firebaseConfig)

export const signIn = async (email, password, rememberMe) => {
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
}

export const register = async (email, password, nickname) => {
    const res = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
    )

    await updateProfile(res.user, {
        displayName: nickname,
    })

    await sendEmailVerification(res.user)

    return res.user.uid
}

export const signOutFromService = async () => {
    await signOut(firebaseAuth)
}

export const setOnAuthStateChanged = (action) => {
    onAuthStateChanged(firebaseAuth, action)
}
