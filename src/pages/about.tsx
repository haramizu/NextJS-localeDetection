import { GetStaticProps, GetStaticPropsResult, NextPage } from "next";
import Link from "next/link";

interface AboutProps {
  locale: string;
}

const About: NextPage<AboutProps> = ({ locale }) => {
  return (
    <div>
      <h1>About {locale === "en-US" ? "English" : "Japanese"} Page</h1>
      <Link href="/">Go to Home Page</Link>
    </div>
  );
};

export const getStaticProps: GetStaticProps<AboutProps> = async ({
  locale,
}): Promise<GetStaticPropsResult<AboutProps>> => {
  // localeがundefinedの場合は、デフォルトのロケールを設定する例
  const defaultLocale = "en";
  const selectedLocale = locale || defaultLocale;

  return {
    props: {
      locale: selectedLocale,
    },
  };
};

export default About;
