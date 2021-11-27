import Navbar from "../components/Navbar"

const materi = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start">
      <Navbar />
      <div className="relative flex-auto flex flex-col justify-center gap-10 items-center w-full px-6 py-4 md:py-12 lg:px-12 gap-4 md:gap-12">
        <h1 className="z-10 text-white text-center font-bold text-lg md:text-2xl uppercase">
          Materi Asam Basa
        </h1>
        {/* Content */}
        <div className="z-10 flex flex-col md:flex-row items-start justify-center gap-6 lg:gap-12">
          <div className="w-full bg-white shadow-lg rounded-lg py-4">
            <div className="text-gray-700 p-6">
              <img
                src="/image/petakonsep.png"
                className="float-left w-full md:w-1/2 p-6 bg-white rounded-lg shadow-lg md:mr-4 m-4 md:m-0"
                alt=""
              />
              <h1 className="font-bold text-2xl">Pengantar Materi</h1>
              <p className="text-sm text-justify md:text-base py-4">
                Istilah <strong>asam</strong> berasal dari kata Latin acidus
                (asam), yang berkaitan dengan kata acer (tajam) dan acetum
                (cuka). Cuka adalah larutan air dari asam asetat. Sedangkan
                istilah alkali (basa) berasal dari bahasa Arab al-qali, yaitu
                abu dari suatu tanaman yang berkaitan dengan daerah rawa garam
                dan padang pasir. Sebelumnya, sumber kata dari basa adalah abu
                hasil pembakaran kayu. Sudah lama diketahui sifat yang mencolok
                bahwa <strong>asam dan basa </strong>dapat{" "}
                <strong>saling menetralkan </strong>
                dan membentuk senyawa yang disebut <strong>garam</strong>. Sifat
                yang berkaitan erat dengan asam adalah rasanya asam, rasa
                seperti ditusuk jarum apabila terkena kulit, kemampuannya
                melarutkan sebagian besar logam, dan kemampuannya melarutkan
                batu kapur dan mineral karbonat lainnya. Basa memiliki rasa
                pahit dan licin, sifat dasar basa banyak ditemukan pada sabun
                dan zat pembersih peralatan rumah tangga lainnya. Baik asam
                maupun basa memiliki kemampuan untuk mempengaruhi warna dari
                unsur pokok tanaman tertentu. Misal, lakmus yang berasal dari
                sebangsa tumbuhan lumut, berwarna merah dalam larutan asam,
                tetapi biru dalam larutan basa. Beberapa teori yang mencoba
                menjelaskan tentang asam basa diantaranya Antoine Lavoisier
                (1777) yang mengemukakan bahwa semua asam mengandung oksigen.
                Pada tahun 1810, Humphry Davy mengemukakan bahwa unsur dalam
                asam bukan oksigen tetapi <strong>hidrogen</strong>, yang
                ditunjukkan oleh asam hidrokhlorik yang mengandung hanya atom H
                dan Cl tanpa ada O.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 z-10 rounded-lg">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia harum
            quos odit qui asperiores deserunt cupiditate. Necessitatibus
            sapiente inventore veniam vel nobis fugit ut ullam aspernatur amet.
            Enim, aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Aspernatur tempora suscipit hic exercitationem assumenda dicta
            quidem fugit. Eveniet voluptate blanditiis natus odit, quidem
            repudiandae saepe id numquam doloremque voluptatibus ipsum. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            architecto reiciendis placeat illo iure aut sit similique sint quia
            possimus, est inventore eveniet in mollitia quod natus quis
            consequuntur id. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Cum facere quidem nobis cupiditate. Deserunt, est illum!
            Natus, voluptates sunt iusto corrupti qui, dolore, fugit error
            quibusdam est laudantium repudiandae inventore! Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Facilis, velit a. Vitae modi
            labore nam minima ducimus eos harum debitis quod, ipsam optio animi
            et natus repudiandae error at recusandae.
          </p>
        </div>
        <div className="z-0 absolute top-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#42a5f5"
              fillOpacity="1"
              d="M0,224L40,229.3C80,235,160,245,240,245.3C320,245,400,235,480,218.7C560,203,640,181,720,186.7C800,192,880,224,960,240C1040,256,1120,256,1200,266.7C1280,277,1360,299,1400,309.3L1440,320L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div className="z-0 absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#42a5f5"
              fillOpacity="1"
              d="M0,64L34.3,80C68.6,96,137,128,206,149.3C274.3,171,343,181,411,165.3C480,149,549,107,617,101.3C685.7,96,754,128,823,154.7C891.4,181,960,203,1029,224C1097.1,245,1166,267,1234,256C1302.9,245,1371,203,1406,181.3L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default materi
