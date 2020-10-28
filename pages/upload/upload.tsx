import Layout from "../../components/layout";
import { getUploadPageIds } from "../../lib/upload";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

export default function Upload({}) {
  return (
    <Layout>
      <Head>
        <title>Upload image</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>Upload</h1>
        Please upload an image
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getUploadPageIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  //   const postData = await getPostData(params.id);
  //   postData,
  return {
    props: {},
  };
}
