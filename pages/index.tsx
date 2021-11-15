import { initializeApollo } from "../lib/apollo";
import { MainLayout } from "~/components/layouts/MainLayout";
import SEO from "~/components/seo";
import Experience from "~/components/experience";
import Work from "~/components/work";

const Index = () => {
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

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default Index;
