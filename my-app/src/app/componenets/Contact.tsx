import React from 'react';
import { SiGmail } from 'react-icons/si';
import { CiMobile3 } from 'react-icons/ci';

const Contacts = () => {
  return (
    <div id="contact" className="pt-32 container px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className="space-y-8">
          <h2 className="text-red-500 text-2xl sm:text-3xl font-bold ">Get In Touch</h2>
          <p className="text-gray-500 text-base sm:text-lg pt-2">
            Drop me an email or message by submitting the form or via email.
          </p>

          <div className="flex gap-3 items-center">
            <SiGmail size={30} />
            <span className="text-base sm:text-lg">muhammadammariqbal2003@gmail.com</span>
          </div>
          <div className="flex gap-3 items-center">
            <CiMobile3 size={30} />
            <span className="text-base sm:text-lg">(+92) 315-2957957</span>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="space-y-8">
          <div className="flex flex-col gap-4">
            {/* Name Input */}
            <label htmlFor="name" className="text-lg">Name</label>
            <input
              type="text"
              id="name"
              className="h-[40px] bg-transparent border border-green-500 p-2 text-base sm:text-lg"
            />
          </div>

          <div className="flex flex-col gap-4">
            {/* Email Input */}
            <label htmlFor="email" className="text-lg">Email</label>
            <input
              type="email"
              id="email"
              className="h-[40px] bg-transparent border border-green-500 p-2 text-base sm:text-lg"
            />
          </div>

          <div className="flex flex-col gap-4">
            {/* Message Input */}
            <label htmlFor="msg" className="text-lg">Message</label>
            <textarea
              id='msg'
              rows={8}
             className="bg-transparent border border-green-500 p-2 text-base sm:text-lg"
            />
          </div>

          <button className="bg-green-500 text-white font-bold p-2 px-6 mt-4">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
