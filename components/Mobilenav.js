import {
  faBookReader,
  faFlask,
  faListOl,
  faTasks,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useRouter } from "next/router"

const Mobilenav = () => {
  const router = useRouter()

  return (
    <footer className="fixed bottom-0 w-full lg:hidden bg-white">
      <div className="flex flex-row justify-between text-dark">
        <Link href="/panel">
          <div
            className={
              "flex flex-col md:flex-auto justify-around items-center gap-2 px-2 md:px-4 py-3 text-center active:bg-dark active:text-yellow-400 " +
              (router.pathname == "/panel" ? "bg-dark text-yellow-400" : "")
            }
          >
            <FontAwesomeIcon icon={faUniversity} />
            <p className="text-xs md:text-lg">Pendahuluan</p>
          </div>
        </Link>
        <Link href="/panel/kikd">
          <div
            className={
              "flex flex-col md:flex-auto justify-around items-center gap-2 px-2 md:px-4 py-3 text-center active:bg-dark active:text-yellow-400 " +
              (router.pathname == "/panel/kikd"
                ? "bg-dark text-yellow-400"
                : "")
            }
          >
            <FontAwesomeIcon icon={faListOl} />
            <p className="text-xs md:text-lg">sk & kd</p>
          </div>
        </Link>
        <Link href="/panel/indikator">
          <div
            className={
              "flex flex-col md:flex-auto justify-around items-center gap-2 px-2 md:px-4 py-3 text-center active:bg-dark active:text-yellow-400 " +
              (router.pathname == "/panel/indikator"
                ? "bg-dark text-yellow-400"
                : "")
            }
          >
            <FontAwesomeIcon icon={faFlask} />
            <p className="text-xs md:text-lg">Indikator</p>
          </div>
        </Link>
        <div className="flex flex-col md:flex-auto justify-around items-center gap-2 px-2 md:px-4 py-3 text-center">
          <FontAwesomeIcon icon={faBookReader} />
          <p className="text-xs md:text-lg">Materi</p>
        </div>
        <div className="flex flex-col md:flex-auto justify-around items-center gap-2 px-2 md:px-4 py-3 text-center">
          <FontAwesomeIcon icon={faTasks} />
          <p className="text-xs md:text-lg">Latihan</p>
        </div>
      </div>
    </footer>
  )
}

export default Mobilenav
