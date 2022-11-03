import { useState } from 'react'
import * as firebaseDb from '../firebase/firebaseDb'

const useUsers = () => {
    const [isBusy, setBusy] = useState(false)

    const getAllUsers = async () => {
        try {
            setBusy(true)
            const users = await firebaseDb.getAllUsers()
            setBusy(false)
            return users
        } catch (err) {
            console.log(err)
            setBusy(false)
        }
    }

    return {
        isBusy,
        getAllUsers,
    }
}

export default useUsers
