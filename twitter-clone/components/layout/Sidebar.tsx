import { BsBellFill, BsHouseFill } from "react-icons/bs";
import { BiLogOut} from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import SideBarTwitteButton from "./SideBarTwitteButton";

const Sidebar = () => {
    const items = [
        {
            label: 'Home',
            href: "/",
            icon: BsHouseFill
        },
        {
            label: 'Notifcations',
            href: "/notifications",
            icon: BsBellFill
        },
        {
            label: 'Profile',
            href: "/users/profile",
            icon: FaUser
        }
    ]
    return (
        <div className="col-span-1 h-full pr-4 md:pr-6">
            <div className="flex flex-col items-end">
                <div className="space-y-2 lg:w-[230px]">
                    <SidebarLogo />
                    {items.map((item) => (
                        <SidebarItem 
                        key={item.href} 
                        icon={item.icon} 
                        label={item.label} 
                        href={item.href}
                        />
                    ))}
                    <SidebarItem icon={BiLogOut} label="LogOut" href="/logout" onClick={()=>{}} />
                    <SideBarTwitteButton/>
                </div>

            </div>
        </div>
    )
}
export default Sidebar