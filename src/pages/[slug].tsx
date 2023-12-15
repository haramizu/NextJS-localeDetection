import {
  GetStaticProps,
  GetStaticPropsResult,
  GetStaticPaths,
  NextPage,
} from "next";
import { useRouter } from "next/router";
import Link from "next/link";

interface SlugProps {
  locale: string;
  slug: string;
}

const Slug: NextPage<SlugProps> = ({ locale, slug }) => {
  const router = useRouter();

  return (
    <div>
      <h1>
        {locale === "en"
          ? `Dynamic English Page: ${slug}`
          : `Dynamic Japanese Page: ${slug}`}
      </h1>
      <p>Current locale: {router.locale}</p>
      <Link href="/">Go to Home Page</Link>
    </div>
  );
};

export const getStaticProps: GetStaticProps<SlugProps> = async ({
  locale,
  params,
}): Promise<GetStaticPropsResult<SlugProps>> => {
  // localeがundefinedの場合は、デフォルトのロケールを設定する例
  const defaultLocale = "en";
  const selectedLocale = locale || defaultLocale;

  if (!params || typeof params.slug !== "string") {
    // paramsがundefinedまたはslugがstringでない場合
    return {
      notFound: true,
    };
  }

  const { slug } = params;

  return {
    props: {
      locale: selectedLocale,
      slug,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: "example-1" } },
      { params: { slug: "example-2" } },
    ],
    fallback: true,
  };
};

export default Slug;
