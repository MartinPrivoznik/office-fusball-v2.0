import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as firebaseAuth from '../firebase/firebaseAuth'
import * as firebaseDb from '../firebase/firebaseDb'
import * as authActions from '../actions/authActions'

const useAuth = () => {
    const dispatch = useDispatch()
    const [isBusy, setBusy] = useState(false)
    const [isUserLoading, setIsUserLoading] = useState(false)
    const { auth } = useSelector((state) => state)
    const isLoggedIn = auth ? true : false

    const setUserAuth = async (authData) => {
        try {
            setBusy(true)
            if (authData) {
                setIsUserLoading(true)
                dispatch(authActions.updateAuth(authData))
                setIsUserLoading(false)
            }
            setBusy(false)
        } catch (err) {
            console.log(err)
            setBusy(false)
        }
    }

    const loginUser = async (email, password, rememberMe) => {
        try {
            setBusy(true)
            setIsUserLoading(true)
            const userAuth = await firebaseAuth.signIn(
                email,
                password,
                rememberMe
            )
            if (userAuth.emailVerified) await setUserAuth(userAuth)
            else await firebaseAuth.signOutFromService()
            setIsUserLoading(false)
            setBusy(false)
            return userAuth
        } catch (err) {
            console.log(err)
            setBusy(false)
        }
    }

    const registerUser = async (email, password, nickname) => {
        try {
            setBusy(true)
            const userId = await firebaseAuth.register(email, password)
            await firebaseDb.addUser({
                authUid: userId,
                nickname: nickname,
            })
            setBusy(false)
            return true
        } catch (err) {
            console.log(err)
            setBusy(false)
            return false
        }
    }

    const signOut = async () => {
        try {
            setBusy(true)
            await firebaseAuth.signOutFromService()
            dispatch(authActions.updateAuth(null))
            setBusy(false)
        } catch (err) {
            console.log(err)
            setBusy(false)
        }
    }

    return {
        isBusy,
        isUserLoading,
        auth,
        isLoggedIn,
        setUserAuth,
        loginUser,
        registerUser,
        signOut,
    }
}

export default useAuth
