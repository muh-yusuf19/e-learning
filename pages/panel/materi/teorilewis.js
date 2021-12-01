import { useState } from "react"
import { SRLWrapper } from "simple-react-lightbox"
import Header from "../../../components/Header"
import Sidebar from "../../../components/Sidebar"
import Wave from "../../../components/Wave"

const teorilewis = () => {
  const [sidebarOpen, setSidebarOpen] = useState()

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* Header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="relative flex-auto flex flex-col justify-center items-center w-full px-2 md:px-4 lg:px-12 py-4 md:py-12 gap-4 xl:gap-12">
            {/* Page title */}
            <div className="bg-white px-4 py-2 z-10 rounded-lg shadow-lg">
              <h1 className="z-10 text-indigo-800 text-center font-bold text-lg md:text-2xl uppercase">
                Materi Asam Basa
                <br />
                Teori Asam Basa
              </h1>
            </div>

            {/* Content 1 */}
            <div className="bg-white p-6 z-10 rounded-lg shadow-lg">
              <h1 className="font-bold text-xl tracking-wider mb-4">
                Teori Asam Basa Lewis
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                <div className="aspect-w-1 aspect-h-1 md:aspect-w-2 md:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src="/image/lewis.jpg"
                    className="rounded-lg shadow-lg"
                    alt=""
                  />
                </div>
                <div className="xl:col-span-3">
                  <p className="text-sm md:text-base text-justify pb-4">
                    G. N. Lewis mengemukakan teori asam basa yang lebih luas
                    dibanding kedua teori sebelumnya dengan menekankan pada
                    pasangan elektron yang berkaitan dengan struktur dan ikatan.
                    Menurut definisi asam basa Lewis,{" "}
                    <strong>
                      asam adalah akseptor pasangan elektron, sedangkan basa
                      adalah donor pasangan elektron.
                    </strong>{" "}
                    Sebagai contoh, reaksi antara BF<sub>3</sub> dan NH
                    <sub>3</sub> merupakan reaksi asam–basa, di mana BF
                    <sub>3</sub> sebagai asam Lewis dan NH<sub>3</sub> sebagai
                    basa Lewis. NH<sub>3</sub> memberikan pasangan elektron
                    kepada BF<sub>3</sub> sehingga membentuk ikatan kovalen
                    koordinasi antara keduanya. Kelebihan definisi asam basa
                    Lewis adalah dapat menjelaskan reaksi-reaksi asam–basa lain
                    dalam fase padat, gas, dan medium pelarut selain air yang
                    tidak melibatkan transfer proton.
                  </p>
                </div>
              </div>
            </div>

            {/* Content 2 */}
            <div className="bg-white p-6 z-10 rounded-lg shadow-lg w-full">
              <p className="text-sm md:text-base text-justify">
                Berikut contoh penjelaskan sifat asam dan basa menurut Lewis,
              </p>
              <SRLWrapper>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="aspect-w-2 aspect-h-1">
                    <img
                      src="/image/lewis1.jpg"
                      className="object-contain rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="aspect-w-3 aspect-h-1">
                    <img
                      src="/image/lewis2.jpg"
                      className="object-contain rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </SRLWrapper>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4 xl:mt-10">
                {/* Makroskropik */}
                <article className="overflow-hidden rounded-lg shadow-lg">
                  <header className="flex items-center justify-between leading-tight p-2 md:p-4 bg-indigo-800 text-white">
                    <h1 className="text-sm md:text-base font-bold">
                      Makroskopik
                    </h1>
                  </header>
                  <div className="p-2 md:p-4">
                    <p className="text-sm md:text-base text-justify pb-4">
                      Lakmus merah jika ditetesi larutan asam akan berwarna
                      merah. Lakmus biru jika ditetesi larutan asam akan
                      berwarna merah. Lakmus merah jika ditetesi larutan basa
                      akan berwarna biru. Lakmus biru jika ditetesi larutan basa
                      akan berwarna biru
                    </p>
                  </div>
                </article>

                {/* Submikroskopik */}
                <article className="overflow-hidden rounded-lg shadow-lg">
                  <header className="flex items-center justify-between leading-tight p-2 md:p-4 bg-indigo-800 text-white">
                    <h1 className="text-sm md:text-base font-bold">
                      Submikroskopik
                    </h1>
                  </header>
                  <div className="p-2 md:p-4">
                    <p className="text-sm md:text-base text-justify">
                      Ikatan kimia baru dibentuk dengan menggunakan pasangan
                      elektron dari basa Lewis. Ikatan kimia yg terbentuk :
                      ikatan kovalen koordinasi. Contoh : Reaksi boron
                      trifluorida dengan amonia
                    </p>
                  </div>
                  <div className="bg-white aspect-w-2 aspect-h-1">
                    <img
                      className="object-contain rounded-lg p-2"
                      src="/image/lewis3.png"
                    />
                  </div>
                </article>

                {/* Simbolik */}
                <article className="overflow-hidden rounded-lg shadow-lg">
                  <header className="flex items-center justify-between leading-tight p-2 md:p-4 bg-indigo-800 text-white">
                    <h1 className="text-sm md:text-base font-bold">Simbolik</h1>
                  </header>
                  <div className="p-2 md:p-4">
                    <p className="text-sm md:text-base text-justify">
                      NH<sub>3</sub> merupakan basa karena bisa memberikan 1
                      pasang elektron terhadap BF<sub>3</sub> untuk digunakan
                      secara bersama dalam senyawa NH<sub>3</sub>BF<sub>3</sub>,
                      sehingga BF3 bersifat asam. Reaksi antara boron
                      trifluorida dengan amonia diilustrasikan dalam Gambar
                      berikut
                    </p>
                  </div>
                  <div className="bg-white aspect-w-2 aspect-h-1">
                    <img
                      className="object-contain rounded-lg"
                      src="/image/lewis1.jpg"
                    />
                  </div>
                  <div className="bg-white aspect-w-3 aspect-h-1 mt-4">
                    <img
                      className="object-contain rounded-lg p-2"
                      src="/image/lewis2.jpg"
                    />
                  </div>
                </article>
              </div>
            </div>

            {/* Wave */}
            <Wave />

            {/* Watermark */}
            <div className="z-5 absolute top-0 right-0 opacity-25">
              <img src="/image/logo2.png" className="w-full md:w-1/4 " />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default teorilewis
