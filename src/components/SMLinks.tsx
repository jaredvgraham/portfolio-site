import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialMediaLinks = () => (
  <div className=" flex gap-7 mt-2">
    <a
      href="https://github.com/jaredvgraham/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaGithub className="text-white " />
    </a>
    <a
      href="https://www.linkedin.com/in/jared-graham-0416b62a7/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaLinkedin className="text-white" />
    </a>
    <a
      href="https://twitter.com/yourusername"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaTwitter className="text-white" />
    </a>
  </div>
);

export default SocialMediaLinks;
