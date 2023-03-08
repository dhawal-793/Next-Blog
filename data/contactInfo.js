import { FaLinkedin, FaGithub } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi";
import { FaTelegramPlane, FaDiscord, FaTwitter } from "react-icons/fa"
import { BsFillPersonLinesFill } from "react-icons/bs";

import { BsGlobe } from "react-icons/bs";
import LinkedIn, { GitHub, GMail, Portfolio } from "./Icons";
import { Telegram, Discord, Twitter } from "./Icons";
const contactInfo = [
  {
    id: 1,
    contact: "LinkedIn",
    link: "https://www.linkedin.com/in/dhawal793/",
    icons: [<LinkedIn />, <FaLinkedin size={17} color="#0078d4" />]
  },
  {
    id: 2,
    contact: "GitHub",
    link: "https://github.com/dhawal-793",
    icons: [<GitHub />, <FaGithub size={17} color="#fff" />]
  },
  {
    id: 3,
    contact: "Mail",
    link: "mailto:vijaydhawal9001@gmail.com",
    icons: [<GMail />, <HiOutlineMail size={17} color="#e53935" />]
  },
  {
    id: 4,
    contact: "Portfolio",
    link: "https://dhawal-793-portfolio.onrender.com",
    icons: [<Portfolio />, <BsGlobe size={17} color="#5EEAC3" />]
  },
  // {
  //   id: 5,
  //   contact: "Telegram",
  //   link: "https://t.me/DV_793",
  //   icons: [<Telegram />, <FaTelegramPlane size={17} color="#03A9F4" />]
  // },
  // {
  //   id: 6,
  //   contact: "Twitter",
  //   link: "twitter.com",
  //   icons: [<Twitter />, <FaTwitter size={17} color="#5EEAC3" />]
  // },
  // {
  //   id: 7,
  //   contact: "Discord",
  //   link: "discord.com",
  //   icons: [<Discord />, <FaDiscord size={17} color="#5EEAC3" />]
  // },
  // {
  //   id: 8,
  //   contact: "Resume",
  //   link: "/resume.pdf",
  //   icons: [<BsFillPersonLinesFill size={17} color="#5EEAC3" />],
  //   download: true
  // }
];

export default contactInfo;