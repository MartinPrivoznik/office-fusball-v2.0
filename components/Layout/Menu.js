import { Button, IconButton } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function Menu({ handleLoginModalOpen }) {
    return (
        <>
            <Button>Přehled</Button>
            <Button>Historie zápasů</Button>
            <Button onClick={() => handleLoginModalOpen()}>
                Přihlášení/Registrace
            </Button>
            <IconButton>
                <FontAwesomeIcon icon={faUser} />
            </IconButton>
        </>
    )
}

export default Menu
