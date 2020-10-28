export const uploadPages = [
  {
    id: "upload-image",
    title: "Upload image",
  },
];

export function getUploadPageData() {
  return uploadPages.map(({ id, title }) => {
    return {
      id,
      title,
    };
  });
}

export function getUploadPageIds() {
  return uploadPages.map(({ id }) => {
    return {
      params: {
        id,
      },
    };
  });
}
