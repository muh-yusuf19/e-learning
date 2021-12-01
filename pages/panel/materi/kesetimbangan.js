import { useState } from "react"
import Header from "../../../components/Header"
import Sidebar from "../../../components/Sidebar"
import Wave from "../../../components/Wave"

const kesetimbangan = () => {
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
                Kesetimbangan ion dalam larutan asam dan basa
              </h1>
            </div>

            {/* Content 1 */}
            <div className="bg-white p-6 z-10 rounded-lg shadow-lg w-full">
              <p className="text-sm md:text-base text-justify pb-4">
                Asam cuka adalah bahan yang bisa ditambahkan pada makanan
                tertentu untuk mendapatkan rasa masam, misalnya pada acar
                mentimun. Mengapa asam cuka tidak boleh digantikan dengan asam
                lain misalnya asam klorida (air keras) padahal sama-sama
                bersifat asam. Iya, masyarakat sudah tahu bahwa air keras sangat
                berbahaya karena merusak jaringan kulit. Hal lain yang juga
                tidak mungkin terjadi yaitu mengisi akki dengan larutan asam
                cuka, karena asam cuka merupakan elektrolit dengan kekuatan daya
                hantar listrik sangat rendah. Masih ingatkah apa yang
                menyebabkan kekuatan daya hantar listrik dari suatu larutan?
                Kekuatan daya hantar listrik sebanding dengan jumlah ion-ion
                yang bergerak bebas dalam larutan tersebut. Pokok bahasan ini
                akan memaparkan air sebagai pelarut murni, pengaruh penambahan
                zat asam atau zat basa sehingga membentuk larutan asam atau basa
                dengan kekuatan daya hantar listrik tertentu. Kekuatan daya
                hantar listrik larutan asam basa untuk selanjutnya diistilahkan
                dengan kekuatan asam atau basanya.
              </p>
            </div>

            {/* Content 2 */}
            <div className="bg-white p-6 z-10 rounded-lg shadow-lg w-full">
              <h1 className="font-bold text-lg md:text-xl">Ionisasi air</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 md:mt-8">
                <div className="aspect-w-1 aspect-h-1">
                  <img src="/image/kesetimbangan1.png" />
                </div>
                <div className="aspect-w-1 aspect-h-1">
                  <img src="/image/kesetimbangan2.png" />
                </div>
              </div>
              <p className="text-sm md:text-base text-justify pt-4">
                Air murni termasuk nonelektrolit, meskipun demikian ada juga
                yang terionisasi, tetapi konsentrasinya sangat rendah, dan dapat
                dideteksi melalui pengukuran konduktivitas listrik. Ion-ion ini
                hanya dapat terjadi karena ionisasi molekul-molekul air itu
                sendiri (self-ionization). Menurut teori Arrhenius, dapat
                dituliskan:
                <br />H<sub>2</sub>O ⇄ H<sup>+</sup> + OH<sup>–</sup>
              </p>
            </div>

            {/* Content 3 */}
            <div className="bg-white p-6 z-10 rounded-lg shadow-lg w-full">
              <p className="text-sm md:text-base text-justify pt-4">
                Pada teori Brønsted – Lowry, proses ionisasi melibatkan
                pemberian proton dari satu molekul air kepada molekul air
                lainnya. Jadi, satu molekul air bertindak sebagai asam dan
                molekul lainnya bertindak sebagai basa. Hasilnya adalah ion
                hidronium, H3O<sup>+</sup> (<strong>konjugat asam</strong>), dan
                ion hidroksida, OH<sup>-</sup>(<strong>konjugat basa</strong>).
                Reaksi ini <i>reversible</i>, dan pada reaksi kebalikannya H3O
                <sup>+</sup>
                memberikan proton kepada OH<sup>-</sup>. Pada kenyataannya,
                reaksi kebalikannya jauh lebih berarti dibandingkan dengan
                reaksi ke kanan.{" "}
                <strong>Kesetimbangan lebih ke arah kiri</strong>. Dapat
                dikatakan bahwa asam (2) dan basa (1) <strong>jauh</strong>{" "}
                lebih kuat dibandingkan dengan asam (1) dan basa (2).
              </p>

              <div className="col-span-2">
                <img src="/image/kesetimbangan3.jpg" />
              </div>
              <p className="text-sm md:text-base text-justify pt-4">
                Kesetimbangan dalam <i>self-ionisasi</i> air dapat dinyatakan
                dengan tetapan kesetimbangan yang melibatkan konsentrasi H3O
                <sup>+</sup> dan OH<sup>-</sup>, akan tetapi tidak melibatkan
                air itu sendiri. <br />K = [H3O<sup>+</sup>] [OH<sup>-</sup>]{" "}
                <br />
                Untuk air murni, konsentrasi H3O<sup>+</sup> dan OH
                <sup>-</sup> adalah sama. Pada 25°C dalam air murni : <br />
                [H3O
                <sup>+</sup>] = [OH<sup>-</sup>] = 1,0 x 10<sup>–7</sup> M
                <br />
                Tetapan kesetimbangan untuk <i>self-ionisasi</i> air disebut{" "}
                <strong>hasil kali ion dari air</strong>, dan dinyatakan sebagai{" "}
                <strong>Kw</strong>. Pada 25°C, <br />
                Kw = [H3O
                <sup>+</sup>][OH<sup>-</sup>] = 1,0 x 10–14 M <br />
                Seperti tetapan kesetimbangan lainnya, hasil kali ion dari air
                bervariasi dengan temperatur. Pada 60°C, Kw = 9,6 x 10
                <sup>–14</sup> dan pada 100°C, Kw = 5,5 x 10<sup>–13</sup>.
                Pernyataan Kw di atas berlaku untuk semua larutan air, tidak
                hanya air murni.
              </p>
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

export default kesetimbangan
