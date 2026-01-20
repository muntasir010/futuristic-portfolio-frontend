import tripmingle from "../assets/tripmingle.png";
import paykotha from "../assets/paykotha.png";
import portfolio from "../assets/portfolio.png";

export const projects = [
  {
    id: 1,
    name: "TripMingle",
    image: tripmingle,
    stack: ["Next.js", "Node.js","TypeScript", "PostgreSQL", "Tailwind", "Axios"],
    description:
      "A travel planning platform where users can create trips and join groups.",
    live: "https://tripmingle.vercel.app/",
    github: "https://github.com/muntasir010/TripMingle_Frontend",
    challenges:
      "Handling real-time seat availability and user booking conflicts.",
    future:
      "Add payment gateway and real-time chat functionality.",
  },
  {
    id: 2,
    name: "PayKotha",
    image: paykotha,
    stack: ["React", "TypeScript", "Redux Toolkit", "RTK Query", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT", "bcrypt"],
    description:
      "A modern e-commerce frontend with product filtering and cart system.",
    live: "https://paykotha.vercel.app/",
    github: "https://github.com/muntasir010/PayKotha-Frontend",
    challenges:
      "State management for cart and product filtering logic.",
    future:
      "Add user authentication and order tracking.",
  },
  {
    id: 3,
    name: "Personal Portfolio",
    image: portfolio,
    stack: ["React", "Tailwind CSS",],
    description:
      "A futuristic glassmorphism portfolio to showcase projects and skills.",
    live: "https://asif.dev",
    github: "https://github.com/asif/portfolio-frontend",
    challenges:
      "Balancing UI aesthetics with performance.",
    future:
      "Add dark/light mode and animations.",
  },
];
