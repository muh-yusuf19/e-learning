import Head from "next/head"
import Navbar from "../components/Navbar"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start">
      <Navbar />
      <div className="relative flex-auto w-full flex flex-col xl:flex-row justify-center items-center px-6 py-4 md:py-6 lg:px-12 gap-6 md:gap-12">
        <img
          src="/image/asset1.png"
          className="z-10 flex-auto w-full "
          alt=""
        />
        <div className="z-10 flex-auto w-full xl:w-1/3 font-quicksand lg:px-12">
          <h1 className="tracking-wider font-bold text-xl md:text-3xl uppercase">
            Selamat datang di website kimia
          </h1>
          <h1 className="tracking-wider font-bold text-xl md:text-3xl text-blue-600 uppercase mb-6">
            Materi asam basa
          </h1>
          <p className="text-sm md:text-lg mb-6">
            Website Kimia berbasis Multiple Level Representation (MLR) Sebagai
            sumber belajar untuk SMA/MA
          </p>

          <Link href="/panel">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:-translate-y-2 hover:bg-blue-400 transform transition">
              Login
            </button>
          </Link>
        </div>

        <div className="z-0 absolute top-0 right-0 opacity-25">
          <img src="/image/logo2.png" className="w-1/3 " />
        </div>
      </div>
    </div>
  )
}
