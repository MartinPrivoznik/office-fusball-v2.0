import { AppBar, Toolbar, Button, Stack, IconButton } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import ValatronLogo from '../../assets/Valatron.png'
import { useRouter } from 'next/router'
import { useState } from 'react'
import LoginModal from '../Modals/LoginModal'
import RegistrationModal from '../Modals/RegistrationModal'

function FusballNavbar() {
    const router = useRouter()
    const [loginModalOpen, setLoginModalOpen] = useState(false)
    const [registrationModalOpen, setRegistrationModalOpen] = useState(false)

    const handleLoginModalOpen = () => setLoginModalOpen(true)
    const handleLoginModalClose = () => setLoginModalOpen(false)

    const handleRegistrationModalOpen = () => setRegistrationModalOpen(true)
    const handleRegistrationModalClose = () => setRegistrationModalOpen(false)

    return (
        <AppBar position="static">
            <Toolbar>
                <Button
                    variant="text"
                    size="large"
                    onClick={() => router.push('/')}
                >
                    <Image
                        src={ValatronLogo}
                        alt="Valatron logo"
                        width="35"
                        height="35"
                    />
                    <p style={{ marginLeft: 6 }}>Office Fusball v2.0</p>
                </Button>
                <Stack direction="row" spacing={2} sx={{ marginLeft: 'auto' }}>
                    <Button>Přehled</Button>
                    <Button>Historie zápasů</Button>
                    <Button onClick={() => handleLoginModalOpen()}>
                        Přihlášení/Registrace
                    </Button>
                    <IconButton>
                        <FontAwesomeIcon icon={faUser} />
                    </IconButton>
                </Stack>
            </Toolbar>
            <LoginModal
                open={loginModalOpen}
                handleClose={handleLoginModalClose}
                handleRegistrationClicked={() => {
                    handleLoginModalClose()
                    handleRegistrationModalOpen()
                }}
            />
            <RegistrationModal
                open={registrationModalOpen}
                handleClose={handleRegistrationModalClose}
            />
        </AppBar>
    )
}

export default FusballNavbar
