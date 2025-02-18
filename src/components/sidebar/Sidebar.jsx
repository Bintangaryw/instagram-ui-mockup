import { FaInstagram } from "react-icons/fa6";
import { MdHomeFilled } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaRegCompass } from "react-icons/fa";
import { PiFilmSlateLight } from "react-icons/pi";
import { LuMessageCircleMore } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

import { FaThreads } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

const Sidebar = () => {
    return (
        <div className="h-screen fixed bg-[#000000] flex flex-col items-center justify-between p-3 border-r-[1px] border-[#1b1b1b] xl:w-[380px] xl:items-start">
            <div className="w-full flex flex-col justify-center items-start">
                <div className="py-6">
                    <button className="hover:bg-[#1b1b1b] p-3 rounded-lg">
                        <FaInstagram className="w-7 h-7" />
                    </button>
                </div>
                <div className="w-full flex flex-col space-y-2 text-lg">
                    <button className="w-full flex flex-row justify-start items-center hover:bg-[#1b1b1b] p-3 rounded-lg">
                        <MdHomeFilled className="w-7 h-7" />
                        <p className="hidden pl-5 font-medium lg:flex">Home</p>
                    </button>

                    <button className="w-full flex flex-row justify-start items-center hover:bg-[#1b1b1b] p-3 rounded-lg">
                        <CiSearch className="w-7 h-7" />
                        <p className="hidden pl-5 font-medium lg:flex">Search</p>
                    </button>

                    <button className="w-full flex flex-row justify-start items-center hover:bg-[#1b1b1b] p-3 rounded-lg">
                        <FaRegCompass className="w-7 h-7" />
                        <p className="hidden pl-5 font-medium lg:flex">Explore</p>
                    </button>

                    <button className="w-full flex flex-row justify-start items-center hover:bg-[#1b1b1b] p-3 rounded-lg">
                        <PiFilmSlateLight className="w-7 h-7" />
                        <p className="hidden pl-5 font-medium lg:flex">Reels</p>
                    </button>
                    <button className="w-full flex flex-row justify-start items-center hover:bg-[#1b1b1b] p-3 rounded-lg">
                        <LuMessageCircleMore className="w-7 h-7" />
                        <p className="hidden pl-5 font-medium lg:flex">Messages</p>
                    </button>
                    <button className="w-full flex flex-row justify-start items-center hover:bg-[#1b1b1b] p-3 rounded-lg">
                        <CiHeart className="w-7 h-7" />
                        <p className="hidden pl-5 font-medium lg:flex">Notifications</p>
                    </button>
                    <button className="w-full flex flex-row justify-start items-center hover:bg-[#1b1b1b] p-3 rounded-lg">
                        <CiSquarePlus className="w-7 h-7" />
                        <p className="hidden pl-5 font-medium lg:flex">Create</p>
                    </button>
                    <button className="w-full flex flex-row justify-start items-center hover:bg-[#1b1b1b] p-3 rounded-lg">
                        <CgProfile className="w-7 h-7" />
                        <p className="hidden pl-5 font-medium lg:flex">Profile</p>
                    </button>
                </div>
            </div>
            <div className="w-full flex flex-col space-y-2 text-lg">
                <button className="w-full flex flex-row justify-start items-center hover:bg-[#1b1b1b] p-3 rounded-lg">
                    <FaThreads className="w-7 h-7" />
                    <p className="hidden pl-5 font-medium lg:flex">Threads</p>
                </button>
                <button className="w-full flex flex-row justify-start items-center hover:bg-[#1b1b1b] p-3 rounded-lg">
                    <RxHamburgerMenu className="w-7 h-7" />
                    <p className="hidden pl-5 font-medium lg:flex">More</p>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
