import { Button, IconButton } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import AuthBlock from '../Shared/AuthBlock'

function Menu({ handleLoginModalOpen }) {
    return (
        <>
            <Button>Přehled</Button>
            <Button>Historie zápasů</Button>
            <AuthBlock handleLoginModalOpen={handleLoginModalOpen} />
        </>
    )
}

export default Menu
