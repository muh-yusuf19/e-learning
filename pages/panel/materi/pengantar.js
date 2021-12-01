import { useState } from "react"
import { SRLWrapper } from "simple-react-lightbox"
import Header from "../../../components/Header"
import Sidebar from "../../../components/Sidebar"

const pengantar = () => {
  const [sidebarOpen, setSidebarOpen] = useState()

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* Header */}
        <Header />
        <main>
          <div className="relative flex flex-col justify-center items-center w-full h-full px-2 md:px-4 lg:px-12 py-4 md:py-12 gap-4 xl:gap-12">
            {/* Page Title */}
            <div className="bg-white px-4 py-2 z-10 rounded-lg shadow-lg">
              <h1 className="z-10 text-indigo-800 text-center font-bold text-lg md:text-2xl uppercase">
                Materi Asam Basa
                <br />
                Pengantar
              </h1>
            </div>

            {/* Content 1 */}
            <div className="bg-white p-6 z-10 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 xl:gap-8">
                <div className="xl:col-span-2">
                  <SRLWrapper>
                    <img
                      src="/image/petakonsep.png"
                      className="object-contain rounded-lg shadow-lg p-4"
                    />
                  </SRLWrapper>
                </div>
                <div className="text-gray-700">
                  <p className="text-sm md:text-base text-justify py-4">
                    Istilah <strong>asam</strong> berasal dari kata Latin acidus
                    (asam), yang berkaitan dengan kata acer (tajam) dan acetum
                    (cuka). Cuka adalah larutan air dari asam asetat. Sedangkan
                    istilah alkali (basa) berasal dari bahasa Arab al-qali,
                    yaitu abu dari suatu tanaman yang berkaitan dengan daerah
                    rawa garam dan padang pasir. Sebelumnya, sumber kata dari
                    basa adalah abu hasil pembakaran kayu. Sudah lama diketahui
                    sifat yang mencolok bahwa <strong>asam dan basa </strong>
                    dapat <strong>saling menetralkan </strong>
                    dan membentuk senyawa yang disebut <strong>garam</strong>.
                    Sifat yang berkaitan erat dengan asam adalah rasanya asam,
                    rasa seperti ditusuk jarum apabila terkena kulit,
                    kemampuannya melarutkan sebagian besar logam, dan
                    kemampuannya melarutkan batu kapur dan mineral karbonat
                    lainnya. Basa memiliki rasa pahit dan licin, sifat dasar
                    basa banyak ditemukan pada sabun dan zat pembersih peralatan
                    rumah tangga lainnya. Baik asam maupun basa memiliki
                    kemampuan untuk mempengaruhi warna dari unsur pokok tanaman
                    tertentu. Misal, lakmus yang berasal dari sebangsa tumbuhan
                    lumut, berwarna merah dalam larutan asam, tetapi biru dalam
                    larutan basa. Beberapa teori yang mencoba menjelaskan
                    tentang asam basa diantaranya Antoine Lavoisier (1777) yang
                    mengemukakan bahwa semua asam mengandung oksigen. Pada tahun
                    1810, Humphry Davy mengemukakan bahwa unsur dalam asam bukan
                    oksigen tetapi <strong>hidrogen</strong>, yang ditunjukkan
                    oleh asam hidrokhlorik yang mengandung hanya atom H dan Cl
                    tanpa ada O.
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
        </main>
      </div>
    </div>
  )
}

export default pengantar
