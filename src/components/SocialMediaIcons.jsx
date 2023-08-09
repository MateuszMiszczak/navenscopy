import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const SocialMediaIcons = () => {
  const myEmail = "mthw.miszczak@gmail.com";

  return (
    <div className="md:2 flex gap-5 text-4xl lg:gap-8 lg:text-4xl xl:text-5xl">
      <a
        href="https://github.com/MateuszMiszczak"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookSquare className="transition delay-[10ms] hover:scale-[0.95] hover:opacity-60" />
      </a>
      <a
        href="https://www.linkedin.com/in/mateusz-miszczak-a28571277/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="transition delay-[10ms] hover:scale-[0.95] hover:opacity-60" />
      </a>
      <a href={`mailto:${myEmail}`} target="_blank" rel="noopener noreferrer">
        <SiGmail className="transition delay-[10ms] hover:scale-[0.95] hover:opacity-60" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
