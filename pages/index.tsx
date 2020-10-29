import Head from "next/head";
import { getUploadPageData } from "../lib/upload";
import { Link } from "../components";
import { withStyles } from "@material-ui/core";

const styles = () => ({
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
});

function Home({ classes, pagesData }) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <section className="headingMd padding1px">
        <h2 className="headingLg">Upload image</h2>
        <ul className={classes.list}>
          {pagesData.map(({ id, title }) => {
            return (
              <li className="listItem" key={id}>
                <Link href={`/${id}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
export default withStyles(styles)(Home);

export async function getStaticProps() {
  const uploadPageData = getUploadPageData();

  let pagesData = uploadPageData;

  return {
    props: {
      pagesData,
    },
  };
}
