import {
    addDoc,
    collection,
    doc,
    getDocs,
    getFirestore,
    query,
    setDoc,
    where,
} from 'firebase/firestore'
import { firebaseConfig } from './firebaseConfig'

const firestore = getFirestore(firebaseConfig)

export const getAllProjectData = async () => {
    // const projectsSnapshot = await getDocs(collection(firestore, 'projects'))
    // const parcelsSnapshot = await getDocs(collection(firestore, 'parcels'))
    // const parcels = parcelsSnapshot.docs.map((parc) => {
    //     return {
    //         id: parc.id,
    //         ...parc.data(),
    //     }
    // })
    // return projectsSnapshot.docs.map((proj) => {
    //     return {
    //         id: proj.id,
    //         ...proj.data(),
    //         parcels: parcels.filter((parc) => parc.projectId === proj.id),
    //     }
    // })
}

export const addUser = async (user) => {
    const docRef = await addDoc(collection(firestore, 'users'), user)
    return docRef.id
}

export const getParcelsByKey = async (key, apiKey) => {
    // const projectsQuery = query(
    //     collection(firestore, 'projects'),
    //     where('key', '==', key),
    //     where('apiKey', '==', apiKey)
    // )
    // const projectsSnapshot = await getDocs(projectsQuery)
    // if (projectsSnapshot.docs.length === 0)
    //     throw new Error(
    //         'Chybně zadaný API klíč nebo nebyly nalezeny žádné záznamy'
    //     )
    // const parcelsQuery = query(
    //     collection(firestore, 'parcels'),
    //     where('projectId', '==', projectsSnapshot.docs[0].id)
    // )
    // const parcelsSnapshot = await getDocs(parcelsQuery)
    // return await parcelsSnapshot.docs.map((par) => par.data())
}
