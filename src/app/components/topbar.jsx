import { FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";

const TopBar = () => {
    return (
        <div className="bg-black text-white text-sm py-2 px-6 flex justify-between items-center w-full">
            {/* Left Side: Contact Info */}
            <div className="flex space-x-6">
                <div className="flex items-center space-x-2">
                    <FaEnvelope className="text-primary" />
                    <span>sales@infonza.com</span>
                </div>
                <div className="hidden md:flex items-center space-x-2">
                    <FaMapMarkerAlt className="text-primary" />
                    <span>IT City, Mohali - 140306</span>
                </div>
            </div>

            {/* Right Side: Social Icons + CTA */}
            <div className="flex items-center space-x-4">
                <FaFacebookF className="hover:text-primary cursor-pointer" />
                <FaLinkedinIn className="hover:text-primary cursor-pointer" />
                <FaYoutube className="hover:text-primary cursor-pointer" />
                <FaInstagram className="hover:text-primary cursor-pointer" />
                {/* <button className="bg-red-600 hover:bg-red-700 text-white text-xs px-4 py-2 rounded-lg font-semibold">
                    GET A QUOTE
                </button> */}
            </div>
        </div>
    );
};

export default TopBar;
