import { AuthProvider, FirebaseAppProvider, FirestoreProvider, FunctionsProvider, StorageProvider, useFirebaseApp } from 'reactfire'
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions'

import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
}

const FirebaseProvider = ({ children }) => {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <FirebaseComponents>{children}</FirebaseComponents>
    </FirebaseAppProvider>
  )
}

const FirebaseComponents = ({ children }) => {
  const app = useFirebaseApp()
  const auth = getAuth(app)
  const firestore = getFirestore(app)
  const functions = getFunctions(app)
  const storage = getStorage(app)

  if (process.env.NODE_ENV !== 'production') {
    connectFunctionsEmulator(functions, 'localhost', 5001)
  }

  return (
    <AuthProvider sdk={auth}>
      <FirestoreProvider sdk={firestore}>
        <StorageProvider sdk={storage}>
          <FunctionsProvider sdk={functions}>{children}</FunctionsProvider>
        </StorageProvider>
      </FirestoreProvider>
    </AuthProvider>
  )
}

export { FirebaseComponents, FirebaseProvider }
