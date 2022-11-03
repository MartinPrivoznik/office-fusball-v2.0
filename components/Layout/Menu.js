import { Button, IconButton } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import AuthBlock from '../Shared/AuthBlock'
import useAuth from '../../hooks/useAuth'

function Menu({ handleLoginModalOpen }) {
    const { isLoggedIn } = useAuth()
    return (
        <>
            <Button>Přehled</Button>
            <Button>Historie zápasů</Button>
            {isLoggedIn ? <Button>Nový zápas</Button> : <></>}
            <AuthBlock handleLoginModalOpen={handleLoginModalOpen} />
        </>
    )
}

export default Menu
