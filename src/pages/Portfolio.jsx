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
              className="bg-transparent flex  justify-between overflow-auto "
            >
              <div className="about_me flex  items-center     md:ml-0  md:flex-row space-x-6 pt-20 ">
                <div className="flex flex-col items-start justify-center">
                  <h1 className="text-4xl font-normal text-white text-left ml-12  w-full">
                    Portfolio
                  </h1>

                  <div className=" text-white max-w-4xl mt-6 text-justify bg-transparent flex  space-x-6 p-12 ">
                    <a
                      href="https://natours-james.herokuapp.com"
                      target="_blank"
                    >
                      <div className="mx-auto flex w-96 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60">
                        {/* img */}
                        <img
                          className="aspect-video w-96 rounded-t-2xl object-cover object-center"
                          src="https://images.unsplash.com/photo-1482332486572-10fff1bedfbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                          alt="img"
                        />
                        {/* text information */}
                        <div className="p-4">
                          <small className="text-blue-400 text-xs">
                            A tour-booking web app
                          </small>
                          <h1 className="text-2xl font-medium text-slate-600 pb-2">
                            Natours
                          </h1>
                          <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
                            Natours is a fullstack web application that let's
                            your browse and book tours.
                          </p>
                        </div>
                      </div>
                    </a>
                    {/* ////////////////// */}

                    <a
                      href="https://notes-app-james.netlify.app/"
                      target="_blank"
                    >
                      <div className="mx-auto flex w-96 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60">
                        {/* img */}
                        <img
                          className="aspect-video w-96 rounded-t-2xl object-cover object-center"
                          src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80"
                          alt="img"
                        />
                        {/* text information */}

                        <div className="p-4">
                          <small className="text-blue-400 text-xs">
                            A notes-taking web app
                          </small>
                          <h1 className="text-2xl font-medium text-slate-600 pb-2">
                            Reactive Notes
                          </h1>
                          <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
                            This is an application built on top of React and
                            implements all the fundermental concepts of
                            front-end.
                          </p>
                        </div>
                      </div>
                    </a>
                    {/* ////////////////// */}
                    <a
                      href="https://library-system-james.netlify.app/"
                      target="_blank"
                    >
                      <div className="mx-auto flex w-96 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60">
                        {/* img */}
                        <img
                          className="aspect-video w-96 rounded-t-2xl object-cover object-center"
                          src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80"
                          alt="img"
                        />
                        {/* text information */}
                        <div className="p-4">
                          <small className="text-blue-400 text-xs">
                            A library management web app
                          </small>
                          <h1 className="text-2xl font-medium text-slate-600 pb-2">
                            LibraWave
                          </h1>
                          <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
                            LibraWave is a library management system that allows
                            you to manage your library.
                          </p>
                        </div>
                      </div>
                    </a>
                    {/* ////////////////// */}
                    <a
                      href="https://video-search-app-james.netlify.app/"
                      target="_blank"
                    >
                      <div className="mx-auto flex w-96 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60">
                        {/* img */}
                        <img
                          className="aspect-video w-96 rounded-t-2xl object-cover object-center"
                          src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                          alt="img"
                        />
                        {/* text information */}
                        <div className="p-4">
                          <small className="text-blue-400 text-xs">
                            A video search web app
                          </small>
                          <h1 className="text-2xl font-medium text-slate-600 pb-2">
                            VidStream
                          </h1>
                          <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
                            VidStream is a video search application that allows
                            you to search for videos.
                          </p>
                        </div>
                      </div>
                    </a>
                    {/* ///////////////// */}
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
