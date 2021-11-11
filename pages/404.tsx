import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";

import { Heading } from "../components/Heading";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <Heading text='404' />
      <Heading tag='p' text='Something wrong' />
    </>
  ) 
};
    
export default Error;