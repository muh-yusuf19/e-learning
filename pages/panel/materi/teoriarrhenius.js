import React, { useState } from "react"
import { SRLWrapper } from "simple-react-lightbox"
import Header from "../../../components/Header"
import Sidebar from "../../../components/Sidebar"
import Table1 from "../../../components/Table1"
import Table2 from "../../../components/Table2"
import Wave from "../../../components/Wave"

const teoriarrhenius = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content Area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* Header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="text-gray-700">
          <div className="relative flex-auto flex flex-col justify-center gap-10 items-center w-full px-2 py-4 md:py-12 lg:px-12 gap-4 md:gap-12">
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
                Teori Asam Basa Arrheinus
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src="/image/august.jpg"
                    className="rounded-lg shadow-lg"
                    alt=""
                  />
                </div>
                <div className="xl:col-span-3">
                  <p className="text-sm md:text-base text-justify pb-4">
                    Svante August Arrhenius ( 1859 – 1927 ) dari swedia pada
                    tahun 1887 mengemukakan teori ion untuk menjelaskan mengapa
                    larutan zat- zat dalam air dapat menghantarkan arus listrik.
                    Arrhenius menemukan bahwa zat-zat tertentu jika dilarutkan
                    dalam air akan terurai menjadi bagian-bagian yang bermuatan
                    listrik. Karena zat-zat itu sebelum dilarutkan tidak
                    menghantarkan arus listrik (netral), maka jumlah muatan
                    positif zat itu sebelum dilarutkan harus sama dengan jumlah
                    muatan negatif. Partikel yang bermuatan listrik disebut ion
                    (menurut bahasa yunani artinya pengembara), sebab ion bebas
                    bergerak dalam larutan. Ion positif disebut kation sedangkan
                    ion negatif disebut anion. Adapun peristiwa terurainya
                    zat-zat dalam air disebut ionisasi, dan zat-zat yang dalam
                    air dapat terurai menjadi ion-ion disebut elektrolit
                    (penghantar arus listrik). Asam Basa termasuk ke dalam
                    golongan zat elektrolit.{" "}
                    <strong>
                      Arrhenius menjelaskan asam merupakan zat yang dalam air
                      dapat melepaskan ion hidrogen (H+). Sedangkan basa
                      merupakan zat yang di dalam air dapat melepaskan ion
                      hidroksida (OH)
                    </strong>
                  </p>
                </div>
              </div>
            </div>

            {/* content 2 */}
            <div className="bg-white p-6 z-10 rounded-lg shadow-lg">
              <SRLWrapper>
                <div className="flex flex-col md:flex-row gap-12 mb-8">
                  <div className="flex flex-col">
                    <p className="text-sm md:text-base text-justify pb-4">
                      Contoh asam menurut Arrhenius adalah asam klorida (HCl).
                      Asam klorida dalam air akan terurai menjadi ion hidronium
                      dan ion klorida. Reaksi ionisasi HCl disajikan dalam
                      Gambar 1.1
                    </p>
                    <img
                      src="/image/gambar1.1.png"
                      className="w-full p-6 bg-white shadow-lg"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm md:text-base text-justify pb-4">
                      Contoh basa menurut Arrhenius adalah natrium hidroksida
                      (NaOH). Natrium hidroksida dalam air akan terurai menjadi
                      ion natrium dan ion hidroksida. Reaksi ionisasi NaOH
                      disajikan dalam Gambar 1.2
                    </p>
                    <img
                      src="/image/gambar1.2.jpg"
                      className="w-full p-6 p-4 bg-white shadow-lg"
                      alt=""
                    />
                  </div>
                </div>
              </SRLWrapper>
            </div>

            {/* Content 3 */}
            <div className="bg-white p-6 z-10 rounded-lg shadow-lg">
              <div className="flex flex-col lg:flex-row justify-start items-start gap-4">
                <Table1 />
                <div className="flex-auto w-full lg:w-1/3">
                  <p className="text-sm md:text-base text-justify pb-4">
                    Jumlah ion H+ yang dapat dilepaskan oleh satu molekul asam
                    disebut <strong>valensi asam,</strong> sedangkan ion negatif
                    yang terbentuk dari asam setelah melepas ion H+ disebut ion
                    sisa asam. Nama asam sama dengan nama{" "}
                    <strong>ion sisa asam.</strong> Berbagai contoh asam dan
                    reaksi ionisasinya diberikan pada tabel 1.1 sebagai berikut.
                  </p>
                  <p className="text-sm md:text-base text-justify pt-4">
                    *)Asam hipotetis, asam yang tidak stabil, segera terurai
                    menjadi zat lain. Asam hipotetis di atas terurai menurut
                    persamaan:
                  </p>
                  <p>
                    2HNO<sub>3(ag)</sub> &#8594; H<sub>2(l)</sub> + NO
                    <sub>(g)</sub> + NO<sub>2(g)</sub>
                  </p>
                  <p>
                    H<sub>2</sub>SO<sub>3(ag)</sub> &#8594; H<sub>2</sub>O
                    <sub>(l)</sub> + CO
                    <sub>2(g)</sub>
                  </p>
                  <p>
                    H<sub>2</sub>CO<sub>3(ag)</sub> &#8594; H<sub>2</sub>O
                    <sub>(l)</sub> + SO
                    <sub>2(g)</sub>
                  </p>
                  <p className="text-sm md:text-base text-justify pt-4">
                    *Asam nonoksi adalah asam yang tidak mempunyai oksida asam.
                    Asam oksi adalah asam yang mempunyai oksida asam.
                  </p>
                  <p className="text-sm md:text-base text-justify pt-4">
                    *Asam organik adalah asam yang tergolong senyawa organik.
                    Asam organik tidak mempunyai oksida asam (Ari, 2008).
                  </p>
                </div>
              </div>
            </div>

            {/* Content 4 */}
            <div className="bg-white p-6 z-10 rounded-lg shadow-lg">
              <div className="flex flex-col lg:flex-row justify-start items-start gap-4">
                <Table2 />
                <div className="flex-auto w-full lg:w-1/3">
                  <p className="text-sm md:text-base text-justify pb-4">
                    Jumlah ion OH- yang dapat dilepaskan oleh satu molekul basa
                    disebut valensi basa. Berbagai contoh basa dan reaksi
                    ionisasinya diberikan pada tabel 1.2 sebagai berikut.
                  </p>
                  <p className="text-sm md:text-base text-justify pb-4">
                    Meskipun tidak mempunyai gugus hidroksida, larutan amonia
                    (NH3) ternyata bersifat basa. Hal itu terjadi karena NH3
                    bereaksi dengan air (mengalami hidrolisis) membentuk ion OH-
                    sebagai berikut.
                  </p>
                  <p className="text-sm md:text-base text-justify pb-4">
                    NH<sub>3(ag)</sub> + H<sub>2</sub>O<sub>(l)</sub>{" "}
                    &#8592;&#8594; NH<sub>4</sub>
                    <sup>+</sup> + OH<sup>-</sup>
                    <sub>(ag)</sub>
                  </p>
                  <p className="text-sm md:text-base text-justify pb-4">
                    Untuk menunjukkan sifat basanya, larutan NH<sub>3</sub>{" "}
                    sering ditulis sebagai NH<sub>4</sub>OH. Hal itu tidaklah
                    benar karena NH<sub>4</sub>OH tidak ditemukan, yang ada
                    hanya NH<sub>3</sub>, ion NH<sub>4</sub>
                    <sup>+</sup>, serta ion OH<sup>-</sup> Teori Asam basa
                    Arrhenius hanya dapat menjelaskan asam basa dalam pelarut
                    air saja. Teori asam basa yang dikemukakan oleh Arrhenius
                    mempunyai kelemahan untuk menjelaskan fakta-fakta baru yang
                    ditemukan, karena hanya dapat menjelaskan senyawa-senyawa
                    yang memiliki jenis rumus kimia HA untuk asam dan LOH untuk
                    basa. Teori ini tidak dapat menjelaskan bahwa CO<sub>2</sub>{" "}
                    dalam air bersifat asam atau NH
                    <sub>3</sub> dalam air bersifat basa.
                  </p>
                </div>
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
                    <header className="flex items-center justify-between leading-tight p-2 md:p-4 bg-indigo-800 text-white">
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
                    <SRLWrapper>
                      <header className="flex items-center justify-between leading-tight p-2 md:p-4 bg-indigo-800 text-white">
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
                          Menurut Arrhenius asam dalam air akan terionisasi
                          menjadi ion-ionnya, menghasilkan H<sup>+</sup>.{" "}
                        </p>
                        <p className="text-sm md:text-base text-justify">
                          Contoh :
                        </p>
                      </div>
                      <div className="p-4 bg-white shadow">
                        <img
                          alt="Placeholder"
                          className="block h-auto w-full"
                          src="/image/submikroskopik1.jpg"
                        />
                      </div>
                      <div className="p-2 md:p-4">
                        <p className="text-sm md:text-base text-justify pb-4">
                          Menurut Arrhenius basa dalam air akan terionisasi
                          menjadi ion-ionnya, menghasilkan OH<sup>-</sup>.
                        </p>
                        <p className="text-sm md:text-base text-justify">
                          Contoh :
                        </p>
                      </div>
                      <div className="p-4 bg-white shadow">
                        <img
                          alt="Placeholder"
                          className="block h-auto w-full"
                          src="/image/submikroskopik2.jpg"
                        />
                      </div>
                    </SRLWrapper>
                  </article>
                </div>

                {/* Simbolik */}
                <div className="flex-auto my-1 w-full md:w-1/3 lg:my-4 xl:w-1/4">
                  <article className="overflow-hidden rounded-lg shadow-lg">
                    <SRLWrapper>
                      <header className="flex items-center justify-between leading-tight p-2 md:p-4 bg-indigo-800 text-white">
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
                          Menurut Arrhenius asam dalam air akan terionisasi
                          menjadi ion-ionnya, menghasilkan H<sup>+</sup>.{" "}
                        </p>
                        <p className="text-sm md:text-base text-justify">
                          Contoh :
                        </p>
                      </div>
                      <div className="p-4 bg-white shadow">
                        <img
                          alt="Placeholder"
                          className="block h-auto w-full"
                          src="/image/gambar1.1.png"
                        />
                      </div>
                      <div className="p-2 md:p-4">
                        <p className="text-sm md:text-base text-justify pb-4">
                          Menurut Arrhenius basa dalam air akan terionisasi
                          menjadi ion-ionnya, menghasilkan OH<sup>-</sup>.
                        </p>
                        <p className="text-sm md:text-base text-justify">
                          Contoh :
                        </p>
                      </div>
                      <div className="p-4 bg-white shadow">
                        <img
                          alt="Placeholder"
                          className="block h-auto w-full"
                          src="/image/gambar1.2.jpg"
                        />
                      </div>
                    </SRLWrapper>
                  </article>
                </div>
              </div>
            </div>

            {/* Wafe */}
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

export default teoriarrhenius
