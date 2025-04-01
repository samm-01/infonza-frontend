import { FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";

const TopBar = () => {
    return (
        <div className="bg-black text-white text-sm py-2 px-6 flex justify-between items-center w-full">
            {/* Left Side: Contact Info */}
            <div className="flex space-x-6">
                <div className="flex items-center space-x-2">
                    <FaEnvelope className="text-primary" />
                    <span>support@infonza.com</span>
                </div>
                <div className="hidden md:flex items-center space-x-2">
                    <FaMapMarkerAlt className="text-primary" />
                    <span>Chandigarh - 160002</span>
                </div>
            </div>

            {/* Right Side: Social Icons + CTA */}
            <div className="flex items-center space-x-4">
                <a href="https://www.linkedin.com/company/infonza-innovations/?lipi=urn%3Ali%3Apage%3Ad_flagship3_company%3BPwZ2Y157R0OmSpn0VqPoPA%3D%3D" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className="hover:text-primary cursor-pointer" />
                </a>
                <a href="https://www.linkedin.com/company/infonza-innovations/?lipi=urn%3Ali%3Apage%3Ad_flagship3_company%3BPwZ2Y157R0OmSpn0VqPoPA%3D%3D" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className="hover:text-primary cursor-pointer" />
                </a>
                <a href="https://www.linkedin.com/company/infonza-innovations/?lipi=urn%3Ali%3Apage%3Ad_flagship3_company%3BPwZ2Y157R0OmSpn0VqPoPA%3D%3D" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="hover:text-primary cursor-pointer" />
                </a>
                <a href="https://www.linkedin.com/company/infonza-innovations/?lipi=urn%3Ali%3Apage%3Ad_flagship3_company%3BPwZ2Y157R0OmSpn0VqPoPA%3D%3D" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="hover:text-primary cursor-pointer" />
                </a>
                {/* <button className="bg-red-600 hover:bg-red-700 text-white text-xs px-4 py-2 rounded-lg font-semibold">
                    GET A QUOTE
                </button> */}
            </div>
        </div>
    );
};

export default TopBar;
