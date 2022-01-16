import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/dist/client/router"

const Navbar = () => {
  let [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const router = useRouter()

  return (
    <div className="w-full text-gray-700 z-10">
      <div className="flex flex-col px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="p-4 flex flex-row items-center justify-between">
          <Link href="/">
            <div className="text-xs md:text-base font-bold text-indigo-800 bg-white py-2 px-4 rounded-full uppercase hover:cursor-pointer hover:-translate-y-2 transform transition">
              Asam Basa
            </div>
          </Link>
          <button
            className="text-yellow-400 md:hidden rounded-lg focus:outline-none focus:shadow-outline"
            onClick={handleToggle}
          >
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              {isOpen ? (
                <path
                  x-show="open"
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              ) : (
                <path
                  x-show="!open"
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              )}
            </svg>
          </button>
        </div>
        <nav
          className={
            (isOpen ? "flex" : "hidden") +
            " flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:gap-6 md:flex-row"
          }
        >
          <Link href="/">
            <div
              className={
                "px-6 py-2 mt-2 text-xs md:text-base font-bold rounded-full md:mt-0 hover:cursor-pointer hover:bg-indigo-600 hover:-translate-y-2 transform transition " +
                (router.pathname == "/"
                  ? "bg-indigo-800 text-white"
                  : "text-white")
              }
            >
              Home
            </div>
          </Link>
          <Link href="/panel">
            <div
              className={
                "px-6 py-2 mt-2 text-xs md:text-base font-bold rounded-full md:mt-0 hover:cursor-pointer hover:bg-indigo-600 hover:-translate-y-2 transform transition " +
                (router.pathname == "bg-indigo-800 text-white"
                  ? "bg-white"
                  : "text-white")
              }
            >
              Panel
            </div>
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
