import { MdHome } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import './index.css'
function Header() {
    return (
        <div className="flex bg-black">
            <div className="flex mx-auto mt-8 border rounded-xl bg-gray-600 items-center border-white">
                <a href="/home">
                    <h1 className="text-white text-2xl text-bold md:text-3xl rounded-xl text-center flex justify-center w-fit p-2 md:mr-10 mx-auto h-fit">
                        <MdHome />
                    </h1>
                </a>
                <a href="/about">
                    <h1 className="text-white text-2xl text-bold md:text-3xl rounded-xl text-center flex justify-center w-fit p-2 md:mx-5 mx-auto h-fit">
                        <FaRegUser />
                    </h1>
                </a>
                <a href="/projects">
                    <h1 className="text-white text-2xl text-bold md:text-3xl rounded-xl text-center flex justify-center w-fit p-2 md:ml-10 mx-auto h-fit">
                        <AiOutlineFundProjectionScreen />
                    </h1>
                </a>
            </div>
        </div>
    );
}

export default Header;
