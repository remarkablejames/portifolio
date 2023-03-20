import "./home.css";
import { AnimatedPage } from "../AnimatedPage";
function Home() {
  return (
    <>
      <div className="clouds overflow-hidden">
        <div className=" bg-black/100 h-full w-full ">
          <AnimatedPage>
            <section
              id="about"
              className="bg-transparent flex items-center justify-around overflow-auto"
            >
              <div className="about_me flex  items-center     md:ml-24 md:flex-row space-x-6 pt-20 ">
                <div className="flex flex-col items-start justify-center">
                  <h1 className="text-4xl font-normal text-white text-left">
                    Get In Touch
                  </h1>

                  <div className="text-lg font-normal text-white max-w-2xl mt-6 text-justify ">
                    Currently I'm looking for a full-time position as a web
                    developer, front-end or the back-end, I'm open to both and
                    I'm incredibly able to learn new technologies at a light
                    speed . If you have a position that you think I would be a
                    good fit for, please feel free to contact me.
                  </div>
                </div>
              </div>
            </section>
            <div className="flex items-center justify-center mt-28">
              <a
                type="button"
                className=" bg-[#FFF200] text-black rounded-md px-12 py-2 m-2 transition duration-500 ease select-none hover:bg-[#a3ba23]  focus:outline-none focus:shadow-outline"
                href="mailto:jame0246@algonquinlive.com"
              >
                Reach Out To Me
              </a>
            </div>
          </AnimatedPage>
        </div>
      </div>
    </>
  );
}

export default Home;
