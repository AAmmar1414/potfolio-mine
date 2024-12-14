import React from 'react';

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-[url(/ammar2.png)] bg-left lg:bg-[15%] bg-cover"
      style={{ backgroundSize: "35%" }}
    >
      <div className="relative container grid grid-cols-1 lg:grid-cols-2 h-[calc(100vh-60px)] px-4 sm:px-6">
        {/* Left side */}
        <div className="flex justify-center items-center mb-8 lg:mb-0">
          {/* Optional content for left side on larger screens */}
        </div>

        {/* Right side */}
        <div className="absolute lg:relative lg:right-0 right-8 flex flex-col justify-center items-center lg:items-start text-sky-600 font-bold leading-tight">
          <div className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[130px] font-poppins text-center lg:text-left">
            <p>It&apos;s me</p>
            <p>Ammar</p>
            <p>Iqbal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
