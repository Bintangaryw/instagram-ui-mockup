import profile from "../../assets/images/profile3.jpg";

const UserAccount = () => {
    return (
        <div className="flex flex-row justify-between items-center">
            {/* Profile picture and username/id */}
            <div className="flex items-center">
                {/* Profile picture */}
                <div>
                    <img src={profile} alt="profile_picture" className="w-11 h-11 object-cover rounded-full cursor-pointer" />
                </div>
                {/* Username and id */}
                <div className="flex flex-col pl-4">
                    <a className="font-bold" href="#">
                        user.name123
                    </a>
                    <p className="text-[#a8a8a8]">User Name</p>
                </div>
            </div>

            {/* Switch button */}
            <div>
                <a className="text-[#0095f6] hover:text-[#fafafa]" href="#">
                    Switch
                </a>
            </div>
        </div>
    );
};

export default UserAccount;
