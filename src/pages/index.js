import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Banner from "@/components/banner/banner";
import React from "react";
import NavBar from "@/components/nav/navbar";
import SectionCard from "@/components/card/section-card";
import { getVideos } from "@/libs/videos";

export default function Home() {
  const disneyVideos = getVideos();

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
        <div className={styles.sectionWrapper}>
          <SectionCard title="Disney" size="large" videos={disneyVideos} />
        </div>
        <div className={styles.sectionWrapper}>
          <SectionCard title="Disney" size="medium" videos={disneyVideos} />
        </div>
      </main>
    </React.Fragment>
  );
}
