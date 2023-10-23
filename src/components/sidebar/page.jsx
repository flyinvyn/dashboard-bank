import Image from "next/image"
import profile from "../../img/profile.png"
import gallery from "../../img/gallery.png"
import Link from "next/link"
import {TbCategory2} from "react-icons/tb"

const Sidebar = ({name, email}) => {
  return (
    <div className="h-full p-3 space-y-2 w-60 dark:bg-gray-900 dark:text-gray-100 bg-white">
        <div className="flex items-center justify-center p-4 space-x-4 bg-color-secondary">
          <Image src={gallery} width={24} height={24} alt="profile" className="rounded-full " />
        </div>
        <div className="flex items-center p-2 space-x-4 bg-zinc-50 cursor-pointer">
          <Image src={profile} width={32} height={32} alt="profile" className="rounded-full dark:bg-gray-500" />
          <div>
            <h2 className="text-base font-semibold text-color-primary">{name}</h2>
            <span className="flex items-center space-x-1">
              <Link href="#" className="text-xs text-color-secondary font-normal hover:underline dark:text-gray-400">{email}</Link>
            </span>
          </div>
        </div>
        <div className="divide-y divide-gray-700">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="dark:bg-gray-800 dark:text-gray-50 hover:bg-sky-200 transition-all duration-400 border-r-2 border-color-main">
              <Link href="#" className="flex items-center p-2 space-x-3 rounded-md">
                <TbCategory2 className="w-6 h-6 text-color-main"/>
                <span className="text-color-main text-base font-bold">Dashboard</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default Sidebar