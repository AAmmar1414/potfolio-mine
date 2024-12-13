import React from 'react';

const About = () => {
  return (
    <div id="about" className="container pt-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-6">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-500">
          About Me
        </h2>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed text-lg sm:text-xl md:text-2xl">
          I am a dedicated student at GIAIC, actively pursuing an advanced course in Artificial Intelligence, Web 3.0, and the Metaverse. Alongside my academic endeavors, I am a proficient full-stack web developer with a passion for crafting modern, responsive web applications. Additionally, I am continuously expanding my expertise in Artificial Intelligence, staying at the forefront of technological advancements.
        </p>

        {/* Responsive Gradient Box with Roles */}
        <div className="mt-6 px-6 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-lg inline-block max-w-xs sm:max-w-md md:max-w-lg">
          <span className="text-base sm:text-lg md:text-xl font-semibold">
            Artificial Intelligence | UI/UX Developer | Full Stack Developer
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
