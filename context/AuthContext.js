import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth"
import { createContext, useContext, useEffect, useState } from "react"
import { auth } from "../src/config/firebase.config"
import { useRouter } from "next/router"

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()

  const provider = new GoogleAuthProvider()

  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        // const user = result.user
        // console.log(user)
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
