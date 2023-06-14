/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import Fade from 'react-reveal/Fade';
import Button from 'elements/Button';

export default function AllTeam({ data }) {
  return (
    <section className="container mx-0 sm:mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-32 sm:gap-14 lg:gap-10 mx-16 justify-items-center">
        {
                    data.map((item, index) => (
                      <Fade bottom delay={200 * index}>
                        <div>
                          <div className="flex flex-col w-44 h-60 sm:w-56 sm:h-72 rounded-xl shadow-xl border border-light-theme-purple justify-center transform transition duration-500 hover:scale-105">
                            <div className="flex justify-center xl:mb-5">
                              <img src={item.imageUrl} alt="Team Member" className="flex w-32 h-32 rounded-full" />
                            </div>
                            <h2 className="text-theme-blue text-center text-xl">{item.name}</h2>
                            <p className="font-light text-gray-400 text-center mb-3">{item.position}</p>
                            <Button href={item.linkaddress} type="link" target="_blank" className="flex text-lg text-gray-400 font-light hover:underline justify-center" isExternal>
                              LinkAddress
                            </Button>
                          </div>
                        </div>
                      </Fade>
                    ))
                }
      </div>
    </section>
  );
}
