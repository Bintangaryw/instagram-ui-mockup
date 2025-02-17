import BottomPostcard from "./Bottom-postcard";
import TopPoscard from "./Top-postcard";
import Image from "../../assets/images/image1.jpg";

const Postcard = () => {
    return (
        <div className="w-[450px] flex flex-col mx-auto ">
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
