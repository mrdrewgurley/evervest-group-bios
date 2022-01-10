import { FirebaseComponents, FirebaseProvider } from './contexts/FirebaseContext'

import GlobalStyles from './styles/GlobalStyles'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'
import ThemeContext from './contexts/ThemeContext'

ReactDOM.render(
  <React.StrictMode>
    <FirebaseProvider>
      <ThemeContext>
        <GlobalStyles />
        <Router>
          <Routes />
        </Router>
      </ThemeContext>
    </FirebaseProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
