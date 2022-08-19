import Link from "next/link";
import Head from "next/head";

import ImageComponent from "../../components/ImageComponent";
import Layout from "../../components/layout";

const firstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
    </Layout>
  );
};

export default firstPost;
