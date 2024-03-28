import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Banner from "@/components/banner/banner";
import React from "react";
import NavBar from "@/components/nav/navbar";
import Card from "@/components/card/card";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <NavBar username="Username@gmail.com" />
        <Banner
          title="Mission Impossible"
          subTitle="Time bomb is ticking"
          imgUrl="/static/mission-impossible-7.webp"
        />
        <Card imgUrl="/static/mission-impossible1-7.webp" size="large" />
        <Card imgUrl="/static/mission-impossible-7.webp" size="medium" />
        <Card imgUrl="/static/mission-impossible-7.webp" size="small" />
      </main>
    </React.Fragment>
  );
}
