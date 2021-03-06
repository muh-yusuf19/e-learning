import { useAuth } from "../context/AuthContext"
import { useRouter } from "next/router"
import { useState, Fragment, useEffect } from "react"
import Navbar from "../components/Navbar"
import { useSpring, animated } from "react-spring"

export default function Home() {
  const { login, currentUser } = useAuth()
  const router = useRouter()
  const styles = useSpring({
    from: {
      transform: "scale(0) rotate(90deg)",
    },
    to: {
      transform: "scale(1) rotate(0deg)",
    },
  })
  const styles2 = useSpring({
    from: {
      opacity: 0,
      transform: "translateX(30%)",
    },
    to: {
      opacity: 1,
      transform: "translateX(0%)",
    },
    delay: 150,
  })

  useEffect(() => {
    if (currentUser) {
      router.push("/panel")
    }
  }, [currentUser])

  return (
    <>
      <div className="font-nunito relative h-screen bg-indigo-400 w-full flex flex-col overflow-x-hidden">
        <div className="absolute inset-0">
          <img src="/image/bg01.png" className="w-full h-full object-cover" />
        </div>

        {/* Navbar */}
        <Navbar />

        {/* Hero */}
        <div className="z-10 my-auto flex flex-col xl:flex-row px-4 xl:px-8 items-center">
          <animated.div style={styles} className="flex justify-center">
            <img src="/image/asset01-01.png" className="object-cover" alt="" />
          </animated.div>
          <animated.div
            style={styles2}
            className="text-center xl:text-left text-white"
          >
            <h1 className="tracking-wider font-bold text-lg md:text-3xl uppercase">
              Selamat datang di website kimia
            </h1>
            <h1 className="tracking-wider font-bold text-lg md:text-3xl text-indigo-800 uppercase mb-6">
              Materi asam basa
            </h1>
            <p className="text-sm md:text-lg mb-6">
              Website kimia berbasis Multiple Level Representation (MLR) sebagai
              sumber belajar untuk SMA/MA
            </p>

            <button
              onClick={login}
              className="px-6 py-2 bg-indigo-800 text-xs md:text-base text-white font-bold rounded-full hover:-translate-y-2 transform transition hover:bg-indigo-600"
            >
              Login
            </button>
          </animated.div>
        </div>
      </div>
    </>
  )
}
