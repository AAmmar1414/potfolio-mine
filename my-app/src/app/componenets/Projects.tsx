import React from 'react';
import Heading from './Heading';
import Card from './Card';

const data = [
  {
    id: 0,
    title: "ATM Machine",
    desc: "A TypeScript-based project to run ATM functions",
    img: "/Capture.JPG",
    tags: ["TypeScript", "CSS", "Node", "Java"],
  },
  {
    id: 1,
    title: "FB Login Page",
    desc: "A next js-based project using typescript, HTML and CSS ",
    img: "/fb.png",
    tags: ["TypeScript", "CSS", "Node", "Javascript"],
  },

];

const Projects = () => {
  return (
    <div id="projects" className="container pt-32 px-4 sm:px-6 lg:px-8">
      <Heading title="My Projects" />

      <div className=" grid gap-6 sm:gap-8 md:gap-10 xl:gap-12 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
