import { useState } from "react"
import Header from "../../components/Header"
import Sidebar from "../../components/Sidebar"

const indikator = () => {
  const [sidebarOpen, setSidebarOpen] = useState()

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="">
          <div className="relative flex flex-col justify-center items-center w-full h-full px-2 md:px-4 lg:px-12 py-4 md:py-12 gap-4 xl:gap-12">
            {/* Page Title */}
            <div className="bg-white px-4 py-2 z-10 rounded-lg shadow-lg">
              <h1 className="z-10 text-indigo-800 text-center font-bold text-lg md:text-2xl uppercase">
                Indikator Pembelajaran
              </h1>
            </div>

            {/* Content 1 */}
            <div className="z-10 gap-6 md:gap-12 w-full">
              <div className="bg-white text-indigo-800 rounded-lg p-4 shadow-lg">
                <h1 className="font-bold text-center text-lg md:text-2xl">
                  Tujuan Pembelajaran
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-6">
                  <div className="aspect-w-2 aspect-h-1">
                    <img src="/image/asset1.png" />
                  </div>
                  <div>
                    <ul>
                      <li>
                        1. Siswa mampu menjelaskan sifat asam basa senyawa
                        menurut teori asam basa.
                      </li>
                      <li>
                        2. Siswa mampu menghitung konsentrasi ion H+ dan OH
                        dalam larutan berdasarkan kesetimbangan ion dalam
                        larutan.{" "}
                      </li>
                      <li>
                        3. Siswa mampu menghitung derajat keasaman (pH) larutan
                        asam atau basa.
                      </li>
                      <li>
                        4. Siswa mampu memprediksi pH larutan asam atau basa
                        bardasarkan indikator asam basa.
                      </li>
                    </ul>
                  </div>
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
        </main>
      </div>
    </div>
  )
}

export default indikator
