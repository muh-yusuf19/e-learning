import SimpleReactLightbox from "simple-react-lightbox"
import "tailwindcss/tailwind.css"

function MyApp({ Component, pageProps }) {
  return (
    <SimpleReactLightbox>
      <Component {...pageProps} />
    </SimpleReactLightbox>
  )
}

export default MyApp
