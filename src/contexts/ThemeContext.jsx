import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#4ab0e7',
    },
    secondary: {
      main: '#68c64b',
    },
  },
})

const ThemeContext = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ThemeContext
