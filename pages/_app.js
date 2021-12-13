import SimpleReactLightbox from "simple-react-lightbox"
import "tailwindcss/tailwind.css"
import "../src/config/firebase.config"
import { AuthProvider } from "../context/AuthContext"

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <SimpleReactLightbox>
        <Component {...pageProps} />
      </SimpleReactLightbox>
    </AuthProvider>
  )
}

export default MyApp
