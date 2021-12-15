import { useState } from "react"
import Header from "../../components/Header"
import Navbar from "../../components/Navbar"
import Sidebar from "../../components/Sidebar"
import Wave from "../../components/Wave"

const kikd = () => {
  const [sidebarOpen, setSidebarOpen] = useState()

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* Header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="relative flex flex-col justify-start items-center w-full h-full px-2 md:px-4 lg:px-12 py-4 md:py-8 gap-4 xl:gap-12">
          {/* Page Title */}
          <div className="bg-white px-4 py-2 z-10 rounded-lg shadow-lg">
            <h1 className="z-10 text-indigo-800 text-center font-bold text-lg md:text-2xl uppercase">
              Standar Kompetensi (SK) & Kompetensi Dasar (KD)
            </h1>
          </div>

          {/* Content 1 */}
          <div className="z-10 flex flex-col md:flex-row items-start justify-center gap-6 md:gap-12">
            <div className="bg-white text-indigo-800 rounded-lg p-4 shadow-lg">
              <h1 className="font-bold text-center text-lg md:text-2xl">
                Standar Kompetensi (SK)
              </h1>
              <div className="flex flex-row gap-4 py-4 text-sm md:text-base">
                <p className="text-center">3.10</p>
                <p className="text-left">
                  Menjelaskan konsep asam dan basa serta kekuatannya dan
                  kesetimbangan pengionannya dalam larutan
                </p>
              </div>
              <div className="flex flex-row gap-4 py-4 text-sm md:text-base">
                <p className="text-center">4.10</p>
                <p className="text-left">
                  Menganalisis trayek perubahan pH beberapa indikator yang
                  diekstrak dari bahan alam melalui percobaan.
                </p>
              </div>
            </div>
            <div className="bg-indigo-800 text-white rounded-lg p-4 filter drop-shadow-lg">
              <h1 className="font-bold text-center text-lg md:text-2xl">
                Kompetensi Dasar (KD)
              </h1>
              <div className="flex flex-row gap-4 py-4 text-sm md:text-base">
                <p className="text-center">3.10.1</p>
                <p className="text-left">
                  Membedakan konsep asam basa menurut arhenius, bronsted lowry
                  dan lewis.
                </p>
              </div>
              <div className="flex flex-row gap-4 py-4 text-sm md:text-base">
                <p className="text-center">3.10.2</p>
                <p className="text-left">
                  Membedakan indicator universal dan indikator alami untuk
                  identifikasi asam basa.
                </p>
              </div>
              <div className="flex flex-row gap-4 py-4 text-sm md:text-base">
                <p className="text-center">3.10.3</p>
                <p className="text-left">
                  Menentukan tingkat keasaman (pH) larutan asam atau basa kuat
                  dan asam
                </p>
              </div>
              <div className="flex flex-row gap-4 py-4 text-sm md:text-base">
                <p className="text-center">3.10.4</p>
                <p className="text-left">
                  atau basa lemah dari data konsentrasi. Menghitung derajat
                  ionisasi (α) larutan asam dan basa.
                </p>
              </div>
              <div className="flex flex-row gap-4 py-4 text-sm md:text-base">
                <p className="text-center">4.10.1</p>
                <p className="text-left">
                  Menentukan sifat asam basa suatu larutan berdasarkan indicator
                  alami.
                </p>
              </div>
              <div className="flex flex-row gap-4 py-4 text-sm md:text-base">
                <p className="text-center">4.10.2</p>
                <p className="text-left">
                  Menentukan trayek perubahan pH asam basa berdasarkan indicator
                  universal
                </p>
              </div>
            </div>
          </div>

          {/* Wave */}
          <div className="z-0 absolute top-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#3730a3"
                fillOpacity="1"
                d="M0,224L40,229.3C80,235,160,245,240,245.3C320,245,400,235,480,218.7C560,203,640,181,720,186.7C800,192,880,224,960,240C1040,256,1120,256,1200,266.7C1280,277,1360,299,1400,309.3L1440,320L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
              ></path>
            </svg>
          </div>

          {/* Watermark */}
          <div className="z-5 absolute top-0 right-0 opacity-25">
            <img src="/image/logo2.png" className="w-full md:w-1/4 " />
          </div>
        </div>
      </div>
    </div>
  )
}

export default kikd
