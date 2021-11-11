import { FC } from "react";
import { PostType } from "../types";
import { Heading } from "./Heading";

type PostInfoProps = {
  post: PostType
}

export const PostInfo:FC<PostInfoProps> = ({ post }) => {
  const { title, body } = post || {};

  if (!post) {
    return <Heading tag="h3" text="Empty post" />
  }

  return (
    <>
      <Heading tag="h3" text={title} />
      <p>{body}</p>
    </>
  );
};