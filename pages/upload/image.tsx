import React, { useEffect, useState } from "react";
import Head from "next/head";
import clsx from "clsx";
import { CircularProgress, ListItem, ListItemText } from "@material-ui/core";

import { getUploadPageIds, validateImageUpload } from "../../lib/upload";
import { uploadImageToAnonymous } from "../api";
import { List } from "../../components";
import { useStyles } from "./image.styles";

// have notification if something goes wrong (error handling)
// testing
// non-functional requirements, accessibility

function Upload() {
  const [loading, setLoading] = useState<boolean>(false);
  const [imagesUploaded, setImagesUploaded] = useState<
    AnonymousUploadPostResponse[]
  >(undefined);
  const classes = useStyles({ loading });
  let timer = undefined;

  const handleImage = async (event) => {
    try {
      // check file
      const file = validateImageUpload(event.target?.files);

      const formData = new FormData();
      formData.append("file", file);
      formData.append("expires_at", "1h");

      setLoading(true);
      const res = await uploadImageToAnonymous({
        options: {
          body: formData,
        },
      });

      // copy url to clipboard
      navigator.clipboard.writeText(res.url);
      const node = document.getElementById("message");
      if (node && res.url) {
        node.style.display = "flex";
        node.innerText = `Copied ${res.url}`;
        timer = setTimeout(function () {
          node.style.display = "none";
        }, 3000);
      }

      setImagesUploaded((prev) => [res, ...(prev || [])]);
    } catch (error) {
      console.log(error);
      alert(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (timer) {
      return () => {
        clearTimeout(timer);
      };
    }
  }, [timer]);

  return (
    <>
      <Head>
        <title>Upload image</title>
      </Head>

      <article className={classes.uploadArticle}>
        <h1>Upload</h1>
        <form encType="multipart/form-data" className={classes.uploadForm}>
          <label
            htmlFor="file-upload"
            className={clsx(classes.uploadLabel, classes.disabled)}
          >
            {loading ? (
              <CircularProgress
                style={{ width: "20px", height: "20px" }}
                color="secondary"
              />
            ) : (
              "Upload an image"
            )}
          </label>
          <input
            id="file-upload"
            onChange={handleImage}
            type="file"
            name="upload-image-button"
            placeholder="Upload File"
            accept="image/*"
          />
        </form>
        <div id="message" className={classes.uploadedMessage} />
        {imagesUploaded ? (
          <section className={classes.imageUploadSection}>
            <h2>Uploaded Images:</h2>
            <List>
              {(imagesUploaded || [])?.map((uploadedImage) => {
                return (
                  <ListItem
                    key={uploadedImage.id}
                    className={clsx(classes.uploadedListItem)}
                  >
                    <ListItemText
                      primary={uploadedImage.url}
                      secondary={uploadedImage.name}
                      className={clsx(classes.listItemText)}
                    />
                  </ListItem>
                );
              })}
            </List>
          </section>
        ) : null}
      </article>
    </>
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
  return {
    props: {},
  };
}

export default Upload;
