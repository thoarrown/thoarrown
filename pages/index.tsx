import { PostDocument, usePostQuery } from "~/graphql/post.graphql";
import { initializeApollo } from "../lib/apollo";
import { MainLayout } from "~/components/layouts/MainLayout";
import SEO from "~/components/seo";
import Experience from "~/components/experience";
import Work from "~/components/work";

const Index = () => {
  const { data } = usePostQuery({
    variables: {
      slug: "20-ultimate-css-tricks-and-sass-shorthands-for-code-efficiency",
      hostname: process.env.HOSTNAME || "",
    },
  });

  return (
    <>
      <SEO />
      <MainLayout hero>
        <Experience />
        <Work />
      </MainLayout>
    </>
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
