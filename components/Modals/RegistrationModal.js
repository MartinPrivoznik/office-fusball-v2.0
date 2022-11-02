import { Box, Typography, TextField, Button, Modal } from '@mui/material'

function RegistrationModal({ open, handleClose }) {
    const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        })
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
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
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
                    />
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
