import { useState } from "react"
import { SRLWrapper } from "simple-react-lightbox"
import Header from "../../../components/Header"
import Sidebar from "../../../components/Sidebar"
import Wave from "../../../components/Wave"

const derajat = () => {
  const [sidebarOpen, setSidebarOpen] = useState()

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* Header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="relative flex flex-col justify-center items-center w-full px-2 md:px-4 lg:px-12 py-4 md:py-12 gap-4 xl:gap-12">
            {/* Page Title */}
            <div className="bg-white px-4 py-2 z-10 rounded-lg shadow-lg">
              <h1 className="z-10 text-indigo-800 text-center font-bold text-lg md:text-2xl uppercase">
                Materi Asam Basa
                <br />
                Derajat Keasaman
              </h1>
            </div>

            {/* Content */}
            <div className="bg-white p-6 z-10 rounded-lg shadow-lg w-full">
              <p className="text-sm md:text-base text-justify pb-4">
                Istilah asam berasal dari bahasa Latin <i>“acetum”</i> yang
                berarti
                <i>cuka</i>. Zat utama dalam cuka adalah asam asetat. Adapun
                istilah
                <i>basa (alkali)</i> berasal dari bahasa Arab yang berarti{" "}
                <i>abu</i>. Terdapat beberapa teori yang mengemukakan pengertian
                asam basa, diantaranya teori Arrhenius, Bronsted – Lowry, dan
                Lewis. Adanya ion H<sup>+</sup> atau OH<sup>-</sup> dalam
                larutan digunakan pula untuk menerangkan derajat keasaman atau
                kebasaan larutan asam basa. Pada tahun 1909,
                <strong>
                  <i>Soren Peter Lauritz Sorensen</i>
                </strong>
                mengemukakan istilah pH (<i>power Hidrogen</i>). Angka pH suatu
                larutan menyatakan derajat atau tingkat keasaman larutan
                tersebut. Nilai pH diperoleh sebagaihasil negatif logaritma 10
                dari konsentrasi ion H<sup>+</sup>.
              </p>
              <p className="text-sm md:text-base w-max rounded-lg py-4 px-8 bg-indigo-800 text-white shadow-lg">
                pH = - log[H<sup>+</sup>]
              </p>
              <p className="text-sm md:text-base py-4">
                Adapun untuk tingkat kebasaan berlaku rumus:
              </p>
              <p className="text-sm md:text-base w-max rounded-lg py-4 px-8 bg-indigo-800 text-white shadow-lg">
                pOH = - log [OH<sup>-</sup>]
              </p>
            </div>

            {/* Content 2 */}
            <div className="bg-white p-6 z-10 rounded-lg shadow-lg w-full">
              <p className="text-sm md:text-base pb-4 font-bold">
                Hubungan pH dan pOH
              </p>
              <p className="text-sm md:text-base pb-4">
                H<sub>2</sub>O <sub>(aq)</sub> ⇌ H<sup>+</sup> <sub>(aq)</sub> +
                OH<sup>-</sup> (aq)
              </p>
              <div className="flex flex-row gap-2">
                <p> K = </p>
                <div className="flex flex-col gap-2">
                  <p className="text-sm md:text-base">
                    [H<sup>+</sup>] . [OH<sup>-</sup>]
                  </p>
                  <hr className="border-1 border-gray-700" />
                  <p className="text-sm md:text-base">
                    H<sub>2</sub>O
                  </p>
                </div>
              </div>
              <p className="text-sm md:text-base pb-4">
                K.H<sub>2</sub>O = [H<sup>+</sup>] . [OH<sup>-</sup>]
              </p>
              <p className="text-sm md:text-base w-max rounded-lg py-4 px-8 bg-indigo-800 text-white shadow-lg mb-4">
                Kw = [H<sup>+</sup>] . [OH<sup>-</sup>]
              </p>
              <p className="text-sm md:text-base pb-4">
                Kw = tetapan kesetimbangan air
              </p>
              <p className="text-sm md:text-base pb-4">
                Menurut hasil percobaan, harga Kw pada suhu 25°C adalah 10
                <sup>-14</sup>. Sehingga diperoleh:{" "}
                <strong>
                  {" "}
                  [H<sup>+</sup>] = [OH
                  <sup>-</sup>] = 10<sup>-7</sup> M{" "}
                </strong>{" "}
                <br />
                Harga Kw selalu tetap selama suhu tetap. Dengan demikian,
                hubungan antara pH dan pOH dapat dituliskan:
              </p>
              <div className="flex flex-row gap-4 mb-4">
                <p className="text-sm md:text-base w-max rounded-lg py-4 px-2 md:px-8 bg-indigo-800 text-white shadow-lg mb-4">
                  pH + pOH = 14
                </p>
                <p className="text-sm md:text-base w-max rounded-lg py-4 px-2 md:px-8 bg-indigo-800 text-white shadow-lg mb-4">
                  pH = 14 - pOH
                </p>
              </div>
              <p className="text-sm md:text-base pb-4">
                Berdasarkan nilai Kw, rentang pH suatu larutan dengan pelarut
                air adalah <i>0 sampai dengan 14</i>.
              </p>
              <ul>
                <li>pH = 7, larutan bersifat netral</li>
                <li>pH &#x0003C; 7, larutan bersifat asam</li>
                <li>pH &#x0003E; 7, larutan bersifat basa</li>
              </ul>
              <p className="text-sm md:text-base pb-4">
                Untuk mengetahui sifat asam atau basa dari suatu zat, digunakan{" "}
                <i>indikator asam basa</i>. Indikator asam basa adalah zat-zat
                warna yang dapat memperlihatkan warna berbeda dalam larutan yang
                bersifat asam dan dalam larutan yang bersifat basa.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <SRLWrapper>
                  <div className="aspect-w-1 aspect-h-1">
                    <img src="/image/derajat1.png" />
                  </div>
                </SRLWrapper>
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

export default derajat
