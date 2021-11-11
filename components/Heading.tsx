import { FC } from "react";

type HeadingProps = {
  tag?:  keyof JSX.IntrinsicElements,
  text: string,
}

export const Heading:FC<HeadingProps> = ({ tag, text }) => {
  const Tag = tag || 'h1';
  return <Tag>{text}</Tag>
};