export const uploadPages = [
  {
    id: "upload/image",
    title: "Upload image",
  },
];

export const getUploadPageData = () => {
  return uploadPages.map(({ id, title }) => {
    return {
      id,
      title,
    };
  });
};

export const getUploadPageIds = () => {
  return uploadPages.map(({ id }) => {
    return {
      params: {
        id,
      },
    };
  });
};

export const validateImageUpload = (files) => {
  // must have one file
  if (!files || (Array.isArray(files) && files.length !== 1)) {
    throw new Error("Invalid upload, must have one file");
  }

  const file = files[0];

  // must be of type image
  const isImageType = /^image\//.test(file.type);
  if (!isImageType) {
    throw new Error("Invalid upload, must be of type image");
  }

  // must be smaller than 2 megabytes or 2000000 bytes
  if (file.size > 2000000) {
    throw new Error("Invalid upload, must be smaller than 2 megabytes");
  }

  return file;
};
