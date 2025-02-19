import BottomPostcard from "./Bottom-postcard";
import TopPoscard from "./Top-postcard";
import Image from "../../assets/images/image1.jpg";

const Postcard = () => {
    return (
        <div className="w-full flex flex-col mx-auto py-8 border-b-[1px] border-[#1b1b1b]">
            <div>
                <TopPoscard />
            </div>
            <div>
                <img src={Image} alt="insta_post" className="rounded" />
            </div>
            <div>
                <BottomPostcard />
            </div>
        </div>
    );
};

export default Postcard;
