import { MdHomeFilled } from "react-icons/md";
import { FaRegCompass } from "react-icons/fa";
import { PiFilmSlateLight } from "react-icons/pi";
import { CiSquarePlus } from "react-icons/ci";
import { LuMessageCircleMore } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";

const Bottombar = () => {
    return (
        <div className="flex justify-between items-center px-9 py-3 bg-[#000000] border-t-[1px] border-[#1b1b1b]">
            <button>
                <MdHomeFilled className="w-7 h-7" />
            </button>
            <button>
                <FaRegCompass className="w-7 h-7" />
            </button>
            <button>
                <PiFilmSlateLight className="w-7 h-7" />
            </button>
            <button>
                <CiSquarePlus className="w-7 h-7" />
            </button>
            <button>
                <LuMessageCircleMore className="w-7 h-7" />
            </button>
            <button>
                <CgProfile className="w-7 h-7" />
            </button>
        </div>
    );
};

export default Bottombar;
