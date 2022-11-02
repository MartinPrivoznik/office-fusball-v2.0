import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import '../styles/globals.css'

const Noop = ({ children }) => <>{children}</>

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
})

function MyApp({ Component, pageProps }) {
    const ContextProvider = Component.provider || Noop
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <ContextProvider>
                <Component {...pageProps} />
            </ContextProvider>
        </ThemeProvider>
    )
}

export default MyApp
