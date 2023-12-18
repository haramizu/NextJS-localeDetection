import { GetStaticProps, GetStaticPropsResult, NextPage } from "next";
import Link from "next/link";

interface HomeProps {
  locale: string;
}

const Home: NextPage<HomeProps> = ({ locale }) => {
  return (
    <div>
      <h1>Welcome to {locale === "en-US" ? "English" : "Japanese"} Page</h1>
      <Link href="/about">Go to About Page</Link>
    </div>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async ({
  locale,
}): Promise<GetStaticPropsResult<HomeProps>> => {
  // localeがundefinedの場合は、デフォルトのロケールを設定する例
  const defaultLocale = "en";
  const selectedLocale = locale || defaultLocale;

  return {
    props: {
      locale: selectedLocale,
    },
  };
};

export default Home;
