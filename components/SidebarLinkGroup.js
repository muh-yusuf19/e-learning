import { useState } from "react"

const SidebarLinkGroup = ({ children, activecondition }) => {
  const [open, setOpen] = useState(activecondition)

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <div>
      <li
        className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 hover:cursor-pointer ${
          activecondition && "bg-gray-900"
        }`}
      >
        {children(handleClick, open)}
      </li>
    </div>
  )
}

export default SidebarLinkGroup
