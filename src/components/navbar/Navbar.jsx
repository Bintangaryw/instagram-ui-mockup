import instagramLetter from "../../assets/images/instagram-letter.png";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { useState } from "react";

const Navbar = () => {
    const [notif, setNotif] = useState(true);

    const handleNotif = () => {
        setNotif(!notif);
    };

    return (
        <div className="flex flex-row items-center h-14">
            <div className="basis-[35%]">
                <div className="cursor-pointer">
                    <img src={instagramLetter} alt="instagram" className="scale-[60%]" />
                </div>
            </div>
            <div className="basis-[65%]">
                <div className="relative flex justify-between items-center">
                    <CiSearch className="absolute left-3" />
                    <input type="text" className="bg-[#363636] p-2 w-64 rounded-lg text-sm pl-9" placeholder="Search" />
                    <button onClick={handleNotif} className="pr-2">
                        {notif ? <FaHeartCirclePlus className="w-8 h-8" /> : <CiHeart className="w-8 h-8" />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
