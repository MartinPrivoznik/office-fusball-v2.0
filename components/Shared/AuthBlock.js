import { Button, IconButton, Menu, MenuItem } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../hooks/useAuth'
import { useState } from 'react'

function AuthBlock({ handleLoginModalOpen }) {
    const { isLoggedIn, signOut } = useAuth()

    const [menuAnchor, setMenuAnchor] = useState(null)
    const menuOpen = Boolean(menuAnchor)

    const handleOpenMenu = (event) => {
        setMenuAnchor(event.currentTarget)
    }
    const handleCloseMenu = () => {
        setMenuAnchor(null)
    }

    return (
        <>
            {isLoggedIn ? (
                <>
                    <IconButton onClick={handleOpenMenu}>
                        <FontAwesomeIcon icon={faUser} />
                    </IconButton>
                    <Menu
                        id="user-menu"
                        anchorEl={menuAnchor}
                        open={menuOpen}
                        onClose={handleCloseMenu}
                    >
                        <MenuItem
                            onClick={() => {
                                signOut()
                                handleCloseMenu()
                            }}
                        >
                            Odhlásit se
                        </MenuItem>
                    </Menu>
                </>
            ) : (
                <Button onClick={() => handleLoginModalOpen()}>
                    Přihlášení/Registrace
                </Button>
            )}
        </>
    )
}

export default AuthBlock
