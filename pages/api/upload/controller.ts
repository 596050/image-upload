import { baseURL, post } from "../api";

export const uploadImageToAnonymous = async (props?: RequestProps) => {
  const res = await post<AnonymousUploadPostResponse>({
    url: baseURL,
    ...props,
    options: {
      ...props?.options,
    },
  });

  return res;
};
