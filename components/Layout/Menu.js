import { Button } from '@mui/material'
import AuthBlock from '../Shared/AuthBlock'
import useAuth from '../../hooks/useAuth'
import { useRouter } from 'next/router'

function Menu({ handleLoginModalOpen }) {
    const { isLoggedIn } = useAuth()
    const router = useRouter()
    return (
        <>
            <Button onClick={() => router.push('/')}>Přehled</Button>
            <Button onClick={() => router.push('/matchHistory')}>
                Historie zápasů
            </Button>
            {isLoggedIn ? (
                <Button onClick={() => router.push('/newMatch')}>
                    Nový zápas
                </Button>
            ) : (
                <></>
            )}
            <AuthBlock handleLoginModalOpen={handleLoginModalOpen} />
        </>
    )
}

export default Menu
