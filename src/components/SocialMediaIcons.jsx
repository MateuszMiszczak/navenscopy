import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const SocialMediaIcons = () => {
  const myEmail = "mthw.miszczak@gmail.com";

  return (
    <div className="flex gap-2 md:gap-6 lg:gap-12">
      <a
        href="https://github.com/MateuszMiszczak"
        target="_blank"
        rel="noopener noreferrer"
        className="text-4xl lg:text-6xl xl:text-7xl"
      >
        <FaFacebookSquare className="transition delay-[10ms] hover:scale-[0.95] hover:opacity-60" />
      </a>
      <a
        href="https://www.linkedin.com/in/mateusz-miszczak-a28571277/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-4xl lg:text-6xl xl:text-7xl"
      >
        <FaLinkedin className="transition delay-[10ms] hover:scale-[0.95] hover:opacity-60" />
      </a>
      <a
        href={`mailto:${myEmail}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-4xl lg:text-6xl xl:text-7xl"
      >
        <SiGmail className="transition delay-[10ms] hover:scale-[0.95] hover:opacity-60" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
