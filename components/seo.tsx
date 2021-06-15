import { NextSeo } from "next-seo";
import {
  OpenGraphImages as OpenGraphImage,
  OpenGraphArticle,
} from "next-seo/lib/types";
import { useRouter } from "next/router";
import { PKG, ME } from "~/constants/share";

type Props = {
  title?: string;
  description?: string;
  type?: string;
  locale?: string;
  image?: OpenGraphImage;
  article?: OpenGraphArticle;
};

const SEO = (props: Props) => {
  const title = props.title ? `${props.title} | ${ME.name}` : PKG.site.title;
  const {
    description = PKG.description,
    type = PKG.site.openGraph.type,
    image,
    article,
  } = props;

  const router = useRouter();
  const url = `${PKG.homepage}${router.pathname}`;

  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        title,
        description,
        url,
        article,
        type,
        images: [
          {
            url: `${PKG.homepage}${PKG.site.openGraph.image.url}`,
            alt: title,
            width: PKG.site.openGraph.image.width,
            height: PKG.site.openGraph.image.height,
            ...image,
          },
        ],
        defaultImageWidth: PKG.site.openGraph.image.width,
        defaultImageHeight: PKG.site.openGraph.image.height,
      }}
      twitter={{
        site: `@${ME.username}`,
        handle: `@${ME.username}`,
        cardType: PKG.site.twitter.card,
      }}
      additionalLinkTags={[
        {
          rel: "icon",
          href: "/static/avatar.jpg",
          type: "image/x-icon",
        },
      ]}
    />
  );
};

export default SEO;
