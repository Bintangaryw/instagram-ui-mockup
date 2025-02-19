import InstagramCopyright from "./instagram-copyright";
import SuggestedAccounts from "./suggested-accounts";
import UserAccount from "./user-account";

const RightPanel = () => {
    return (
        <div className="w-[400px] py-10 px-5">
            {/* Logged in account */}
            <div className="pb-4">
                <UserAccount />
            </div>

            {/* Suggested accounts */}
            <div className="flex flex-row justify-between items-center py-4">
                <p className="font-bold text-[#a8a8a8]">Suggester for you</p>
                <a className="hover:text-[#a8a8a8]" href="#">
                    See All
                </a>
            </div>

            <div className="pb-5">
                <SuggestedAccounts />
                <SuggestedAccounts />
                <SuggestedAccounts />
                <SuggestedAccounts />
                <SuggestedAccounts />
            </div>

            {/* Copyright and else */}
            <div>
                <InstagramCopyright />
            </div>
        </div>
    );
};

export default RightPanel;
