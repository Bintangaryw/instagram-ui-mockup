import { BsThreeDots } from "react-icons/bs";
import profile from "../../assets/images/profile1.jpg";

const TopPoscard = () => {
    return (
        <div className="flex flex-row justify-between items-center py-2">
            {/* User info */}
            <div className="flex flex-row space-x-3">
                <img src={profile} alt="user_profile_picture" className="w-9 h-9 rounded-full" />
                <div>
                    <p className="font-bold">orang.ganteng</p>
                    <p>Bandung</p>
                </div>
                <p className="text-gray-500">&bull; 1h</p>
            </div>
            <div>
                <button>
                    <BsThreeDots className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default TopPoscard;
