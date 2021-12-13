import { useEffect, useState } from "react"
import Sidebar from "../../components/Sidebar"
import Header from "../../components/Header"
import { useAuth } from "../../context/AuthContext"
import { useRouter } from "next/router"

const pendahuluan = () => {
  const [sidebarOpen, setSidebarOpen] = useState()
  const { currentUser } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!currentUser) {
      router.push("/")
    } else {
      console.log("signed in")
    }
  }, [currentUser])

  if (!currentUser) {
    // user is signed out or still being checked.
    // don't render anything
    return null
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="relative flex flex-col justify-center items-center w-full h-full px-2 md:px-4 lg:px-12 py-4 md:py-12 gap-4 xl:gap-12">
            {/* Page title */}
            <div className="bg-white px-4 py-2 z-10 rounded-lg shadow-lg">
              <h1 className="z-10 text-indigo-800 text-center font-bold text-lg md:text-2xl uppercase">
                Pendahuluan
              </h1>
            </div>

            {/* Content 1 */}
            <div className="z-10 gap-6 md:gap-12 w-full">
              <div className="bg-white text-indigo-800 rounded-lg p-4 shadow-lg">
                <h1 className="font-bold text-center text-lg md:text-2xl ">
                  Apersepsi
                </h1>
                <div className="flex flex-col md:flex-row jutstify-center items-center gap-4">
                  <div className="w-full md:w-1/3 flex-auto">
                    <img
                      src="/image/contohasambasa.jpg"
                      className="object-contain p-2 shadow-lg rounded-lg"
                    />
                  </div>
                  <div className="w-full md:w-1/3 flex-auto">
                    <img
                      src="/image/phmeter.jpg"
                      className="object-contain p-2 shadow-lg rounded-lg"
                    />
                  </div>
                </div>
                <p>loremipsum</p>
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

export default pendahuluan
