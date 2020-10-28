import { baseURL, post, RequestArgs } from "../api";

type RequestProps = { options: RequestArgs };

type AnonymousUploadPostResponse = {
  id: string;
  name: string;
  size: number;
  url: string;
};

export const uploadImageToAnonymous = async (props?: RequestProps) => {
  const res = await post<AnonymousUploadPostResponse>({
    url: baseURL,
    ...props,
    options: {
      ...props?.options,
    },
  });

  return res || {};
};
