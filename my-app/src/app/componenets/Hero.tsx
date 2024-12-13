import React from 'react'
import Navbar from './Navbar'


const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-[url(/ammar2.png)] bg-left lg:bg-[15%] bg-cover"
      style={{ backgroundSize: "35%" }}
    >
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)] px-4 sm:px-6">
        {/* Left side */}
        <div className="hidden lg:block"></div>

        {/* Right side */}
        <div className="text-sky-600 font-bold leading-tight flex justify-center items-center lg:justify-end lg:items-center">
          <div className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[130px] font-poppins">
            <p className="text-center lg:text-right">It&apos;s me</p>
            <p className="text-center lg:text-right">Ammar</p>
            <p className="text-center lg:text-right">Iqbal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
