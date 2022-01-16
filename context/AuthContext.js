import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth"
import { createContext, useContext, useEffect, useState } from "react"
import { auth } from "../src/config/firebase.config"

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)

  const login = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user
        console.log(user)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const logout = () => {
    auth.signOut()
    setCurrentUser(null)
    console.log("logout")
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid
        setCurrentUser(user)
        console.log({ uid })
      } else {
        console.log("no user")
      }
    })
    return unsubscribe
  }, [])

  const value = {
    login,
    logout,
    currentUser,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
