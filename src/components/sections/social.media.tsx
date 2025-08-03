import { FaFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

interface IProps {
  linkedin: string;
  gmail: string;
  facebook: string;
  tiktok: string;
}

const SocialMedia = (props: IProps) => {
    const { linkedin, tiktok, gmail, facebook } = props;

    return (
        <div className="my-4 d-flex items-center gap-3">
            <a href={linkedin} target='_blank' className="highlight" title="LinkedIn ">
                <FaLinkedinIn size={30} />
            </a>
            <a href={gmail} target='_blank' className="highlight" title="Gmail">
                <BiLogoGmail size={30} />
            </a>
            <a href={facebook} target='_blank' className="highlight" title="Facebook ">
                <FaFacebook size={30} />
            </a>
            <a href={tiktok} target='_blank' className="highlight" title="Tiktok ">
                <FaTiktok size={30} />
            </a>
        </div>
    )
}

export default SocialMedia;