import React, { useEffect } from 'react'
import useAuth from '../hooks/useAuth'
import { useRouter } from 'next/router'
import Loader from '../Components/Components/Loader'
import { setOnAuthStateChanged } from '../firebase/firebaseAuth'

export const AuthProvider = ({ children }) => {
    const { auth, isUserLoading, setUserAuth } = useAuth()
    const router = useRouter()

    useEffect(() => {
        setOnAuthStateChanged(async (user) => {
            if (user) {
                const redirect = !auth
                if (redirect) {
                    const idToken = await user.getIdTokenResult()
                    if (idToken) {
                        await router.push('/')
                    }
                }
                await setUserAuth(user)
            } else {
                await router.push('/')
            }
        })
    }, [])

    if (!auth || isUserLoading) return <></>

    return <> {children} </>
}

export default AuthProvider
