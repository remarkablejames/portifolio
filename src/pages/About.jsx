import "./home.css";
import Me from "../assets/images/me.jpg";
import { AnimatedPage } from "../AnimatedPage";
function Home() {
  return (
    <>
      <div className="clouds w-full">
        <div className=" bg-black/100 h-full ">
          <AnimatedPage>
            <section
              id="about"
              className="bg-transparent flex items-center justify-around"
            >
              <div className=" flex flex-col items-start justify-center      md:flex-row space-x-6 pt-20  w-full ">
                <div>
                  <h1 className="text-4xl font-bold text-white text-left">
                    About Me
                  </h1>

                  {/* ++++++++++++++++++++++++++++++++++++++++ */}
                  <div className="mt-6">
                    <div>
                      <img
                        src={Me}
                        alt="James Niyongira"
                        className="float-left w-52 h-auto mr-2 mb-4"
                      />
                    </div>
                    <p className="text-justify text-lg font-normal text-white max-w-5xl">
                      My name is James Niyongira, and I am a second-year college
                      student who is deeply passionate about programming. My
                      interest in coding was piqued during my senior year of
                      high school in 2018, when I embarked upon the task of
                      creating a website for my parents' business. I honed my
                      web development skills by leveraging site builders and
                      modifying online templates, which instilled in me the
                      confidence to pursue computer science studies at an
                      advanced level in high school. Subsequently, I elected to
                      major in web development in college, which has resulted in
                      significant advancements in my coding abilities. I enjoy
                      exploring various programming languages and technologies,
                      and continually expand my knowledge through online
                      learning platforms, in addition to my coursework.
                    </p>
                  </div>

                  {/* +++++++++++++++++++++++++++++++++++++++++ */}
                </div>
              </div>
            </section>
          </AnimatedPage>
        </div>
      </div>
    </>
  );
}

export default Home;
