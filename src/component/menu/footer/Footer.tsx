import { FaGithub, FaLinkedin } from "react-icons/fa";
import './Footer.scss';

function Footer() {

    const navigateToExternalUrl = (url: string) => window.open(url, "_blank");

    return (
        <div className="Footer">
            <FaGithub className="Icon" onClick={() => navigateToExternalUrl("https://github.com/TitouanLarnicol")} />
            <FaLinkedin className="Icon" onClick={() => navigateToExternalUrl("https://www.linkedin.com/in/titouan-larnicol/")} />
        </div>
    )
}

export default Footer;