import React, { ReactElement } from "react";

interface Props {}

export default function Hero({}: Props): ReactElement {
  return (
    <div className="md:pt-[75px] w-full md:h-[30rem] grid grid-cols-1 grid-flow-row	">
      <div className="relative col-span-full	col-start-1	row-start-1 overflow-hidden z-[-1] dark:bg-dark-blue bg-blue">
        {/* <img
          className="inset-0 absolute w-full h-full object-cover  "
          src="https://source.unsplash.com/random"
        /> */}
      </div>
      <div className="col-start-1	row-start-1 m-auto max-w-[90rem] flex md:flex-row flex-col px-6 py-10">
        <img
          className="md:w-[12.8rem] md:h-[12.8rem] w-32 h-32 rounded-full"
          src="/static/avatar.jpg"
        />
        <div className="md:ml-12">
          <h1 className="text-2xl my-2 font-bold">ThoArrow</h1>
          <p className="text-sm md:text-base">
            Hi, my name is Tho, a Software Engineer (SE) in Ho Chi Minh City. I
            interested to develop software to solve problems in real life.
            <br />
            Especially, I love writing blogs to inspire people and would like to
            contribute to the community.
          </p>
        </div>
      </div>
    </div>
  );
}
