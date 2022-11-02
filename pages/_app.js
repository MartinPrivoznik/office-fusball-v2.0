import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import '../styles/globals.css'
import { store } from '../store/store'
import { Provider } from 'react-redux'

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
            <Provider store={store}>
                <ContextProvider>
                    <Component {...pageProps} />
                </ContextProvider>
            </Provider>
        </ThemeProvider>
    )
}

export default MyApp
