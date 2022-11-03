import {
    Box,
    Typography,
    TextField,
    FormControlLabel,
    Checkbox,
    Grid,
    Button,
    Modal,
    Alert,
    LinearProgress,
} from '@mui/material'
import { useState } from 'react'
import useAuth from '../../hooks/useAuth'

function LoginModal({ open, handleClose, handleRegistrationClicked }) {
    const { loginUser, isBusy, signOut } = useAuth()
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const [showEmailVerificationMessage, setShowEmailVerificationMessage] =
        useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()

        setShowErrorMessage(false)
        setShowEmailVerificationMessage(false)

        const data = new FormData(event.currentTarget)
        const usr = await loginUser(
            data.get('email'),
            data.get('password'),
            data.get('rememberMe') ? true : false
        )
        if (!usr) {
            setShowErrorMessage(true)
            return
        }
        if (!usr.emailVerified) {
            setShowEmailVerificationMessage(true)
            signOut()
            return
        }

        handleClose()
    }

    if (open === undefined) return <></>

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="login-modal"
            aria-describedby="login-modal"
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
                    Přihlášení
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
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
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
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="rememberMe"
                                id="rememberMe"
                                value="rememberMe"
                                color="primary"
                            />
                        }
                        label="Zapamatovat si mě"
                    />
                    {showEmailVerificationMessage ? (
                        <Alert severity="warning">
                            Na váš email byl odeslán potvrzovací link, prosím
                            potvrďte jej
                        </Alert>
                    ) : (
                        <></>
                    )}
                    {showErrorMessage ? (
                        <Alert severity="error">
                            Chybně zadané heslo nebo email
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
                        Přihlásit
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Button
                                variant="text"
                                onClick={() => handleRegistrationClicked()}
                            >
                                Registrace
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Modal>
    )
}

export default LoginModal
