// import { FaLinkedin, FaGithub, FaTelegramPlane } from "react-icons/fa"
// import { HiOutlineMail } from "react-icons/hi";
// import { BsPersonLinesFill } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";

const contactInfo = [
  {
    id: 1,
    contact: "LinkedIn",
    link: "https://www.linkedin.com/in/dhawal793/",
    // icon: <FaLinkedin size={17} />,
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5">
      <path
        fill="#0078d4"
        d="M8.421 14h.052C11.263 14 13 12 13 9.5 12.948 6.945 11.263 5 8.526 5S4 6.945 4 9.5C4 12 5.736 14 8.421 14zM4 17h9v26H4V17zm40 9.5a9.5 9.5 0 0 0-9.5-9.5 9.474 9.474 0 0 0-7.5 3.684V17h-9v26h9V28a4 4 0 0 1 8 0v15h9V26.5z"
      ></path>
    </svg>
  },
  {
    id: 2,
    contact: "GitHub",
    link: "https://github.com/dhawal-793",
    // icon: <FaGithub size={17} />,
    icon: <svg
      // stroke="currentColor"
      fill="#fff"
      stroke-width="0"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
      ></path>
    </svg>
  },
  {
    id: 3,
    contact: "Mail",
    link: "mailto:vijaydhawal9001@gmail.com",
    // icon: <HiOutlineMail size={17} />,
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5">
      <path
        fill="#4caf50"
        d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
      ></path>
      <path
        fill="#1e88e5"
        d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
      ></path>
      <polygon
        fill="#e53935"
        points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
      ></polygon>
      <path
        fill="#c62828"
        d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
      ></path>
      <path
        fill="#fbc02d"
        d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
      ></path>
    </svg>
  },
  {
    id: 4,
    contact: "Portfolio",
    link: "https://dhawal-793-portfolio.onrender.com",
    icon: <BsGlobe size={17} color="rgb(34,211,238)" />
  },
  // {
  //   id: 5,
  //   contact: "Telegram",
  //   link: "https://t.me/DV_793",
  //   // icon: <FaTelegramPlane size={17} />,
  //   icon: <svg
  //     fill="#03A9F4"
  //     stroke-width="0"
  //     viewBox="0 0 448 512"
  //     height="1em"
  //     width="1em"
  //     xmlns="http://www.w3.org/2000/svg"
  //   >
  //     <path
  //       d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"
  //     ></path>
  //   </svg>
  // },
  // {
  //     id: 6,
  //     contact: "Twitter",
  //     link: "twitter.com",
  //     icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="w-5">
  //    <path
  //    fill="#03A9F4"
  //    d="M42 12.429a14.978 14.978 0 0 1-4.247 1.162 7.38 7.38 0 0 0 3.251-4.058 14.829 14.829 0 0 1-4.693 1.776A7.377 7.377 0 0 0 30.926 9c-4.08 0-7.387 3.278-7.387 7.32 0 .572.067 1.129.193 1.67a21.05 21.05 0 0 1-15.224-7.654 7.23 7.23 0 0 0-1 3.686c0 2.541 1.301 4.778 3.285 6.096a7.52 7.52 0 0 1-3.349-.914v.086c0 3.551 2.547 6.508 5.923 7.181a7.346 7.346 0 0 1-1.941.263c-.477 0-.942-.054-1.392-.135.94 2.902 3.667 5.023 6.898 5.086a14.925 14.925 0 0 1-9.174 3.134 14.61 14.61 0 0 1-1.761-.104A21.109 21.109 0 0 0 17.321 38c13.585 0 21.017-11.156 21.017-20.834 0-.317-.01-.633-.025-.945A14.532 14.532 0 0 0 42 12.429"
  //    ></path>
  //    </svg>
  // },
  // {
  //     id: 7,
  //     contact: "Discord",
  //     link: "discord.com",
  //     icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="w-5">
  //         <path
  //         fill="#536dfe"
  //         d="M39.248,10.177c-2.804-1.287-5.812-2.235-8.956-2.778c-0.057-0.01-0.114,0.016-0.144,0.068 c-0.387,0.688-0.815,1.585-1.115,2.291c-3.382-0.506-6.747-0.506-10.059,0c-0.3-0.721-0.744-1.603-1.133-2.291 c-0.03-0.051-0.087-0.077-0.144-0.068c-3.143,0.541-6.15,1.489-8.956,2.778c-0.024,0.01-0.045,0.028-0.059,0.051 c-5.704,8.522-7.267,16.835-6.5,25.044c0.003,0.04,0.026,0.079,0.057,0.103c3.763,2.764,7.409,4.442,10.987,5.554 c0.057,0.017,0.118-0.003,0.154-0.051c0.846-1.156,1.601-2.374,2.248-3.656c0.038-0.075,0.002-0.164-0.076-0.194 c-1.197-0.454-2.336-1.007-3.432-1.636c-0.087-0.051-0.094-0.175-0.014-0.234c0.231-0.173,0.461-0.353,0.682-0.534 c0.04-0.033,0.095-0.04,0.142-0.019c7.201,3.288,14.997,3.288,22.113,0c0.047-0.023,0.102-0.016,0.144,0.017 c0.22,0.182,0.451,0.363,0.683,0.536c0.08,0.059,0.075,0.183-0.012,0.234c-1.096,0.641-2.236,1.182-3.434,1.634 c-0.078,0.03-0.113,0.12-0.075,0.196c0.661,1.28,1.415,2.498,2.246,3.654c0.035,0.049,0.097,0.07,0.154,0.052 c3.595-1.112,7.241-2.79,11.004-5.554c0.033-0.024,0.054-0.061,0.057-0.101c0.917-9.491-1.537-17.735-6.505-25.044 C39.293,10.205,39.272,10.187,39.248,10.177z M16.703,30.273c-2.168,0-3.954-1.99-3.954-4.435s1.752-4.435,3.954-4.435 c2.22,0,3.989,2.008,3.954,4.435C20.658,28.282,18.906,30.273,16.703,30.273z M31.324,30.273c-2.168,0-3.954-1.99-3.954-4.435 s1.752-4.435,3.954-4.435c2.22,0,3.989,2.008,3.954,4.435C35.278,28.282,33.544,30.273,31.324,30.273z"
  //      ></path>
  //      </svg>
  // },
  // {
  //     id: 8,
  //     contact: "Resume",
  //     link: "/resume.pdf",
  //     icon: <BsPersonLinesFill size={17} />,
  //     styles: "hover:bg-black hover:text-[#5EEAC5]",
  //     download: true
  // }
];

export default contactInfo;