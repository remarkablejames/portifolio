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
                    My name is James Niyongira, I'm a college freshman and an
                    enthusiastic programmer. My interest in coding began during
                    my senior year of high school in 2018, when I wanted to
                    build a small website for my parent's business. Since then,
                    I've experimented with creating websites by editing online
                    templates and using site builders, which has given me the
                    confidence to continue computer science at the advanced
                    level of high school. For years, the entire journey was a
                    roller-coaster ride until I chose to reignite the embers of
                    a burning fire in me to write code by selecting web
                    development as my college programme. Today, I'm on fire, and
                    my coding abilities and techniques are booming. I've gone
                    deep into how modern applications function, exploring many
                    different languages and technologies. I'm currently enrolled
                    in college, but I always enjoy learning things outside of my
                    classes to fill my curiosity, thanks to online learning
                    platforms.
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
