import React from "react";
import { initializeApollo } from "../lib/apollo";
import markdownToHtml from "../lib/markdownToHtml";
import { PostDocument, Post } from "../graphql/post.graphql";
import { handleRedirectsAndReturnData } from "../util/slug";

type Params = {
  params: {
    slug: string;
  };
};

type Props = {
  post: Post;
  morePosts: Post[];
  preview?: boolean;
};

const PostPage = ({ post, morePosts, preview }: Props) => {
  console.log(post);

  return (
    <div>
      PostPage <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export async function getStaticProps({ params }: Params) {
  const apolloClient = initializeApollo();

  const { data, errors } = await apolloClient.query({
    query: PostDocument,
    variables: {
      slug: params.slug,
      hostname: process.env.USERNAME,
    },
  });

  const content = await markdownToHtml(data.post.content || "");

  const defaultProps = {
    props: {
      post: {
        ...data,
        content,
      },
    },
    /**
     * Revalidate means that if a new request comes to server, then every 1 sec it will check
     * if the data is changed, if it is changed then it will update the
     * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
     */
    revalidate: 1,
  };
  return handleRedirectsAndReturnData(defaultProps, data, errors, "post");
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default PostPage;
