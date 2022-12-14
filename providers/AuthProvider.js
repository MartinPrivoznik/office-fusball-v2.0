import React, { useEffect } from 'react'
import useAuth from '../hooks/useAuth'
import { useRouter } from 'next/router'
import { setOnAuthStateChanged } from '../firebase/firebaseAuth'

export const AuthProvider = ({ children }) => {
    const { auth, isUserLoading, setUserAuth, signOut } = useAuth()
    const router = useRouter()

    useEffect(() => {
        setOnAuthStateChanged(async (user) => {
            if (user) {
                const redirect = !auth

                if (!user.emailVerified) signOut()

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

    if (isUserLoading) return <></>

    return <> {children} </>
}

export default AuthProvider
