import { GetStaticProps } from "next";
import Link from "next/link";
import { Post } from "@graphql-types@";

type Props = {
  blog: Post[];
};

const BlogPage = ({ blog }: Props) => (
  <>
    {blog.map(({ title, slug, brief }) => (
      <article key={slug} className="mt-8 md:mt-10">
        <Link href={slug}>
          <a>
            <h4 className="font-semibold text-lg leading-5 dark:text-gray-200 sm:text-xl">
              {title}
            </h4>
            <p className="mt-2 text-sm line-clamp-2 text-gray-500 sm:text-base">
              {brief}
            </p>
          </a>
        </Link>
      </article>
    ))}
  </>
);

export default BlogPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: { blog: [] },
  };
};
