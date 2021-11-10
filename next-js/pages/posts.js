import Head from "next/head";

import { Heading } from "../components/Heading";

const Posts = () => (
  <>
    <Head>
      <title>Posts</title>
    </Head>
    <Heading text='Posts list:' />
    <Heading tag='p' text='Paragraph' />
  </>
);
  
export default Posts;