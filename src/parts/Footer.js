/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import BrandIcon from 'parts/BrandIcon';
import Button from 'elements/Button';

export default function Footer() {
  return (
    <div className="bg-gray-50 border-t border-gray-200 pb-6">
      <div className="container flex-col mx-auto ">
        <div className="flex flex-col sm:flex-row mt-8 justify-center">
          <div className="w-1/2 flex-col ml-16 mr-8">
            <BrandIcon />
            <p className="w-full text-lg text-gray-400 font-light">
              Growing Your Business
              {' '}
              <br />
              Is Our Calling
            </p>
          </div>
          {/* <div className="w-1/3 mt-0 ml-16 mr-0 sm:ml-0 sm:mr-5">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">
              Office
            </h1>
            <p className="text-lg text-gray-400 font-light">
              admin@atomotos.com
            </p>
            <p className="text-lg text-gray-400 font-light">
              in@atomotos.com
            </p>
            <p className="text-lg text-gray-400 font-light">
              atomotosteam@gmail.com
            </p>
            <p className="text-lg text-gray-400 font-light">
              Klaten, Central Java, Indonesia
            </p>
          </div> */}
          <div className="w-1/2 ml-16 sm:ml-0 mt-0">
            <h1 className="text-theme-blue pt-4 pb-2">
              Contact me
            </h1>
            <a href="https://discord.gg/sT3D6MY7" target="_blank" className="flex text-lg font-light hover:underline" rel="noreferrer">
              <span className="text-black-400">Discord:&nbsp;</span>
              <span className="text-gray-400">!Brain$torm#0993</span>
            </a>
            <a href="https://t.me/TeckTinker7" target="_blank" className="flex text-lg font-light hover:underline" rel="noreferrer">
              <span className="text-black-400">Telegram:&nbsp;</span>
              <span className="text-gray-400">TeckTinker7</span>
            </a>
            <a href="https://github.com/Backendeng" target="_blank" className="flex text-lg font-light hover:underline" rel="noreferrer">
              <span className="text-black-400">Github:&nbsp;</span>
              <span className="text-gray-400">Backendeng</span>
            </a>
          </div>
        </div>
        <div className="flex-col text-center mt-7">
          <p className="text-lg text-gray-400 font-light">
            Copyright 2021 - All rights reserved - FriendShip
          </p>
          <div className="flex-row">
            <p className="inline-block text-lg text-gray-400 font-light">
              Made with &#x2764; by&nbsp;
            </p>
            <Button href="https://github.com/CryptoBrainStorm0417" type="link" target="_blank" className="text-lg text-theme-purple font-light" isExternal>
              Naoki Oda
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
