import React from "react";
import { AnimatedPage } from "../AnimatedPage";
export const Portfolio = () => {
  return (
    <>
      <div className="clouds overflow-hidden">
        <div className=" bg-black/40 h-full w-full ">
          <AnimatedPage>
            <section
              id="about"
              className="bg-transparent flex items-center justify-around overflow-auto"
            >
              <div className="about_me flex  items-center     md:ml-24 md:flex-row space-x-6 pt-20 ">
                <div className="flex flex-col items-start justify-center">
                  <h1 className="text-4xl font-normal text-white text-left">
                    Portfolio
                  </h1>

                  <div className=" text-white max-w-4xl mt-6 text-justify bg-transparent flex  space-x-6 p-12 ">
                    <div className="mx-auto flex w-96 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60">
                      {/* img */}
                      <img
                        className="aspect-video w-96 rounded-t-2xl object-cover object-center"
                        src="https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="img"
                      />
                      {/* text information */}
                      <div className="p-4">
                        <small className="text-blue-400 text-xs">
                          Automobile company
                        </small>
                        <h1 className="text-2xl font-medium text-slate-600 pb-2">
                          Dodge Car
                        </h1>
                        <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
                          Dodge is an American brand of automobiles and a
                          division of Stellantis, based in Auburn Hills,
                          Michigan..
                        </p>
                      </div>
                    </div>
                    {/* ////////////////// */}
                    <div className="mx-auto flex w-96 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60">
                      {/* img */}
                      <img
                        className="aspect-video w-96 rounded-t-2xl object-cover object-center"
                        src="https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="img"
                      />
                      {/* text information */}
                      <div className="p-4">
                        <small className="text-blue-400 text-xs">
                          Automobile company
                        </small>
                        <h1 className="text-2xl font-medium text-slate-600 pb-2">
                          Dodge Car
                        </h1>
                        <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
                          Dodge is an American brand of automobiles and a
                          division of Stellantis, based in Auburn Hills,
                          Michigan..
                        </p>
                      </div>
                    </div>

                    {/* ////////////////// */}
                  </div>
                </div>
              </div>
            </section>
          </AnimatedPage>
        </div>
      </div>
    </>
  );
};
