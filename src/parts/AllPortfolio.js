/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';

import Fade from 'react-reveal/Fade';
import {
  Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';
import { StyleSheet, css } from 'aphrodite';

import Button from 'elements/Button';

const AllPortCss = StyleSheet.create({
  TapSyle: {
    display: 'flex',
    overflowX: 'scroll',
    overflowY: 'hidden',
    height: '60px',
    '@media (min-width: 767px)': {
      overflowX: 'hidden',
    },
  },
});

export default function AllPortfolio({ data }) {
  const AllGames = data;
  const SVgames = data.filter((item) => item.type === 'Strategy Video Game');
  const ShootingGame = data.filter((item) => item.type === 'Shooting Game');
  const RacingRunnerGame = data.filter((item) => item.type === 'Racing and Runner');
  const MobileGame = data.filter((item) => item.type === 'Mobile Game');
  const NFTGame = data.filter((item) => item.type === 'NFT Game');
  const TurnBaseGame = data.filter((item) => item.type === 'Turn Base Game');
  const OtherGame = data.filter((item) => item.type === 'Other Game');
  // const TabStyle = {
  //   '@media (max-width: 500px)': {
  //     display: 'none',
  //   },
  // };

  return (
    <Fade bottom>
      <section className="container mx-auto">

        <Tabs className="flex flex-col px-4">
          <TabList>
            <div className={css(AllPortCss.TapSyle)}>
              <Tab>
                <button className="font-normal px-5 py-2 mr-3 text-theme-purple text-lg border border-theme-purple rounded-full transition duration-300 hover:bg-theme-purple hover:text-white focus:outline-none focus:bg-theme-purple focus:text-white">All</button>
              </Tab>
              <Tab>
                <button className="font-normal px-5 py-2 mr-3 text-theme-purple text-lg border border-theme-purple rounded-full transition duration-300 hover:bg-theme-purple hover:text-white focus:outline-none focus:bg-theme-purple focus:text-white">Strategy</button>
              </Tab>
              <Tab>
                <button className="font-normal px-5 py-2 mr-3 text-theme-purple text-lg border border-theme-purple rounded-full transition duration-300 hover:bg-theme-purple hover:text-white focus:outline-none focus:bg-theme-purple focus:text-white">Shooting</button>
              </Tab>
              <Tab>
                <button className="font-normal px-5 py-2 mr-3 text-theme-purple text-lg border border-theme-purple rounded-full transition duration-300 hover:bg-theme-purple hover:text-white focus:outline-none focus:bg-theme-purple focus:text-white">Racing&Runner</button>
              </Tab>
              <Tab>
                <button className="font-normal px-5 py-2 mr-3 text-theme-purple text-lg border border-theme-purple rounded-full transition duration-300 hover:bg-theme-purple hover:text-white focus:outline-none focus:bg-theme-purple focus:text-white">Mobile</button>
              </Tab>
              <Tab>
                <button className="font-normal px-5 py-2 mr-3 text-theme-purple text-lg border border-theme-purple rounded-full transition duration-300 hover:bg-theme-purple hover:text-white focus:outline-none focus:bg-theme-purple focus:text-white">NFT</button>
              </Tab>
              <Tab>
                <button className="font-normal px-5 py-2 mr-3 text-theme-purple text-lg border border-theme-purple rounded-full transition duration-300 hover:bg-theme-purple hover:text-white focus:outline-none focus:bg-theme-purple focus:text-white">TurnBase</button>
              </Tab>
              <Tab>
                <button className="font-normal px-5 py-2 mr-3 text-theme-purple text-lg border border-theme-purple rounded-full transition duration-300 hover:bg-theme-purple hover:text-white focus:outline-none focus:bg-theme-purple focus:text-white">Other</button>
              </Tab>
            </div>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-2 xl:gap-8 justify-items-center">
              {
                                AllGames.map((item, index) => (
                                  <Fade bottom delay={100 * index}>
                                    <Button type="link" href={`/project/${item.id}`}>
                                      <div className="group rounded-2xl shadow-xl w-auto w-11/12 m-3 transform transition duration-500 hover:scale-110 portofolio-card">
                                        <div className="relative">
                                          <img src={item.imageUrl} alt="Portfolio" className="rounded-t-2xl z-0" />
                                          <div className="absolute flex w-full h-full top-0 opacity-0 bg-black justify-center rounded-t-2xl rounded-b img-hover">
                                            <button className="focus:outline-none">
                                              <svg className="w-20 h-20 text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                              </svg>
                                            </button>
                                          </div>
                                        </div>
                                        <div className="py-4">
                                          <h2 className="text-theme-blue text-center text-xl">{item.title}</h2>
                                          <p className="font-light text-gray-400 text-center">{item.type}</p>
                                        </div>
                                      </div>
                                    </Button>
                                  </Fade>
                                ))
                            }
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-2 xl:gap-8 justify-items-center">
              {
                                SVgames.map((item, index) => (
                                  <Fade bottom delay={100 * index}>
                                    <Button type="link" href={`/project/${item.id}`}>
                                      <div className="group rounded-2xl shadow-xl w-auto w-11/12 m-3 transform transition duration-500 hover:scale-110 portofolio-card">
                                        <div className="relative">
                                          <img src={item.imageUrl} alt="Portfolio" className="rounded-t-2xl z-0" />
                                          <div className="absolute flex w-full h-full top-0 opacity-0 bg-black justify-center rounded-t-2xl rounded-b img-hover">
                                            <button className="focus:outline-none">
                                              <svg className="w-20 h-20 text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                              </svg>
                                            </button>
                                          </div>
                                        </div>
                                        <div className="py-4">
                                          <h2 className="text-theme-blue text-center text-xl">{item.title}</h2>
                                          <p className="font-light text-gray-400 text-center">{item.type}</p>
                                        </div>
                                      </div>
                                    </Button>
                                  </Fade>
                                ))
                            }
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-2 xl:gap-8 justify-items-center">
              {
                                ShootingGame.map((item, index) => (
                                  <Fade bottom delay={500 * index}>
                                    <Button type="link" href={`/project/${item.id}`}>
                                      <div className="group rounded-2xl shadow-xl w-auto w-11/12 m-3 transform transition duration-500 hover:scale-110 portofolio-card">
                                        <div className="relative">
                                          <img src={item.imageUrl} alt="Portfolio" className="rounded-t-2xl z-0" />
                                          <div className="absolute flex w-full h-full top-0 opacity-0 bg-black justify-center rounded-t-2xl rounded-b img-hover">
                                            <button className="focus:outline-none">
                                              <svg className="w-20 h-20 text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                              </svg>
                                            </button>
                                          </div>
                                        </div>
                                        <div className="py-4">
                                          <h2 className="text-theme-blue text-center text-xl">{item.title}</h2>
                                          <p className="font-light text-gray-400 text-center">{item.type}</p>
                                        </div>
                                      </div>
                                    </Button>
                                  </Fade>
                                ))
                            }
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-2 xl:gap-8 justify-items-center">
              {
                                RacingRunnerGame.map((item, index) => (
                                  <Fade bottom delay={500 * index}>
                                    <Button type="link" href={`/project/${item.id}`}>
                                      <div className="group rounded-2xl shadow-xl w-auto w-11/12 m-3 transform transition duration-500 hover:scale-110 portofolio-card">
                                        <div className="relative">
                                          <img src={item.imageUrl} alt="Portfolio" className="rounded-t-2xl z-0" />
                                          <div className="absolute flex w-full h-full top-0 opacity-0 bg-black justify-center rounded-t-2xl rounded-b img-hover">
                                            <button className="focus:outline-none">
                                              <svg className="w-20 h-20 text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                              </svg>
                                            </button>
                                          </div>
                                        </div>
                                        <div className="py-4">
                                          <h2 className="text-theme-blue text-center text-xl">{item.title}</h2>
                                          <p className="font-light text-gray-400 text-center">{item.type}</p>
                                        </div>
                                      </div>
                                    </Button>
                                  </Fade>
                                ))
                            }
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-2 xl:gap-8 justify-items-center">
              {
                                MobileGame.map((item, index) => (
                                  <Fade bottom delay={100 * index}>
                                    <Button type="link" href={`/project/${item.id}`}>
                                      <div className="group rounded-2xl shadow-xl w-auto w-11/12 m-3 transform transition duration-500 hover:scale-110 portofolio-card">
                                        <div className="relative">
                                          <img src={item.imageUrl} alt="Portfolio" className="rounded-t-2xl z-0" />
                                          <div className="absolute flex w-full h-full top-0 opacity-0 bg-black justify-center rounded-t-2xl rounded-b img-hover">
                                            <button className="focus:outline-none">
                                              <svg className="w-20 h-20 text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                              </svg>
                                            </button>
                                          </div>
                                        </div>
                                        <div className="py-4">
                                          <h2 className="text-theme-blue text-center text-xl">{item.title}</h2>
                                          <p className="font-light text-gray-400 text-center">{item.type}</p>
                                        </div>
                                      </div>
                                    </Button>
                                  </Fade>
                                ))
                            }
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-2 xl:gap-8 justify-items-center">
              {
                                NFTGame.map((item, index) => (
                                  <Fade bottom delay={500 * index}>
                                    <Button type="link" href={`/project/${item.id}`}>
                                      <div className="group rounded-2xl shadow-xl w-auto w-11/12 m-3 transform transition duration-500 hover:scale-110 portofolio-card">
                                        <div className="relative">
                                          <img src={item.imageUrl} alt="Portfolio" className="rounded-t-2xl z-0" />
                                          <div className="absolute flex w-full h-full top-0 opacity-0 bg-black justify-center rounded-t-2xl rounded-b img-hover">
                                            <button className="focus:outline-none">
                                              <svg className="w-20 h-20 text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                              </svg>
                                            </button>
                                          </div>
                                        </div>
                                        <div className="py-4">
                                          <h2 className="text-theme-blue text-center text-xl">{item.title}</h2>
                                          <p className="font-light text-gray-400 text-center">{item.type}</p>
                                        </div>
                                      </div>
                                    </Button>
                                  </Fade>
                                ))
                            }
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-2 xl:gap-8 justify-items-center">
              {
                                TurnBaseGame.map((item, index) => (
                                  <Fade bottom delay={100 * index}>
                                    <Button type="link" href={`/project/${item.id}`}>
                                      <div className="group rounded-2xl shadow-xl w-auto w-11/12 m-3 transform transition duration-500 hover:scale-110 portofolio-card">
                                        <div className="relative">
                                          <img src={item.imageUrl} alt="Portfolio" className="rounded-t-2xl z-0" />
                                          <div className="absolute flex w-full h-full top-0 opacity-0 bg-black justify-center rounded-t-2xl rounded-b img-hover">
                                            <button className="focus:outline-none">
                                              <svg className="w-20 h-20 text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                              </svg>
                                            </button>
                                          </div>
                                        </div>
                                        <div className="py-4">
                                          <h2 className="text-theme-blue text-center text-xl">{item.title}</h2>
                                          <p className="font-light text-gray-400 text-center">{item.type}</p>
                                        </div>
                                      </div>
                                    </Button>
                                  </Fade>
                                ))
                            }
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-2 xl:gap-8 justify-items-center">
              {
                                OtherGame.map((item, index) => (
                                  <Fade bottom delay={500 * index}>
                                    <Button type="link" href={`/project/${item.id}`}>
                                      <div className="group rounded-2xl shadow-xl w-auto w-11/12 m-3 transform transition duration-500 hover:scale-110 portofolio-card">
                                        <div className="relative">
                                          <img src={item.imageUrl} alt="Portfolio" className="rounded-t-2xl z-0" />
                                          <div className="absolute flex w-full h-full top-0 opacity-0 bg-black justify-center rounded-t-2xl rounded-b img-hover">
                                            <button className="focus:outline-none">
                                              <svg className="w-20 h-20 text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                              </svg>
                                            </button>
                                          </div>
                                        </div>
                                        <div className="py-4">
                                          <h2 className="text-theme-blue text-center text-xl">{item.title}</h2>
                                          <p className="font-light text-gray-400 text-center">{item.type}</p>
                                        </div>
                                      </div>
                                    </Button>
                                  </Fade>
                                ))
                            }
            </div>
          </TabPanel>

        </Tabs>

      </section>
    </Fade>
  );
}
