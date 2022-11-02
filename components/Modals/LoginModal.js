import {
    Box,
    Typography,
    TextField,
    FormControlLabel,
    Checkbox,
    Grid,
    Button,
    Modal,
} from '@mui/material'

function LoginModal({ open, handleClose, handleRegistrationClicked }) {
    const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        })
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
                        control={<Checkbox value="remember" color="primary" />}
                        label="Zapamatovat si mě"
                    />
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
