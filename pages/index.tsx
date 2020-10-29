import Head from "next/head";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import { getUploadPageData } from "../lib/upload";

const useStyles = makeStyles(() =>
  createStyles({
    uploadArticle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    list: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
  })
);

function Home({ pagesData }) {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <article className={classes.uploadArticle}>
        <h1>Pages</h1>
        <section>
          <ul className={classes.list}>
            {pagesData.map(({ id, title }) => {
              return (
                <li key={id}>
                  <a href={`/${id}`}>
                    <p>{title}</p>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </article>
    </>
  );
}
export default Home;

export async function getStaticProps() {
  const uploadPageData = getUploadPageData();

  let pagesData = uploadPageData;

  return {
    props: {
      pagesData,
    },
  };
}
