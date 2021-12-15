import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { Menu, Transition } from "@headlessui/react"
import { AuthProvider, useAuth } from "../../context/AuthContext"

const UserMenu = () => {
  const { logout, currentUser } = useAuth()
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="px-4 py-2 rounded-lg bg-indigo-800 text-white">
        {currentUser ? currentUser.email : "Your email"}
      </Menu.Button>
      <Menu.Items className="absolute mt-1 right-0 bg-white flex flex-col w-44 py-4 px-2 rounded-lg shadow-lg">
        <Menu.Item>
          {({ active }) => (
            <Link href="/">
              <p
                onClick={logout}
                className={`py-2 px-4 rounded-lg hover:bg-indigo-800 hover:text-white hover:cursor-pointer${
                  active ? "bg-blue-500" : ""
                }`}
              >
                Logout
              </p>
            </Link>
          )}
        </Menu.Item>
        <Menu.Item className="overflow-hidden">
          {({ active }) => (
            <Link href="/">
              <p
                className={`py-2 px-4 rounded-lg hover:bg-indigo-800 hover:text-white hover:cursor-pointer${
                  active ? "bg-blue-500" : ""
                }`}
              >
                Setting
              </p>
            </Link>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <Link href="/">
              <p
                className={`py-2 px-4 rounded-lg hover:bg-indigo-800 hover:text-white hover:cursor-pointer${
                  active ? "bg-blue-500" : ""
                }`}
              >
                Home
              </p>
            </Link>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}

export default UserMenu
