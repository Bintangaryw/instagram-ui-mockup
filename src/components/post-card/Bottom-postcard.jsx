import { FaBookmark } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { useState } from "react";

const BottomPostcard = () => {
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
    };
    const handleSave = () => {
        setSaved(!saved);
    };

    return (
        <div className="flex flex-col pt-4">
            {/* interact bar */}
            <div className="flex flex-row justify-between">
                <div className="flex flex-row space-x-5">
                    <button onClick={handleLike}>{liked ? <FaHeart className="w-6 h-6" /> : <FaRegHeart className="w-6 h-6" />}</button>
                    <button>
                        <FaRegComment className="w-6 h-6" />
                    </button>
                    <button>
                        <FiSend className="w-6 h-6" />
                    </button>
                </div>
                <div>
                    <button onClick={handleSave}>{saved ? <FaBookmark className="w-6 h-6" /> : <FaRegBookmark className="w-6 h-6" />}</button>
                </div>
            </div>

            {/* likes count */}
            <div className="py-2">
                <p className="font-">150,549 likes</p>
            </div>

            {/* user id, captions, hastags */}
            <div className="pb-4">
                <p className="pb-6">
                    <span className="font-bold pr-2">orang.ganteng</span>
                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem odio nobis vero ex. Pariatur voluptate sapiente quasi voluptas corrupti nam corporis nemo! Quae, repudiandae dolores!</span>
                </p>
                <p className="text-[#e0f1ff]">
                    <span>#indahnya #pemandangan #mantap #uhuy</span>
                </p>
            </div>

            {/* comment bar */}
            <div className="flex flex-col space-y-2">
                <p className="text-gray-500">View all 7,813 comments</p>
                <input type="text" className="bg-[#000000]" placeholder="Add a comment..." />
            </div>
        </div>
    );
};

export default BottomPostcard;
