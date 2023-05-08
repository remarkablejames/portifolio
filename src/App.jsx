import { Route, Routes, Link, useLocation } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import { Portfolio } from "./pages/Portfolio";
import { AnimatePresence } from "framer-motion";
import CV from "./assets/CV.pdf";
const App = () => {
  const location = useLocation();
  return (
    <div className=" h-screen   bg-zinc-900 flex flex-col justify-between">
      <nav
        className="flex justify-around py-4 bg-zinc-900 
      backdrop-blur-2xl  w-full z-50 sticky top-0
      "
      >
        {/* Logo Container */}
        <div className="flex items-center">
          {/* Logo */}

          <h3 className="text-2xl font-medium text-white cursor-pointer">
            {/* <img
                className="h-6 object-cover"
                src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg"
                alt="Store Logo"
              /> */}
            remarkable
            <span className="text-yellow  font-bold text-[#FFF200]">James</span>
          </h3>
        </div>
        {/* Links Section */}
        <div className="items-center hidden space-x-8 lg:flex">
          <Link
            to="/"
            className="flex text-white hover:text-[#FFF200]
              cursor-pointer transition-colors duration-300"
            element={Home}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="flex text-white hover:text-[#FFF200]
              cursor-pointer transition-colors duration-300"
            element={About}
          >
            About Me
          </Link>
          <Link
            to="/experience"
            className="flex text-white hover:text-[#FFF200]
              cursor-pointer transition-colors duration-300"
            element={Skills}
          >
            Skills
          </Link>
          <Link
            to="/portfolio"
            className="flex text-white hover:text-[#FFF200]
              cursor-pointer transition-colors duration-300"
            element={Portfolio}
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="flex text-white hover:text-[#FFF200]
              cursor-pointer transition-colors duration-300"
            element={Contact}
          >
            Contact
          </Link>

          <a
            href="https://medium.com/@jamesniyongira"
            className="flex text-white hover:text-[#FFF200]
              cursor-pointer transition-colors duration-300"
          >
            Blog
          </a>
        </div>
        {/* Icon Menu Section */}
        <div className="flex items-center space-x-2">
          {/* Register */}
          <a
            href={CV}
            className="flex text-white hover:text-[#FFF200]
              cursor-pointer transition-colors duration-300"
          >
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 21 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 14V17.5C20 20.5577 16 20.5 12 20.5C8 20.5 4 20.5577 4 17.5V14M12 15L12 3M12 15L8 11M12 15L16 11"
                stroke="#fff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <a
            href={CV}
            className="flex text-white hover:text-blue-500
              cursor-pointer transition-colors duration-300"
          >
            Download CV
          </a>
        </div>
      </nav>

      {/* Navbar ------------------------------------*/}
      {/*  */}
      <div className="clouds-wrapper">
        <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient
              id="Gradient1"
              cx="50%"
              cy="50%"
              fx="10%"
              fy="50%"
              r=".5"
            >
              <animate
                attributeName="fx"
                dur="34s"
                values="0%;3%;0%"
                repeatCount="indefinite"
              />
              <stop offset="0%" stopColor="#fff" />
              <stop offset="100%" stopColor="#ff00" />
            </radialGradient>
            <radialGradient
              id="Gradient2"
              cx="50%"
              cy="50%"
              fx="10%"
              fy="50%"
              r=".5"
            >
              <animate
                attributeName="fx"
                dur="23.5s"
                values="0%;3%;0%"
                repeatCount="indefinite"
              />
              <stop offset="0%" stopColor="#0ff" />
              <stop offset="100%" stopColor="#0ff0" />
            </radialGradient>
            <radialGradient
              id="Gradient3"
              cx="50%"
              cy="50%"
              fx="50%"
              fy="50%"
              r=".5"
            >
              <animate
                attributeName="fx"
                dur="21.5s"
                values="0%;3%;0%"
                repeatCount="indefinite"
              />
              <stop offset="0%" stopColor="#F2C94C" />
              <stop offset="100%" stopColor="#f0f0" />
            </radialGradient>
          </defs>
          <rect x={0} y={0} width="100%" height="100%" fill="url(#Gradient1)">
            <animate
              attributeName="x"
              dur="20s"
              values="25%;0%;25%"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              dur="21s"
              values="0%;25%;0%"
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="17s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x={0} y={0} width="100%" height="100%" fill="url(#Gradient2)">
            <animate
              attributeName="x"
              dur="23s"
              values="-25%;0%;-25%"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              dur="24s"
              values="0%;50%;0%"
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="18s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x={0} y={0} width="100%" height="100%" fill="url(#Gradient3)">
            <animate
              attributeName="x"
              dur="25s"
              values="0%;25%;0%"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              dur="26s"
              values="0%;25%;0%"
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="360 50 50"
              to="0 50 50"
              dur="19s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>

        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;

///////////////////////////////

// return (
//   <>
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">
//             <span className="font-xl">Home</span>
//           </Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//       </ul>
//     </nav>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//     </Routes>
//   </>
// );
