import React, { useState } from "react";
import Head from "next/head";
import clsx from "clsx";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { CircularProgress, ListItem, ListItemText } from "@material-ui/core";

import { getUploadPageIds, validateImageUpload } from "../../lib/upload";
import { uploadImageToAnonymous } from "../api";
import { List } from "../../components";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    uploadArticle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    uploadForm: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      '& > input[type="file"]': {
        display: "none",
      },
    },
    disabled: ({ loading }: { loading: boolean }) => ({
      pointerEvents: loading ? "none" : undefined,
      backgroundColor: loading
        ? theme.palette.action.disabledBackground
        : undefined,
    }),
    uploadLabel: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: theme.custom.border,
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
      cursor: "pointer",
      boxShadow: theme.custom.boxShadow,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      "&:hover": {
        backgroundColor: theme.custom.hover,
      },
      "&:active": {
        backgroundColor: theme.custom.active,
      },
    },
  })
);

// check file for security violations, have notification if something goes wrong (error handling)
// testing
// clean up, read me and check performance, use typescript in all files
// non-functional requirements, accessibility

function Upload() {
  const [loading, setLoading] = useState<boolean>(false);
  const [imagesUploaded, setImagesUploaded] = useState<
    AnonymousUploadPostResponse[]
  >(undefined);
  const classes = useStyles({ loading });

  const handleImage = async (event) => {
    try {
      const file = validateImageUpload(event.target?.files) || undefined;
      // check file
      if (!file) {
        return;
      }
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

      setImagesUploaded((prev) => [res, ...(prev || [])]);
    } catch (error) {
      console.log(error);
      alert(`${error}`);
    }
    setLoading(false);
  };

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
        {imagesUploaded ? (
          <>
            <h2>Uploaded Images:</h2>
            <List>
              {(imagesUploaded || [])?.map((uploadedImage) => {
                return (
                  <ListItem key={uploadedImage.id}>
                    <ListItemText
                      primary={uploadedImage.url}
                      secondary={uploadedImage.name}
                    />
                  </ListItem>
                );
              })}
            </List>
          </>
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
