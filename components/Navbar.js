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
    <nav className="w-full flex items-center justify-around p-2 bg-white flex-wrap shadow-md">
      <a href="#" className="p-2 mr-4 inline-flex items-center">
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current text-blue-400 h-8 w-8 mr-2"
        >
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
        <span className="text-sm text-blue-400 font-bold uppercase tracking-wide">
          Asam Basa
        </span>
      </a>
      <button
        onClick={handleToggle}
        className="text-blue-500 inline-flex p-2 rounded lg:hidden ml-auto hover:bg-blue-500 hover:text-white outline-none"
        data-target="#navigation"
      >
        <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
          {!isOpen ? (
            <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"></path>
          ) : (
            <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
          )}
        </svg>
      </button>
      <div
        className={
          isOpen
            ? "w-full lg:inline-flex lg:w-auto"
            : "hidden w-full lg:inline-flex lg:w-auto"
        }
        id="navigation"
      >
        <div className="lg:inline-flex gap-4 lg:flex-row lg:ml-auto lg:items-center items-start flex flex-col">
          <Link href="/">
            <div
              className={
                "lg:inline-flex lg:w-auto w-full px-6 py-2 rounded-full items-center justify-center hover:bg-indigo-800 hover:text-white hover:cursor-pointer " +
                (router.pathname == "/"
                  ? "bg-indigo-800 text-white"
                  : "text-indigo-800")
              }
            >
              Home
            </div>
          </Link>
          <Link href="/panel">
            <div className="lg:inline-flex lg:w-auto w-full px-6 py-2 rounded-full text-indigo-800 items-center justify-center hover:bg-indigo-800 hover:text-white hover:cursor-pointer">
              Panel
            </div>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
