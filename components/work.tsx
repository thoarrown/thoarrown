import React, { ReactElement } from "react";

interface Props {}

export default function portfolio({}: Props): ReactElement {
  const WorkItem = ({ desc, title, slug }: WorkItemProps): ReactElement => (
    <div className="h-full">
      <a className="cursor-pointer" href={"/" + slug}>
        <img
          className="h-[20rem] w-full object-cover rounded-2xl"
          src="https://source.unsplash.com/random"
        />
      </a>
      <div className="pt-8 flex justify-between flex-col h-[calc(100%-20rem)]">
        <a className="font-extrabold line-clamp-2 text-lg cursor-pointer dark:hover:text-blue mb-6">
          {title}
        </a>
        <p className="line-clamp-3 mt-auto">{desc}</p>
        <div>
          <a
            href={"/" + slug}
            className="mt-8 p-4 rounded-lg inline-block bg-white text-center font-bold text-lg dark:text-darker-blue  dark:hover:bg-opacity-50 "
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="my-8 sm:px-0 px-8">
      <h2 className="text-2xl font-bold pb-6 border-dark-blue dark:border-blue  border-b-[1px]">
        My Works
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
        {dataDummy.map((item, index) => (
          <li className="" key={`workitem-${index}`}>
            <WorkItem {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
interface WorkItemProps {
  title: string;
  desc: string;
  slug: string;
}

const dataDummy: WorkItemProps[] = [
  {
    title: "Lorem ipsum, dolor",
    desc: "Sed atque assumenda mollitia laudantium omnis harum iusto obcaecati quibusdam similique velit iste praesentium, ipsa quos officiis, earum, temporibus ducimus! Perspiciatis, eaque?",
    slug: "#",
  },
  {
    title: "Amet consectetur adipisicing elit.",
    desc: "Sed atque assumenda mollitia laudantium omnis harum iusto obcaecati quibusdam similique velit iste praesentium, ipsa quos officiis, earum, temporibus ducimus! Perspiciatis, eaque?",
    slug: "#",
  },
  {
    title: "Lorem ipsum, dolor",
    desc: "Sed atque assumenda mollitia laudantium omnis harum iusto obcaecati quibusdam similique velit iste praesentium, ipsa quos officiis, earum, temporibus ducimus! Perspiciatis, eaque?",
    slug: "#",
  },
  {
    title: "Amet consectetur adipisicing elit.",
    desc: "Sed atque assumenda mollitia laudantium omnis harum iusto obcaecati quibusdam similique velit iste praesentium, ipsa quos officiis, earum, temporibus ducimus! Perspiciatis, eaque?",
    slug: "#",
  },
];
