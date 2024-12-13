import React from 'react';

interface PropsType {
  title: string;
}

const Heading: React.FC<PropsType> = ({ title }) => {
  return (
    <div className="text-center text-2xl sm:text-3xl md:text-4xl pb-6">
      <p className="border-b-4 border-gray-800 inline-block pb-2 px-4">
        {title}
      </p>
    </div>
  );
};

export default Heading;