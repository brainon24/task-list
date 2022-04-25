import '../styles/globals.css'
import { CssBaseline } from '@mui/material'
import { SnackbarProvider } from 'notistack';

function MyApp({ Component, pageProps }) {
  return (
    <SnackbarProvider maxSnack={3}>
      <CssBaseline />
      <Component {...pageProps} />
    </SnackbarProvider>
    
  )
}

export default MyApp
