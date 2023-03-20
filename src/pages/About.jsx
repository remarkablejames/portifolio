import "./home.css";
import Me from "../assets/images/me.jpg";
import { AnimatedPage } from "../AnimatedPage";
function Home() {
  return (
    <>
      <div className="clouds">
        <div className=" bg-black/100 h-full">
          <AnimatedPage>
            <section
              id="about"
              className="bg-transparent flex items-center justify-around"
            >
              <div className="about_me flex  items-center     md:ml-24 md:flex-row space-x-6 pt-20 ">
                <div className="flex flex-col items-start justify-center">
                  <h1 className="text-4xl font-normal text-white text-left">
                    About Me
                  </h1>
                  <p className="text-lg font-normal text-white max-w-2xl mt-3 text-justify ">
                    My name is James Niyongira. I'm a college freshman who is
                    passionate about programming. I first became interested in
                    coding during my senior year of high school in 2018 when I
                    wanted to create a website for my parent's business. I
                    gained confidence in building websites by using site
                    builders and editing online templates. This experience
                    encouraged me to continue studying computer science at an
                    advanced level in high school. Eventually, I chose to pursue
                    web development as my college program, and my coding skills
                    have greatly improved as a result. I enjoy exploring
                    different programming languages and technologies and
                    continues to learn through online platforms outside of my
                    classes.
                  </p>

                  {/* <AnimatedPage>
                  <button
                    type="button"
                    onClick={() => window.open("./docs/resume.pdf")}
                    className=" bg-[#FFF200] text-black rounded-md px-12 py-2 mt-6 m-2 transition duration-500 ease select-none hover:bg-[#a3ba23]  focus:outline-none focus:shadow-outline"
                  >
                    Download CV
                  </button>
                </AnimatedPage> */}

                  <button
                    type="button"
                    onClick={() => window.open("./docs/resume.pdf")}
                    className=" bg-[#FFF200] text-black rounded-md px-12 py-2 mt-6 m-2 transition duration-500 ease select-none hover:bg-[#a3ba23]  focus:outline-none focus:shadow-outline"
                  >
                    Download CV
                  </button>
                </div>
              </div>

              <div className="w-52 sm:hidden md:inline-block">
                <img src={Me} className=" me w-96 rounded-md" alt="" />
              </div>
            </section>
          </AnimatedPage>
        </div>
      </div>
    </>
  );
}

export default Home;
