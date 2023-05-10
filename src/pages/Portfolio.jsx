import React from "react";
import { AnimatedPage } from "../AnimatedPage";
export const Portfolio = () => {
  return (
    <>
      <div className="clouds   overflow-auto ">
        <div className=" bg-black/40 min-h-full w-full ">
          <AnimatedPage>
            <section
              id="about"
              className="bg-transparent flex  justify-between overflow-hidden "
            >
              {/* component =====================*/}
              <section className="bg-transparent dark:bg-transparent w-full">
                <div className="container px-6 py-10 mx-auto ">
                  <h1 className="text-4xl font-bold text-white  text-center">
                    Things I've <span className="text-[#FFF200]">built</span>
                  </h1>
                  <p className="w-64 text-white font-normal mx-auto text-center mt-2 ">
                    The following projects are under incremental development
                  </p>

                  <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-10 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 w-full">
                    {/* -------------- */}
                    <a
                      href="https://next13-messenger-seven.vercel.app"
                      target="_blank"
                    >
                      <div className="mx-auto flex w-full flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60">
                        {/* img */}
                        <img
                          className="aspect-video w-full rounded-t-2xl object-cover object-center"
                          src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80"
                          alt="img"
                        />
                        {/* text information */}
                        <div className="p-4 min-h-80">
                          <small className="text-blue-400 text-xs">
                            A real time chat app
                          </small>
                          <h1 className="text-2xl font-medium text-slate-600 pb-2">
                            Messenger clone
                          </h1>
                          <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
                            Messenger clone is an app that allows users to chat
                            in real time. It is built with React, Node, Express,
                            and Socket.io.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://movies-app-james-one-green.vercel.app/"
                      target="_blank"
                    >
                      <div className="mx-auto flex w-full flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60">
                        {/* img */}
                        <img
                          className="aspect-video w-full rounded-t-2xl object-cover object-center"
                          src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                          alt="img"
                        />
                        {/* text information */}
                        <div className="p-4 min-h-80">
                          <small className="text-blue-400 text-xs">
                            A video streaming app
                          </small>
                          <h1 className="text-2xl font-medium text-slate-600 pb-2">
                            Netflix clone
                          </h1>
                          <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
                            Netflix clone is a video streaming app that allows a
                            user to browse and watch movies.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://natours-james.herokuapp.com"
                      target="_blank"
                    >
                      <div className="mx-auto flex w-full flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60">
                        {/* img */}
                        <img
                          className="aspect-video w-full rounded-t-2xl object-cover object-center"
                          src="https://images.unsplash.com/photo-1482332486572-10fff1bedfbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                          alt="img"
                        />
                        {/* text information */}
                        <div className="p-4 min-h-80">
                          <small className="text-blue-400 text-xs">
                            A tour-booking web app
                          </small>
                          <h1 className="text-2xl font-medium text-slate-600 pb-2">
                            Natours
                          </h1>
                          <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
                            Natours is a fullstack web application that let's
                            your browse and book tours. Built with Node.js
                          </p>
                        </div>
                      </div>
                    </a>
                    {/* -------------- */}
                    <a
                      href="https://notes-app-james.netlify.app/"
                      target="_blank"
                    >
                      <div className="mx-auto flex w-full flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60">
                        {/* img */}
                        <img
                          className="aspect-video w-full rounded-t-2xl object-cover object-center"
                          src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80"
                          alt="img"
                        />
                        {/* text information */}

                        <div className="p-4 min-h-80">
                          <small className="text-blue-400 text-xs ">
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
                    {/* -------------- */}

                    <a
                      href="https://library-system-james.netlify.app/"
                      target="_blank"
                    >
                      <div className="mx-auto flex w-full flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60">
                        {/* img */}
                        <img
                          className="aspect-video w-full rounded-t-2xl object-cover object-center"
                          src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80"
                          alt="img"
                        />
                        {/* text information */}
                        <div className="p-4 min-h-80">
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
                    {/* -------------- */}
                    <a
                      href="https://video-search-app-james.netlify.app/"
                      target="_blank"
                    >
                      <div className="mx-auto flex w-full flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60">
                        {/* img */}
                        <img
                          className="aspect-video w-full rounded-t-2xl object-cover object-center"
                          src="https://images.unsplash.com/photo-1642726197561-ef7224c054a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                          alt="img"
                        />
                        {/* text information */}
                        <div className="p-4 min-h-80">
                          <small className="text-blue-400 text-xs">
                            A video search web app
                          </small>
                          <h1 className="text-2xl font-medium text-slate-600 pb-2">
                            VidStream
                          </h1>
                          <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
                            VidStream is a video search application that allows
                            you to search for videos. It is built on top of
                            React.
                          </p>
                        </div>
                      </div>
                    </a>
                    {/* -------------- */}
                  </div>
                </div>
              </section>
            </section>
          </AnimatedPage>
        </div>
      </div>
    </>
  );
};
