import {
    Box,
    Typography,
    TextField,
    Button,
    Modal,
    Alert,
    LinearProgress,
} from '@mui/material'
import { useState } from 'react'
import useAuth from '../../hooks/useAuth'

function RegistrationModal({ open, handleClose }) {
    const { registerUser, isBusy, signOut } = useAuth()
    const [registerSuccess, setRegisterSuccess] = useState(false)
    const [registerError, setRegisterError] = useState(false)
    const [inputErrorState, setInputErrorState] = useState({
        nick: false,
        email: false,
        password: false,
    })

    const validateInputs = (userData) => {
        setInputErrorState({
            nick: false,
            email: false,
            password: false,
        })

        let success = true

        if (userData.nick.length === 0) {
            setInputErrorState({ ...inputErrorState, nick: true })
            success = false
        }
        if (
            userData.email.length === 0 ||
            !userData.email.endsWith('@valatron.com')
        ) {
            setInputErrorState({ ...inputErrorState, email: true })
            success = false
        }
        if (userData.password.length === 0) {
            setInputErrorState({ ...inputErrorState, password: true })
            success = false
        }

        return success
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        setRegisterSuccess(false)
        setRegisterError(false)

        const data = new FormData(event.currentTarget)

        const userData = {
            email: data.get('email'),
            password: data.get('password'),
            nick: data.get('nick'),
        }

        if (!validateInputs(userData)) return

        const res = await registerUser(
            userData.email,
            userData.password,
            userData.nick
        )

        if (res) {
            signOut()
            setRegisterSuccess(true)
        } else setRegisterError(true)
    }
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="registration-modal"
            aria-describedby="registration-modal"
        >
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    maxWidth: 400,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            >
                <Typography component="h1" variant="h5">
                    Registrace
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{ mt: 1 }}
                >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="nick"
                        label="Nickname"
                        name="nick"
                        error={inputErrorState.nick}
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        error={inputErrorState.email}
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Heslo"
                        type="password"
                        id="password"
                        error={inputErrorState.password}
                    />
                    {registerSuccess ? (
                        <Alert severity="success">
                            Registrace byla úspěšná. Na emailovou adresu vám byl
                            zaslán link na potvrzení (Zkontrolujte spam, nemam
                            nastavený SMTP)
                        </Alert>
                    ) : (
                        <></>
                    )}
                    {registerError ? (
                        <Alert severity="error">
                            Chyba při registraci - Zkontrolujte konzoli, snad
                            Firebase vyhodil nějakou rozumnou vyjímku
                        </Alert>
                    ) : (
                        <></>
                    )}
                    {isBusy ? <LinearProgress /> : <></>}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Registrovat
                    </Button>
                </Box>
            </Box>
        </Modal>
    )
}

export default RegistrationModal
