/* eslint-disable no-useless-escape */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';

import Fade from 'react-reveal/Fade';
import * as emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Form from 'elements/Form';
import Button from 'elements/Button';

export default function DiscussForm(props) {
  const { data, resetForm } = props;

  const submitEmail = () => {
    const {
      name, company, email, phone, projectIdea,
    } = data;

    const templateParams = {
      from_name: `${name} - ${company} ( ${phone} - ${email} )`,
      to_name: 'Racxstudio',
      message: projectIdea,
    };

    if (
      name !== ''
            && company !== ''
            && email !== ''
            && phone !== ''
            && projectIdea !== ''
    ) {
      emailjs.send(
        'service_i985z5i',
        'template_oz7gwph',
        templateParams,
        'plSRe6JS8yrmKDToc',
      )
        .then(() => {
          toast.success('Success! we\'\ll get back to you soon. Thank you!');
          resetForm();
        }, (error) => {
          toast.error(error);
        });
    } else {
      toast.error('Please fill out the blank form.');
    }
  };

  return (
    <section className="flex flex-col container mx-auto mt-10 justify-center">
      <Fade bottom>
        <h1 className="text-5xl text-theme-blue text-center font-bold">Lets Discuss</h1>

        <p className="font-light text-lg text-gray-400 text-center mb-12">          
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Please fill out the form below to discuss your project and I'll get back to you in less than 24 hours.
        </p>

        <div className="flex flex-col">
          <div className="flex flex-col sm:flex-row mx-auto">
            <Form
              id="name"
              name="name"
              type="text"
              value={data.name}
              placeholder="Your name"
              className=""
              onChange={props.onChange}
            />
            <Form
              id="company"
              name="company"
              type="text"
              value={data.company}
              placeholder="Your company"
              className=""
              onChange={props.onChange}
            />
          </div>

          <div className="flex flex-col sm:flex-row mx-auto">
            <Form
              id="email"
              name="email"
              type="email"
              value={data.email}
              placeholder="Your email address"
              className=""
              onChange={props.onChange}
            />
            <Form
              id="phone"
              name="phone"
              type="tel"
              value={data.phone}
              placeholder="Your contact number"
              className=""
              onChange={props.onChange}
            />
          </div>

          <div className="mx-auto">
            <Form
              id="projectIdea"
              name="projectIdea"
              type="textarea"
              value={data.projectIdea}
              placeholder="Explain about your project idea"
              className=""
              onChange={props.onChange}
            />
          </div>

          <Button
            className="text-xl mx-auto px-12 py-3 mt-5 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple border-purple-800 transition duration-200 focus:outline-none"
            type="button"
            onClick={submitEmail}
          >
            Submit
          </Button>

        </div>

        <h1 className="text-5xl text-theme-blue text-center font-bold mt-10">Contact me</h1>

        <div className="flex flex-col">
          <a href="https://discord.gg/sT3D6MY7" className="flex flex-col sm:flex-row mx-auto mt-3">
            <h2 className="text-2xl text-gray-600"> Discord : !Brain$torm#0993  </h2> 
          </a>
          <a href="https://t.me/TeckTinker7" className="flex flex-col sm:flex-row mx-auto mt-3">
            <h2 className="text-2xl text-gray-600"> Telegram :  TeckTinker7 </h2> 
          </a>
          <a href="https://join.skype.com/invite/q1lmqTI2gKRs " className="flex flex-col sm:flex-row mx-auto mt-3">
            <h2 className="text-2xl text-gray-600"> Skype : live:.cid.7e1359529f3c486f  </h2> 
          </a>
          <a href="tel:+18564344441" className="flex flex-col sm:flex-row mx-auto mt-3">
            <h2 className="text-2xl text-gray-600"> Phone : +1 (856) 434 - 4441 </h2> 
          </a>
        </div>

      </Fade>

      <ToastContainer />

    </section>
  );
}
