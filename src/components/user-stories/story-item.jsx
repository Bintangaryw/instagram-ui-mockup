import profile from "../../assets/images/profile1.jpg";

const StoryItem = () => {
    return (
        <div className="w-16">
            <div className="p-2 flex flex-col items-center cursor-pointer">
                <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045] flex items-center justify-center">
                    <img src={profile} alt="stories" className="w-full h-full object-cover rounded-full bg-[#000000] p-[2px]" />
                </div>
                {/* Pastikan text bisa di-truncate */}
                <p className="text-xs w-full max-w-[64px] overflow-hidden text-ellipsis whitespace-nowrap text-center">orang.ganteng</p>
            </div>
        </div>
    );
};

export default StoryItem;
