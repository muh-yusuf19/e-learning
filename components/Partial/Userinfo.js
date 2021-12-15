import { useAuth } from "../../context/AuthContext"

const Userinfo = () => {
  const { currentUser } = useAuth()
  return (
    <>
      {/* User */}
      <div className="flex flex-col items-center gap-6 mb-6">
        <div className="h-24 w-24 rounded-full bg-yellow-400 border-2 border-white"></div>
        <h1 className="text-sm md:text-base font-bold text-white">
          {currentUser ? currentUser.name : "Your Name"}
        </h1>
      </div>
    </>
  )
}

export default Userinfo
