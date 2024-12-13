import React from 'react'





const Skills = () => {
  return (
    <div id="skills" className="container pt-32 px-4 sm:px-6 lg:px-8">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-400">
            Technologies I Work With
          </h2>
          <p className="text-gray-400 pt-4 leading-relaxed">
            I have experience working with a variety of modern technologies, including Node.js, JavaScript, HTML/CSS, React, and more.
          </p>
        </div>

        {/* Technology Section 1 */}
        <div className="space-y-4">
          {['TypeScript', 'React.js', 'Next.js'].map((tech) => (
            <div
              key={tech}
              className="text-center bg-gradient-to-r from-blue-500 to-sky-600 text-white font-semibold py-2 px-4 rounded-md shadow-lg w-full sm:max-w-[300px] mx-auto"
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Technology Section 2 */}
        <div className="space-y-4">
          {['Tailwind', 'CSS', 'Node.js'].map((tech) => (
            <div
              key={tech}
              className="text-center bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold py-2 px-4 rounded-md shadow-lg w-full sm:max-w-[300px] mx-auto"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;



