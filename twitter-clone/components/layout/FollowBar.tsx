import { useRouter } from "next/router";
import { BsTwitter } from "react-icons/bs";

const FollowBar = () => {
    const router = useRouter()
    return (
        <div className="px-6 py-4 hidden lg:block ">
            <div className="bg-neutral-800 rounded-xl p-4">
                <h2 className="text-white text-xl font-semibold">Who to Follow </h2>  

            </div>
        
        </div>
    )
}
export default FollowBar