import { useRouter } from "next/router"
import Link from "next/link"
import SidebarLinkGroup from "./SidebarLinkGroup"
import { useTrail, animated } from "react-spring"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArchway,
  faClipboardCheck,
  faTachometerAlt,
  faTasks,
  faThumbtack,
} from "@fortawesome/free-solid-svg-icons"

const Trail = ({ children }) => {
  const items = [...children]
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200, duration: 300 },
    from: {
      opacity: 0,
      transform: "translateX(-40%)",
    },
    to: {
      opacity: 1,
      transform: "translateX(0%)",
    },
  })
  return (
    <>
      {trail.map((spring, index) => (
        <animated.div key={index} style={spring}>
          {items[index]}
        </animated.div>
      ))}
    </>
  )
}

const Menulist = () => {
  const location = useRouter()
  const { pathname } = location
  return (
    <>
      <Trail>
        {/* Pendahuluan */}
        <div
          className={`px-3 py-2 rounded-sm text-white rounded-xl hover:bg-yellow-400 hover:text-dark ${
            pathname === "/panel" && "bg-yellow-400 text-dark"
          }`}
        >
          <Link href="/panel">
            <div className="flex items-center hover:cursor-pointer">
              <FontAwesomeIcon
                icon={faArchway}
                fixedWidth
                className="text-indigo-600"
              />
              <span className="text-sm md:text-base font-bold ml-3 duration-200">
                Pendahuluan
              </span>
            </div>
          </Link>
        </div>

        {/* KI dan KD */}
        <div
          className={`px-3 py-2 rounded-sm text-white rounded-xl hover:bg-yellow-400 hover:text-dark ${
            pathname === "/panel/kikd" && "bg-gray-900"
          }`}
        >
          <Link href="/panel/kikd">
            <div className="flex items-center hover:cursor-pointer">
              <FontAwesomeIcon
                icon={faClipboardCheck}
                fixedWidth
                className="text-indigo-600"
              />
              <span className="text-sm md:text-base font-bold ml-3 duration-200">
                SK dan KD
              </span>
            </div>
          </Link>
        </div>

        {/* Indikator */}
        <div
          className={`px-3 py-2 rounded-sm text-white rounded-xl hover:bg-yellow-400 hover:text-dark ${
            pathname === "/panel/indikator" && "bg-gray-900"
          }`}
        >
          <Link href="/panel/indikator">
            <div className="flex items-center hover:cursor-pointer">
              <FontAwesomeIcon
                icon={faClipboardCheck}
                fixedWidth
                className="text-indigo-600"
              />
              <span className="text-sm md:text-base font-bold ml-3 duration-200">
                Indikator
              </span>
            </div>
          </Link>
        </div>

        {/* Materi */}
        <SidebarLinkGroup activecondition={pathname.includes("materi")}>
          {(handleClick, open) => {
            return (
              <>
                <a
                  className={`block text-gray-200 hover:text-white truncate transition duration-150 ${
                    pathname.includes("panel") && "hover:text-gray-200"
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    // sidebarExpanded
                    //   ? handleClick()
                    //   : setSidebarExpanded(true)
                    handleClick()
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <svg
                        className="flex-shrink-0 h-6 w-6"
                        viewBox="0 0 24 24"
                      >
                        <path
                          className={`fill-current text-gray-600 ${
                            pathname.includes("materi") && "text-indigo-500"
                          }`}
                          d="M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z"
                        />
                        <path
                          className={`fill-current text-gray-400 ${
                            pathname.includes("materi") && "text-indigo-300"
                          }`}
                          d="M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z"
                        />
                      </svg>
                      <span className="text-sm md:text-base 2xl:text-lg font-medium ml-3 duration-200">
                        Materi
                      </span>
                    </div>
                    {/* Icon */}
                    <div className="flex flex-shrink-0 ml-2">
                      <svg
                        className={`w-3 h-3 flex-shrink-0 ml-1 fill-current text-gray-400 ${
                          open && "transform rotate-180"
                        }`}
                        viewBox="0 0 12 12"
                      >
                        <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                      </svg>
                    </div>
                  </div>
                </a>
                <div className="lg:sidebar-expanded:block 2xl:block">
                  <ul className={`pl-9 mt-1 ${!open && "hidden"}`}>
                    {/* Pengantar */}
                    <li className="mb-1 last:mb-0 hover:cursor-pointer">
                      <Link href="/panel/materi/pengantar">
                        <div
                          className={
                            "block hover:text-gray-200 transition duration-150 truncate " +
                            (pathname.includes("pengantar")
                              ? "text-white"
                              : "text-gray-400")
                          }
                        >
                          <span className="text-sm 2xl:text-base font-medium duration-200">
                            Pengantar
                          </span>
                        </div>
                      </Link>
                    </li>

                    {/* Teori Arrhenius */}
                    <li className="mb-1 last:mb-0 hover:cursor-pointer">
                      <Link href="/panel/materi/teoriarrhenius">
                        <div
                          className={
                            "block hover:text-gray-200 transition duration-150 truncate " +
                            (pathname.includes("teoriarrhenius")
                              ? "text-white"
                              : "text-gray-400")
                          }
                        >
                          <span className="text-sm 2xl:text-base font-medium duration-200">
                            Teori Arrhenius
                          </span>
                        </div>
                      </Link>
                    </li>

                    {/* Teori Bronsted-Lorwry */}
                    <li className="mb-1 last:mb-0 hover:cursor-pointer">
                      <Link href="/panel/materi/teoribronstedlowry">
                        <div
                          className={
                            "block hover:text-gray-200 transition duration-150 truncate " +
                            (pathname.includes("teoribronstedlowry")
                              ? "text-white"
                              : "text-gray-400")
                          }
                        >
                          <span className="text-sm 2xl:text-base font-medium duration-200">
                            Teori Bronsted-Lowry
                          </span>
                        </div>
                      </Link>
                    </li>

                    {/* Teori Lewis */}
                    <li className="mb-1 last:mb-0 hover:cursor-pointer">
                      <Link href="/panel/materi/teorilewis">
                        <div
                          className={
                            "block hover:text-gray-200 transition duration-150 truncate " +
                            (pathname.includes("teorilewis")
                              ? "text-white"
                              : "text-gray-400")
                          }
                        >
                          <span className="text-sm 2xl:text-base font-medium duration-200">
                            Teori Lewis
                          </span>
                        </div>
                      </Link>
                    </li>

                    {/* Kesetimbangan */}
                    <li className="mb-1 last:mb-0 hover:cursor-pointer">
                      <Link href="/panel/materi/kesetimbangan">
                        <div
                          className={
                            "block hover:text-gray-200 transition duration-150 truncate " +
                            (pathname.includes("kesetimbangan")
                              ? "text-white"
                              : "text-gray-400")
                          }
                        >
                          <span className="text-sm 2xl:text-base font-medium duration-200">
                            Kesetimbangan Kimia
                          </span>
                        </div>
                      </Link>
                    </li>

                    {/* Derajat */}
                    <li className="mb-1 last:mb-0 hover:cursor-pointer">
                      <Link href="/panel/materi/derajat">
                        <div
                          className={
                            "block hover:text-gray-200 transition duration-150 truncate " +
                            (pathname.includes("derajat")
                              ? "text-white"
                              : "text-gray-400")
                          }
                        >
                          <span className="text-sm 2xl:text-base font-medium duration-200">
                            Derajat Keasaman
                          </span>
                        </div>
                      </Link>
                    </li>

                    {/* Indikator */}
                    <li className="mb-1 last:mb-0 hover:cursor-pointer">
                      <Link href="/panel/materi/indikatormateri">
                        <div className="block text-gray-400 hover:text-gray-200 transition duration-150 truncate">
                          <span className="text-sm 2xl:text-base font-medium duration-200">
                            Indikator Asam Basa
                          </span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </>
            )
          }}
        </SidebarLinkGroup>
      </Trail>
    </>
  )
}

export default Menulist
