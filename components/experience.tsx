import React from "react";

interface Props {}

const Experience = (props: Props) => {
  return (
    <div className=" md:px-0 px-6 ">
      <div className="my-8">
        <h2 className="text-2xl font-bold pb-6 border-dark-blue dark:border-blue  border-b-[1px]">
          Experience
        </h2>
        <ul className="mt-8 list-disc pl-8">
          <li>
            Experienced in the development of the product from the scratch idea
            to release the MVP product.
          </li>
          <li>
            Good software design skills, especially in object-oriented design.
          </li>
          <li>Strong communication and collaboration skills.</li>
        </ul>
      </div>
      <div className="my-8">
        <h2 className="text-2xl font-bold pb-6 border-dark-blue dark:border-blue  border-b-[1px]">
          Skills
        </h2>
        <ul className="mt-8">
          <li>
            <strong>Programming language</strong>: JavaScript, Typescript, C#.
          </li>
          <li>
            <strong> Frontend</strong>: React, Next.js, Styled Components, Sass,
            Webpack, HTML5, CSS3.
          </li>
          <li>
            <strong>Backend</strong>: NodeJS, .NET, MySQL, PostgreSQL, Redis,
            Google Cloud, AWS. .
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Experience;
