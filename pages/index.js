import Navbar from "../components/Navbar"
import Link from "next/link"
import { useAuth } from "../context/AuthContext"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function Home() {
  const { login, currentUser } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (currentUser) {
      router.push("/panel")
    }
  }, [currentUser])

  return (
    <div className="min-h-screen w-full h-full flex flex-col items-center justify-start">
      <Navbar />
      <div className="flex-auto grid grid-cols-1 md:grid-cols-2">
        <div className="my-auto">
          <img
            src="/image/asset1.png"
            className="z-10 flex-auto w-full "
            alt=""
          />
        </div>
        <div className="z-10 my-auto px-6 lg:px-12">
          <h1 className="tracking-wider font-bold text-xl md:text-3xl text-gray-700 uppercase">
            Selamat datang di website kimia
          </h1>
          <h1 className="tracking-wider font-bold text-xl md:text-3xl text-indigo-800 uppercase mb-6">
            Materi asam basa
          </h1>
          <p className="text-sm md:text-lg mb-6">
            Website Kimia berbasis Multiple Level Representation (MLR) Sebagai
            sumber belajar untuk SMA/MA
          </p>

          <button
            onClick={login}
            className="px-4 py-2 bg-indigo-800 text-white rounded-lg hover:-translate-y-2 hover:bg-indigo-600 transform transition"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}
