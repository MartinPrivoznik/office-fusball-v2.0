import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as firebaseAuth from '../firebase/firebaseAuth'
import * as authActions from '../actions/authActions'

const useAuth = () => {
    const dispatch = useDispatch()
    const [isBusy, setBusy] = useState(false)
    const [isUserLoading, setIsUserLoading] = useState(false)
    const { auth } = useSelector((state) => state)

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

    const loginUser = async (email, password) => {
        try {
            setBusy(true)
            setIsUserLoading(true)
            const userAuth = await firebaseAuth.signIn(email, password)
            await setUserAuth(userAuth)
            setIsUserLoading(false)
            setBusy(false)
            return userAuth
        } catch (err) {
            console.log(err)
            setBusy(false)
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
        setUserAuth,
        loginUser,
        signOut,
    }
}

export default useAuth
