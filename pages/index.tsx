import Link from "next/link";
import { useState } from "react";
import { PostDocument, usePostQuery } from "~/graphql/post.graphql";
import { initializeApollo } from "../lib/apollo";
import { MainLayout } from "~/components/layouts/MainLayout";
const Index = () => {
  const { data } = usePostQuery({
    variables: {
      slug: "20-ultimate-css-tricks-and-sass-shorthands-for-code-efficiency",
      hostname: process.env.USERNAME,
    },
  });
  const [newName, setNewName] = useState("");

  // const onChangeName = () => {
  //   updateNameMutation({
  //     variables: {
  //       name: newName,
  //     },
  //     //Follow apollo suggestion to update cache
  //     //https://www.apollographql.com/docs/angular/features/cache-updates/#update
  //     update: (cache, mutationResult) => {
  //       const { data } = mutationResult;
  //       if (!data) return; // Cancel updating name in cache if no data is returned from mutation.
  //       // Read the data from our cache for this query.
  //       const { viewer } = cache.readQuery({
  //         query: ViewerDocument,
  //       }) as ViewerQuery;
  //       const newViewer = { ...viewer };
  //       // Add our comment from the mutation to the end.
  //       newViewer.name = data.updateName.name;
  //       // Write our data back to the cache.
  //       cache.writeQuery({
  //         query: ViewerDocument,
  //         data: { viewer: newViewer },
  //       });
  //     },
  //   });
  // };

  return (
    <MainLayout>
      {/* You're signed in as {viewer.name} and you're {viewer.status}. Go to the{" "} */}
      <Link href="/about">
        <a>about</a>
      </Link>{" "}
      page.
      <div>
        <input
          type="text"
          placeholder="your new name..."
          onChange={(e) => setNewName(e.target.value)}
        />
        {/* <input type="button" value="change" onClick={onChangeName} /> */}
      </div>
      {JSON.stringify(data?.post)}
      {/* {JSON.stringify(data?.user.publication.posts?.map((item) => item?.title))} */}
    </MainLayout>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const query = await apolloClient.query({
    query: PostDocument,
    variables: {
      slug: "20-ultimate-css-tricks-and-sass-shorthands-for-code-efficiency",
      hostname: process.env.USERNAME,
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
