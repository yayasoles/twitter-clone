import { useRouter } from "next/router";
import { FaFeather } from "react-icons/fa";

const SideBarTwitteButton = () => {
    const router = useRouter()
    return (
        <div onClick={() => router.push('/')}>
            <div className="
        mt-6
        lg:hidden
        rounded-full
        h-14
        w-14
        p-4
        flex
        items-center
        justify-center
        bg-sky-500
        hover:bg-opacity-80
        transition
        coursor-pointer
        ">
                <FaFeather size={28} color="white" />
            </div>
            <div className="
            relative
            hidden
            lg:flex
            items-left
            gap-4
            p-4
            rounded-full
            hover:bg-slate-300
            hover:bg-opacity-10
            cursor-pointer
            ">
                <FaFeather size={24} color="white"/>
            </div>
        </div>
    )
}
export default SideBarTwitteButton