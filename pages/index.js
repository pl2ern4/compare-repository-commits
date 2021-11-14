import {Fragment} from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Compare Repository Commits</title>
        <meta name="description" content="Compare commits of different sites" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout/>
    </Fragment>
  )
}
