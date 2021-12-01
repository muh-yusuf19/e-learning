import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { Menu, Transition } from "@headlessui/react"

const UserMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const trigger = useRef(null)
  const dropdown = useRef(null)

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return
      setDropdownOpen(false)
    }
    document.addEventListener("click", clickHandler)
    return () => document.removeEventListener("click", clickHandler)
  })

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return
      setDropdownOpen(false)
    }
    document.addEventListener("keydown", keyHandler)
    return () => document.removeEventListener("keydown", keyHandler)
  })

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="px-4 py-2 rounded-lg bg-indigo-800 text-white">
        Options
      </Menu.Button>
      <Menu.Items className="absolute mt-1 right-0 bg-white flex flex-col w-44 py-4 px-2 rounded-lg shadow-lg">
        <Menu.Item>
          {({ active }) => (
            <Link href="/">
              <p
                className={`py-2 px-4 rounded-lg hover:bg-indigo-800 hover:text-white${
                  active ? "bg-blue-500" : ""
                }`}
              >
                Logout
              </p>
            </Link>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <Link href="/">
              <p
                className={`py-2 px-4 rounded-lg hover:bg-indigo-800 hover:text-white${
                  active ? "bg-blue-500" : ""
                }`}
              >
                Setting
              </p>
            </Link>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}

export default UserMenu
