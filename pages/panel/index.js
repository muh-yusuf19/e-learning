import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { useAuth } from "../../context/AuthContext"
import { useTrail, animated } from "react-spring"
import Sidebar from "../../components/Sidebar"
import Header from "../../components/Header"
import Background from "../../components/Partial/Background"
import Mobilenav from "../../components/Mobilenav"

const Trail = ({ children }) => {
  const items = [...children]
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200, duration: 500 },
    from: {
      opacity: 0,
      transform: "rotate(90deg) scale(0) translateX(-40%)",
    },
    to: {
      opacity: 1,
      transform: "rotate(0deg) scale(1) translateX(0%)",
    },
  })
  return (
    <>
      {trail.map((spring, index) => (
        <animated.div key={index} style={spring}>
          {items[index]}
        </animated.div>
      ))}
    </>
  )
}

const pendahuluan = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { currentUser } = useAuth()
  const router = useRouter()

  // Redirect if no user
  // useEffect(() => {
  //   if (!currentUser) {
  //     router.push("/")
  //   } else {
  //     console.log("signed in")
  //   }
  // }, [currentUser])

  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative h-full flex flex-col items-center justify-start gap-6 bg-indigo-400 px-4 sm:px-6 lg:px-8 py-8 w-full">
          <Background />
          {/* Page title */}
          <Trail>
            <div className="z-10 bg-white px-4 py-2 rounded-lg shadow-lg">
              <h1 className="text-indigo-800 text-center font-bold text-lg md:text-2xl uppercase">
                Pendahuluan
              </h1>
            </div>

            {/* Content 1 */}
            <div className="flex flex-col items-center justify-center w-full bg-white rounded-xl px-4">
              <h1 className="font-bold text-center text-lg text-gray-700 md:text-2xl pt-4">
                Apersepsi
              </h1>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-4">
                <img
                  src="/image/contohasambasa.jpg"
                  className="object-fill w-full h-full shadow-lg rounded-xl"
                />
                <img
                  src="/image/phmeter.jpg"
                  className="object-fill w-full h-full shadow-lg rounded-xl"
                />
                <p>loremipsum</p>
              </div>
            </div>
          </Trail>
        </div>
        <Mobilenav />
      </div>
    </div>
  )
}

export default pendahuluan
