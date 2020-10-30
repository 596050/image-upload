import Head from "next/head";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import { getUploadPageData } from "../lib/upload";

const useStyles = makeStyles((theme: Theme) =>
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
    listItem: {
      "li + li": {
        paddingBottom: theme.spacing(1),
      },
    },
    listSection: {
      paddingTop: theme.spacing(1),
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
        <section className={classes.listSection}>
          <ul className={classes.list}>
            {pagesData.map(({ id, title }) => {
              return (
                <li key={id} className={classes.listItem}>
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
