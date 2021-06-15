import Link from "next/link";
import { PostDocument, usePostQuery } from "~/graphql/post.graphql";
import { initializeApollo } from "../lib/apollo";
import { MainLayout } from "~/components/layouts/MainLayout";
const Index = () => {
  const { data } = usePostQuery({
    variables: {
      slug: "20-ultimate-css-tricks-and-sass-shorthands-for-code-efficiency",
      hostname: process.env.HOSTNAME || "",
    },
  });

  return (
    <MainLayout>
      <Link href="/about">
        <a>about</a>
      </Link>
      page.
      <div></div>
      {JSON.stringify(data?.post)}
    </MainLayout>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const query = await apolloClient.query({
    query: PostDocument,
    variables: {
      slug: "20-ultimate-css-tricks-and-sass-shorthands-for-code-efficiency",
      hostname: process.env.HOSTNAME,
    },
  });
  console.log(query);

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default Index;
