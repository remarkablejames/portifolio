import "./home.css";
import { AnimatedPage } from "../AnimatedPage";
function Home() {
  return (
    <>
      <div className="clouds overflow-scroll">
        <div className=" bg-black/100 h-full w-full ">
          <AnimatedPage>
            <section
              id="about"
              className="bg-transparent flex items-center justify-around overflow-auto"
            >
              <div className="about_me flex  items-center     md:ml-24 md:flex-row space-x-6 pt-20 ">
                <div className="flex flex-col items-start justify-center">
                  <h1 className="text-4xl font-bold text-white text-left">
                    Bring <span className="text-[#FFF200]">good news</span> to
                    my inbox
                  </h1>

                  <div className="text-lg font-normal text-white max-w-2xl mt-6 text-justify ">
                    I am actively seeking a full-time role as a web developer,
                    with proficiency in both front-end and back-end development.
                    I am highly adaptable and have a remarkable aptitude for
                    quickly acquiring new technological proficiencies. If you
                    believe that I may be a suitable candidate for a position
                    within your organization, please do not hesitate to contact
                    me.
                  </div>
                  <div className="text-lg font-normal text-white max-w-2xl mt-6 text-justify ">
                    email: jame0246@algonquinlive.com
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
                Send me an email
              </a>
              {/* +++++++++++++++++++++++ */}

              {/* +++++++++++++++++++++++ */}
            </div>
          </AnimatedPage>
        </div>
      </div>
    </>
  );
}

export default Home;
