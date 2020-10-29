import { useState } from "react";
import Head from "next/head";

import { getUploadPageIds } from "../../lib/upload";
import { uploadImageToAnonymous } from "../api";

// check file for security violations, have notification if something goes wrong (error handling)
// testing
// add mui and styled components and make responsive
// clean up, read me and check performance, use typescript in all files
// non-functional requirements, accessibility
//

export default function Upload() {
  const [loading, setLoading] = useState<boolean>(false);
  // const [imageUploaded, setImageUploaded] = useState<object>(undefined);

  const handleImage = async (event) => {
    const file = event.target?.files[0] || undefined;
    // check file
    if (!file) return;
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("expires_at", "1h");

      setLoading(true);
      const res = await uploadImageToAnonymous({
        options: {
          body: formData,
        },
      });

      console.log({ res });
      // setImageUploaded(res);
    } catch (error) {
      console.log(error);
      // setImageUploaded(undefined);
    }
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Upload image</title>
      </Head>
      <article>
        <h1>Upload</h1>
        Please upload an image
        <form encType="multipart/form-data">
          <input
            onChange={handleImage}
            type="file"
            name="uploadImageButton"
            placeholder="Upload File"
            accept="image/*"
          />
        </form>
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
