import { useState } from "react"
import { SRLWrapper } from "simple-react-lightbox"
import Header from "../../../components/Header"
import Sidebar from "../../../components/Sidebar"
import Wave from "../../../components/Wave"

const teoribronstedlowry = () => {
  const [sidebarOpen, setSidebarOpen] = useState()
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content Area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* Header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="relative flex-auto flex flex-col justify-center items-center w-full px-2 md:px-4 lg:px-12 py-4 md:py-12 gap-4 xl:gap-12">
            <div className="bg-white px-4 py-2 z-10 rounded-lg shadow-lg">
              <h1 className="z-10 text-indigo-800 text-center font-bold text-lg md:text-2xl uppercase">
                Materi Asam Basa
                <br />
                Teori Asam Basa
              </h1>
            </div>

            {/* Content 1 */}
            <div className="bg-white p-6 z-10 rounded-lg shadow-lg">
              <h1 className="font-bold text-xl tracking-wider">
                Teori Asam Basa
              </h1>
              <p>Teori Asam Basa Bronsted-Lowry</p>

              <div className="flex flex-col items-center xl:items-center justify-left">
                <img
                  src="/image/bronsted-lowry.jpg"
                  className="float-left bg-white rounded-lg shadow-lg w-full md:w-1/3 mr-6"
                  alt=""
                />
                <p className="text-sm md:text-base text-justify pb-4">
                  Johannes N. Bronsted adalah seorang ahli kimia dari Denmark.
                  Teori asam basa yang lebih luas, tidak hanya terbatas pada
                  senyawa asam basa dalam pelarut air dikemukakan oleh Johannes
                  N. Bronsted dan Thomas M. Lowry yang bekerja secara terpisah
                  pada tahun 1923. Keduanya menyatakan bahwa reaksi asam basa
                  melibatkan transfer proton (H<sup>+</sup>). Teori ini bisa
                  menjelaskan sifat asam basa larutan dengan jenis pelarut yang
                  bermacam-macam.
                  <strong>
                    Bronsted-lowry menjelaskan basa adalah spesi (ion atau
                    molekul) yang dapat memberikan ion H<sup>+</sup> (donor
                    proton), sedangkan basa adalah spsesi yang dapat menerima
                    ion H<sup>+</sup> (akseptor proton).
                  </strong>
                  H<sub>2</sub>O adalah asam karena H<sub>2</sub>O mendonasikan
                  sebuah proton (ion hidrogen) ke amonia. Amonia adalah basa
                  karena amonia menerima sebuah proton dari air. H<sub>2</sub>O
                  adalah asam dan OH<sup>-</sup> adalah pasangan basa
                  konjugasinya dan NH<sub>3</sub> adalah basa dan NH<sub>4</sub>
                  <sup>+</sup> adalah pasangan asam konjugasinya. Berikut contoh
                  penjelaskan sifat asam dan basa suatu larutan.
                </p>
                <SRLWrapper>
                  <div className="w-full float-left hover:cursor-pointer">
                    <img src="/image/h20.jpg" className="" />
                  </div>
                </SRLWrapper>
                <div className="w-full pb-4">
                  <p className="text-sm md:text-base text-start pb-4">
                    Dari peristiwa transfer proton tersebut maka masing-masing
                    larutan dapat dijelaskan sifat asam dan basanya sebagai
                    berikut:
                  </p>
                  <div className="flex flex-row items-center justify-center gap-2">
                    <div className="flex flex-col">
                      <p className="text-sm md:text-base text-justify pb-4">
                        H<sub>2</sub>O<sub>(ag)</sub>
                        <span className="ml-2 text-xl">+</span>
                      </p>
                      <p className="text-sm md:text-base text-justify pb-4">
                        Asam 1
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm md:text-base text-justify pb-4">
                        NH<sub>2(ag)</sub>
                        <span className="ml-2 text-xl">&#8596;</span>
                      </p>
                      <p className="text-sm md:text-base text-justify pb-4">
                        Basa 1
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm md:text-base text-justify pb-4">
                        OH<sup>-</sup>
                        <sub>(ag)</sub>
                        <span className="ml-2 text-xl">+</span>
                      </p>
                      <p className="text-sm md:text-base text-justify pb-4">
                        Asam 2
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm md:text-base text-justify pb-4">
                        OH<sup>-</sup>
                        <sub>(ag)</sub>
                        <span className="ml-2 text-xl">+</span>
                      </p>
                      <p className="text-sm md:text-base text-justify pb-4">
                        Asam 2
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm md:text-base text-justify pb-4">
                        NH
                        <sub>4</sub>
                        <sup>-</sup>
                        <span className="opacity-0 ml-2 text-xl">+</span>
                      </p>
                      <p className="text-sm md:text-base text-justify pb-4">
                        Asam 2
                      </p>
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-justify pb-4">
                    H<sub>2</sub>O bersifat asam karena memberikan ion H
                    <sup>+</sup> pada molekul NH<sub>3</sub>, kemudian NH
                    <sub>3</sub> bersifat basa karena menerima ion H<sup>+</sup>{" "}
                    dari H<sub>2</sub>O.
                  </p>
                  <p className="text-sm md:text-base text-justify">
                    NH<sub>4</sub>
                    <sup>+</sup>adalah basa konjugasi dari NH<sub>3</sub>,
                    berikut reaksi penjelasannya: <br />
                    Asam dan basa konjugasi atau basa dan asam konjugasi disebut
                    sebagai pasangan asam basa konjugasi. Garis hubung berikut
                    menunjukkan pasangan asam basa konjugasi
                  </p>
                </div>

                <SRLWrapper>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-auto w-full md:w-1/3 p-2 bg-white rounded-lg shadow-lg hover:cursor-pointer">
                      <img src="/image/konjugasi1.png" className="w-full" />
                    </div>
                    <div className="flex-auto w-full md:w-1/3 p-2 bg-white rounded-lg shadow-lg hover:cursor-pointer">
                      <img
                        src="/image/konjugasi2.jpg"
                        className="flex-auto w-full"
                      />
                    </div>
                  </div>
                </SRLWrapper>
              </div>
            </div>

            {/* Content 5 */}
            <div className="bg-white p-6 z-10 rounded-lg shadow-lg w-full">
              <p className="text-sm md:text-base text-justify pb-4 font-bold">
                Penjelasan Aspek <i>Multiple Level Representation</i> (MLR)
              </p>

              <div className="flex flex-wrap gap-4">
                {/* Makroskopik */}
                <div className="flex-auto my-1 w-full md:w-1/3 lg:my-4 xl:w-1/4">
                  <article className="overflow-hidden rounded-lg shadow-lg">
                    <header className="flex items-center justify-between leading-tight p-2 md:p-4 bg-blue-500 text-white">
                      <h1 className="text-sm md:text-base">
                        <a
                          className="no-underline hover:underline font-bold"
                          href="#"
                        >
                          Makroskopik
                        </a>
                      </h1>
                    </header>
                    <div className="p-2 md:p-4">
                      <p className="text-sm md:text-base text-justify pb-4">
                        Lakmus merah jika ditetesi larutan asam akan berwarna
                        merah. Lakmus biru jika ditetesi larutan asam akan
                        berwarna merah. Lakmus merah jika ditetesi larutan basa
                        akan berwarna biru. Lakmus biru jika ditetesi larutan
                        basa akan berwarna biru
                      </p>
                    </div>
                  </article>
                </div>

                {/* Submikroskopik */}
                <div className="flex-auto my-1 w-full md:w-1/3 lg:my-4 xl:w-1/4">
                  <article className="overflow-hidden rounded-lg shadow-lg">
                    <header className="flex items-center justify-between leading-tight p-2 md:p-4 bg-blue-500 text-white">
                      <h1 className="text-sm md:text-base">
                        <a
                          className="no-underline hover:underline font-bold"
                          href="#"
                        >
                          Submikroskopik
                        </a>
                      </h1>
                    </header>
                    <div className="p-2 md:p-4">
                      <p className="text-sm md:text-base text-justify pb-4">
                        Menurut Bronsted Lowry reaksi asam basa melibatkan
                        transfer proton.
                      </p>
                      <p className="text-sm md:text-base text-justify">
                        Perhatikan reaksi berikut :
                      </p>
                    </div>
                    <SRLWrapper>
                      <div className="p-4 bg-white shadow hover:cursor-pointer">
                        <img
                          alt="Placeholder"
                          className="block h-auto w-full"
                          src="/image/h20.jpg"
                        />
                      </div>
                    </SRLWrapper>
                    <div className="p-2 md:p-4">
                      <p className="text-sm md:text-base text-justify pb-4">
                        Dari reaksi di atas terlihat bahwa H<sub>2</sub>O
                        memberi 1 proton (H<sup>+</sup>) kepada NH<sub>3</sub>,
                        sehingga H2O bersifat sebagai asam dan NH3bersifat
                        sebagai basa.
                      </p>
                    </div>
                  </article>
                </div>

                {/* Simbolik */}
                <div className="flex-auto my-1 w-full md:w-1/3 lg:my-4 xl:w-1/4">
                  <article className="overflow-hidden rounded-lg shadow-lg">
                    <header className="flex items-center justify-between leading-tight p-2 md:p-4 bg-blue-500 text-white">
                      <h1 className="text-sm md:text-base">
                        <a
                          className="no-underline hover:underline font-bold"
                          href="#"
                        >
                          Simbolik
                        </a>
                      </h1>
                    </header>
                    <div className="p-2 md:p-4">
                      <p className="text-sm md:text-base text-justify pb-4">
                        H2O adalah asam karena H2O mendonasikan sebuah proton
                        (ion hidrogen) ke amonia. Amonia adalah basa karena
                        amonia menerima sebuah proton dari air. H<sub>2</sub>O
                        adalah asam dan OH<sup>-</sup> adalah pasangan basa
                        konjugasinya dan NH<sub>3</sub> adalah basa dan NH
                        <sub>4</sub>
                        <sup>+</sup> adalah pasangan asam konjugasinya. Berikut
                        contoh penjelaskan sifat asam dan basa menurut
                      </p>
                    </div>
                    <SRLWrapper>
                      <div className="p-4 bg-white shadow hover:cursor-pointer">
                        <img
                          alt="Placeholder"
                          className="block h-auto w-full"
                          src="/image/konjugasi1.png"
                        />
                      </div>
                      <div className="p-4 bg-white shadow hover:cursor-pointer">
                        <img
                          alt="Placeholder"
                          className="block h-auto w-full"
                          src="/image/konjugasi2.jpg"
                        />
                      </div>
                    </SRLWrapper>
                  </article>
                </div>
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

export default teoribronstedlowry
