import Navbar from "../components/Navbar"

const pendahuluan = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start">
      <Navbar />
      <div className="flex-auto flex flex-col justify-center gap-10 items-center w-full px-6 py-4 md:py-12 lg:px-12 gap-4 md:gap-12">
        <h1 className="text-gray-600 text-center font-bold text-lg md:text-2xl uppercase">
          Pendahuluan
        </h1>
        <hr className="bg-gray-600 w-3/4" />
        <div className="flex flex-col md:flex-row items-start justify-center gap-6 md:gap-12">
          <div className="bg-white text-blue-500 rounded-lg p-4 shadow-lg">
            <h1 className="font-bold text-center text-lg md:text-2xl">
              Standar Kompetensi (SK)
            </h1>
            <div className="flex flex-row gap-4 py-4 text-sm md:text-lg">
              <p className="text-center">3.10</p>
              <p className="text-left">
                Menjelaskan konsep asam dan basa serta kekuatannya dan
                kesetimbangan pengionannya dalam larutan
              </p>
            </div>
            <div className="flex flex-row gap-4 py-4 text-sm md:text-lg">
              <p className="text-center">4.10</p>
              <p className="text-left">
                Menganalisis trayek perubahan pH beberapa indikator yang
                diekstrak dari bahan alam melalui percobaan.
              </p>
            </div>
          </div>
          <div className="bg-blue-500 text-white rounded-lg p-4 filter drop-shadow-lg">
            <h1 className="font-bold text-center text-lg md:text-2xl">
              Kompetensi Dasar (KD)
            </h1>
            <div className="flex flex-row gap-4 py-4 text-sm md:text-lg">
              <p className="text-center">3.10.1</p>
              <p className="text-left">
                Membedakan konsep asam basa menurut arhenius, bronsted lowry dan
                lewis.
              </p>
            </div>
            <div className="flex flex-row gap-4 py-4 text-sm md:text-lg">
              <p className="text-center">3.10.2</p>
              <p className="text-left">
                Membedakan indicator universal dan indikator alami untuk
                identifikasi asam basa.
              </p>
            </div>
            <div className="flex flex-row gap-4 py-4 text-sm md:text-lg">
              <p className="text-center">3.10.3</p>
              <p className="text-left">
                Menentukan tingkat keasaman (pH) larutan asam atau basa kuat dan
                asam
              </p>
            </div>
            <div className="flex flex-row gap-4 py-4 text-sm md:text-lg">
              <p className="text-center">3.10.4</p>
              <p className="text-left">
                atau basa lemah dari data konsentrasi. Menghitung derajat
                ionisasi (α) larutan asam dan basa.
              </p>
            </div>
            <div className="flex flex-row gap-4 py-4 text-sm md:text-lg">
              <p className="text-center">4.10.1</p>
              <p className="text-left">
                Menentukan sifat asam basa suatu larutan berdasarkan indicator
                alami.
              </p>
            </div>
            <div className="flex flex-row gap-4 py-4 text-sm md:text-lg">
              <p className="text-center">4.10.2</p>
              <p className="text-left">
                Menentukan trayek perubahan pH asam basa berdasarkan indicator
                universal
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default pendahuluan
