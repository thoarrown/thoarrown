import React, { ReactElement } from "react";

interface Props {}

export default function portfolio({}: Props): ReactElement {
  const WorkItem = ({
    id,
    desc,
    title,
    slug,
    image,
  }: WorkItemProps): ReactElement => (
    <div className="h-full">
      <a id={id} className="cursor-pointer" href={slug}>
        <img
          className="h-[20rem] w-full object-cover rounded-2xl"
          src={image}
        />
      </a>
      <div className="pt-8 flex justify-between flex-col h-[calc(100%-20rem)]">
        <a
          href={slug}
          className="font-extrabold line-clamp-2 text-lg cursor-pointer dark:hover:text-blue mb-6"
        >
          {title}
        </a>
        <p className="line-clamp-3 mt-auto">{desc}</p>
        <div>
          <a
            href={slug}
            className="mt-8 p-4 rounded-lg inline-block bg-darker-blue dark:bg-white text-center font-bold text-lg  dark:text-darker-blue text-white hover:bg-opacity-50  dark:hover:bg-opacity-50 "
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
          <li key={`workitem-${index}`}>
            <WorkItem {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
interface WorkItemProps {
  id: string;
  title: string;
  desc: string;
  slug: string;
  image: string;
}

const dataDummy: WorkItemProps[] = [
  {
    id: "work-publish-cms",
    title: "Publish CMS",
    desc: "Publish is a platform CMS for bloggers who want to focus on writing.",
    slug: "https://publish.vn/",
    image: "/static/publish-cms.png",
  },
  {
    id: "work-demo-1",
    title: "Amet consectetur adipisicing elit.",
    desc: "Sed atque assumenda mollitia laudantium omnis harum iusto obcaecati quibusdam similique velit iste praesentium, ipsa quos officiis, earum, temporibus ducimus! Perspiciatis, eaque?",
    slug: "#",
    image: "https://source.unsplash.com/random",
  },
  {
    id: "work-demo-2",
    title: "Lorem ipsum, dolor",
    desc: "Sed atque assumenda mollitia laudantium omnis harum iusto obcaecati quibusdam similique velit iste praesentium, ipsa quos officiis, earum, temporibus ducimus! Perspiciatis, eaque?",
    slug: "#",
    image: "https://source.unsplash.com/random",
  },
  {
    id: "work-demo-2",
    title: "Amet consectetur adipisicing elit.",
    desc: "Sed atque assumenda mollitia laudantium omnis harum iusto obcaecati quibusdam similique velit iste praesentium, ipsa quos officiis, earum, temporibus ducimus! Perspiciatis, eaque?",
    slug: "#",
    image: "https://source.unsplash.com/random",
  },
];
