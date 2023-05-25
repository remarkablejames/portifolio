import { Route, Routes, Link, useLocation } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
const App = () => {
  const location = useLocation();
    useEffect(() => {
      // redirect to github home page
        setTimeout(() => {
          window.location.href = "https://remarkablejames.github.io/remarkablejames/";
        }, 2000);
    }, [])

  return (
      <div className=" h-screen flex  justify-center items-center bg-black">
      <div className="spinner"></div>
      </div>
  );
};

export default App;

