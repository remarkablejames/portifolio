import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
const App = () => {
  return (
    <div className=" h-[100vh]   bg-zinc-900">
      <div className=" bg-zinc-900">
        <div className=" flex items-center justify-between sm:mx-12 md:mx-12 py-4 ">
          <div className="flex flex-row items-center space-x-3  ">
            <a href="www.google.com" className="text-2xl font-bold text-white">
              James
            </a>
          </div>

          <a
            href="mailto:jame0246@algonquinlive.com"
            className="  text-lg font-bold text-white  hover:text-yellow transition-colors duration-300"
          >
            Hire Me <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
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
