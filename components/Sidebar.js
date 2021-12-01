import { useState, useEffect, useRef, Fragment } from "react"
import { useRouter } from "next/dist/client/router"
import Link from "next/link"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArchway,
  faClipboardCheck,
  faTachometerAlt,
  faTasks,
  faThumbtack,
} from "@fortawesome/free-solid-svg-icons"
import SidebarLinkGroup from "./SidebarLinkGroup"

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useRouter()
  const { pathname } = location

  const trigger = useRef(null)
  const sidebar = useRef(null)

  // const storedSidebarExpanded = () => {
  //   if (typeof window !== "undefined") {
  //     window.localStorage.getItem("sidebar-expanded")
  //   }
  // }
  const [sidebarExpanded, setSidebarExpanded] = useState(false)

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return
      setSidebarOpen(false)
    }
    document.addEventListener("click", clickHandler)
    return () => document.removeEventListener("click", clickHandler)
  })

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return
      setSidebarOpen(false)
    }
    document.addEventListener("keydown", keyHandler)
    return () => document.removeEventListener("keydown", keyHandler)
  })

  useEffect(() => {
    // localStorage.setItem("sidebar-expanded", sidebarExpanded)
    // if (sidebarExpanded) {
    //   document.querySelector("body").classList.add("sidebar-expanded")
    // } else {
    //   document.querySelector("body").classList.remove("sidebar-expanded")
    // }
    document.querySelector("body").classList.add("sidebar-expanded")
  }, [sidebarExpanded])

  return (
    <>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-64 lg:sidebar-expanded:!w-64 2xl:!w-64 flex-shrink-0 bg-gray-800 p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-72"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-gray-500 hover:text-gray-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <div className="block hover:cursor-pointer">
            <Link href="/">
              <svg width="32" height="32" viewBox="0 0 32 32">
                <defs>
                  <linearGradient
                    x1="28.538%"
                    y1="20.229%"
                    x2="100%"
                    y2="108.156%"
                    id="logo-a"
                  >
                    <stop stopColor="#A5B4FC" stopOpacity="0" offset="0%" />
                    <stop stopColor="#A5B4FC" offset="100%" />
                  </linearGradient>
                  <linearGradient
                    x1="88.638%"
                    y1="29.267%"
                    x2="22.42%"
                    y2="100%"
                    id="logo-b"
                  >
                    <stop stopColor="#38BDF8" stopOpacity="0" offset="0%" />
                    <stop stopColor="#38BDF8" offset="100%" />
                  </linearGradient>
                </defs>
                <rect fill="#6366F1" width="32" height="32" rx="16" />
                <path
                  d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z"
                  fill="#4F46E5"
                />
                <path
                  d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z"
                  fill="url(#logo-a)"
                />
                <path
                  d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z"
                  fill="url(#logo-b)"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-8">
          <h1 className="text-base md:text-lg font-bold text-white ml-3">
            Website Kimia Berbasis MLR
          </h1>
          {/* Pages group */}
          <div>
            <h3 className="text-xs uppercase text-gray-500 font-semibold pl-3">
              <span className="lg:sidebar-expanded:block 2xl:block">Pages</span>
            </h3>
            <ul className="mt-3">
              {/* Pendahuluan */}
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 text-white hover:bg-gray-900 ${
                  pathname === "/panel" && "bg-gray-900"
                }`}
              >
                <Link href="/panel">
                  <div
                    className={`block hover:cursor-pointer truncate transition duration-150 ${
                      pathname === "/panel" && "hover:text-gray-200"
                    }`}
                  >
                    <div className="flex items-center">
                      <FontAwesomeIcon
                        icon={faArchway}
                        fixedWidth
                        className="text-indigo-600"
                      />
                      <span className="text-sm md:text-base 2xl:text-lg font-medium ml-3 duration-200">
                        Pendahuluan
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
              {/* KI & KD */}
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 text-white hover:bg-gray-900 ${
                  pathname === "/panel/kikd" && "bg-gray-900"
                }`}
              >
                <Link href="/panel/kikd">
                  <div
                    className={`block hover:cursor-pointer truncate transition duration-150 ${
                      pathname === "/panel/kikd" && "hover:text-gray-200"
                    }`}
                  >
                    <div className="flex items-center">
                      <FontAwesomeIcon
                        icon={faClipboardCheck}
                        fixedWidth
                        className="text-indigo-600"
                      />
                      <span className="text-sm md:text-base 2xl:text-lg font-medium ml-3 duration-200">
                        KI & KD
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
              {/* Indikator */}
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 text-white hover:bg-gray-900 ${
                  pathname === "/panel/indikator" && "bg-gray-900"
                }`}
              >
                <Link href="/panel/indikator">
                  <div
                    className={`block hover:cursor-pointer truncate transition duration-150 ${
                      pathname === "/panel/indikator" && "hover:text-gray-200"
                    }`}
                  >
                    <div className="flex items-center">
                      <FontAwesomeIcon
                        icon={faClipboardCheck}
                        fixedWidth
                        className="text-indigo-600"
                      />
                      <span className="text-sm md:text-base 2xl:text-lg font-medium ml-3 duration-200">
                        Indikator
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
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
                          setSidebarExpanded(true)
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
                                  pathname.includes("materi") &&
                                  "text-indigo-500"
                                }`}
                                d="M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z"
                              />
                              <path
                                className={`fill-current text-gray-400 ${
                                  pathname.includes("materi") &&
                                  "text-indigo-300"
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
              {/* Messages */}
              {/* Tasks */}
              {/* Inbox */}
              {/* Calendar */}
              {/* Settings */}
              {/* Utility */}
            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
      </div>
    </>
  )
}

export default Sidebar
