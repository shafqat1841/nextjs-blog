import Head from "next/head";

import Date from "../../components/date";
import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import { getData, getReqData } from "../../postData/data";

const Post = ({ postData }) => {
  console.log({ postData });
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>

      <div className={utilStyles.lightText}>
        <Date dateString={postData.date} />
      </div>
      <div>
        {postData.discription.map((v, i) => {
          if (Array.isArray(v)) {
            return v.map((lines, i) => {
              return <p key={`${lines}+${i}`}>{lines}</p>;
            });
          } else {
            return <p key={v + i}>{v}</p>;
          }
        })}
      </div>
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const postData = getReqData(params.id);
  return {
    props: {
      postData: postData[0],
    },
  };
}
export async function getStaticPaths() {
  const postDatas = getData();
  const ids = postDatas.map((postData) => postData.id);
  const paths = ids.map((id) => ({ params: { id } }));
  return {
    paths,
    fallback: false,
  };
}

export default Post;
