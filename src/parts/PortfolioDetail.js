/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';

import Fade from 'react-reveal/Fade';

import NotFound from 'assets/images/NotFound.png';

import Button from 'elements/Button';

export default function PortfolioDetail({ data }) {
  if (data === null) {
    return (
      <section className="container mx-auto">
        <Fade bottom>
          <div className="flex flex-col w-full justify-center">
            <div className="flex w-full justify-center">
              <img src={NotFound} alt="Not Found" className="sm:w-3/4 xl:w-5/12 mt-5" />
            </div>
            <h1 className="text-theme-blue text-2xl text-center mt-5">
              Project Not Found
            </h1>
            <div className="flex justify-center">
              <Button href="/project" type="link" className="flex w-30 h-10 px-5 mt-5 bg-theme-blue text-white items-center rounded transform transition duration-500 hover:bg-gray-900">
                Go Back
              </Button>
            </div>
          </div>
        </Fade>
      </section>
    );
  }

  return (
    <section className="container mx-auto">
      <Fade bottom>
        <Button type="link" href="/project" className="flex w-40 h-8 text-lg items-center ml-6 sm:ml-20 mt-8 font-light text-gray-400 hover:underline">
          <svg className="w-5 h-5 text-gray-400 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          See All Project
        </Button>
      </Fade>

      {
                data.map((item) => (
                  <div className="flex flex-col mt-8 justify-center">
                    <Fade bottom>
                      <h1 className="text-5xl text-theme-blue text-center font-bold">{item.title}</h1>
                      <p className="font-light text-xl text-gray-400 text-center mb-10">
                        {item.type}
                      </p>
                      {/* <p className="font-light text-xl italic text-gray-400 text-center mb-10">
                        <Button
                          style={{
                            color: 'white', backgroundColor: '#505050', borderRadius: '6px', fontSize: '18px', marginTop: '30px', minHeight: '35px', marginBottom: 'auto', padding: '15px 80px 16px', fontWeight: '700', fontStyle: 'initial',
                          }}
                          type="link"
                          href={item.credit}
                          target="_blank"
                          className="text-theme-purple"
                          isExternal
                        >
                          Live Preview
                        </Button>
                      </p> */}
                    </Fade>

                    <Fade bottom delay={300 * 1}>
                      <div className="flex justify-center xl:mb-6">
                        <img src={`../${item.imageUrl}`} alt="Project" className="flex w-4/5 sm:w-3/6" />
                      </div>
                    </Fade>

                    {item.loom !== ''
                      ? (
                        <Fade bottom>
                          <h2 className="flex justify-center text-3xl text-theme-blue font-bold mt-6">
                            Screen Video
                          </h2>
                          <div id="loomID" className="flex justify-center xl:mb-6 mt-3">
                            <div id="loom" className="w-4/5 sm:w-4/6">
                              <div style={{
                                position: 'relative', paddingBottom: '50.502793296089386%', height: 0, width: '100%',
                              }}
                              >
                                <iframe
                                  title="loom"
                                  src={`${item.loom}?autoplay=1`}
                                  frameBorder={0}
                                  webkitallowfullscreen
                                  mozallowfullscreen
                                  allowFullScreen
                                  style={{
                                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </Fade>
                      )
                      : ''}

                    {item.loom1 !== ''
                      ? (
                        <Fade bottom>
                          <div id="loomID" className="flex justify-center xl:mb-6 mt-3">
                            <div id="loom" className="w-4/5 sm:w-4/6">
                              <div style={{
                                position: 'relative', paddingBottom: '50.502793296089386%', height: 0, width: '100%',
                              }}
                              >
                                <iframe
                                  title="loom1"
                                  src={`${item.loom1}?autoplay=1`}
                                  frameBorder={0}
                                  webkitallowfullscreen
                                  mozallowfullscreen
                                  allowFullScreen
                                  style={{
                                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </Fade>
                      )
                      : ''}

                    {item.play !== '' ? (
                      <Fade bottom>
                        <h2 className="flex justify-center text-3xl text-theme-blue font-bold mt-6">
                          Live Preview
                        </h2>
                        <div id="PlayID" className="flex justify-center xl:mb-6 mt-3">
                          <div id="play" className="w-4/5 sm:w-4/6">
                            <div style={{
                              position: 'relative', paddingBottom: '50.502793296089386%', height: 0, width: '100%',
                            }}
                            >
                              <iframe
                                title="play"
                                src={item.play}
                                style={{
                                  position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </Fade>
                    )
                      : ''}

                    <Fade bottom delay={300 * 1}>
                      <div className="flex flex-col mt-16 mb-12 mx-8 sm:mx-16 xl:mx-28">
                        <h1 className="text-3xl text-theme-blue font-bold mb-3">
                          Project Detail
                        </h1>

                        <p className="font-light text-lg text-gray-400 text-justify">
                          {item.detail}
                        </p>
                      </div>

                      <div className="flex flex-col mx-8 sm:mx-16 xl:mx-28">
                        <h1 className="text-3xl text-theme-blue font-bold mb-5">
                          Project Responsibilities
                        </h1>

                        <div className="flex flex-row ml-1">
                          {
                            item.responsibility.map((responsibility) => (
                              <div className="mr-4 px-6 py-3 text-theme-purple border border-theme-purple rounded-full shadow-lg">
                                {responsibility}
                              </div>
                            ))
                        }
                        </div>
                      </div>
                    </Fade>
                  </div>
                ))
            }
    </section>
  );
}
