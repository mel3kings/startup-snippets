import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary")}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className="hero__subtitle2">
          💡
          <a className={styles.link} href="/docs/Authentication/Auth0">
            {" "}
            New updates (July 2023): Added Authentication Section: Auth0
          </a>
        </p>
        <p className="hero__subtitle2">
          💡
          <a className={styles.link} href="/docs/category/-frontend">
            New updates (July 2023): Tailwind Section
          </a>
        </p>
        <p className="hero__subtitle2">
          💡{" "}
          <a className={styles.link} href="docs/others/Video_editing">
            New updates (July 2023): Video Editing with Python
          </a>
        </p>
        <p className="hero__subtitle2">
          💡{" "}
          <a className={styles.link} href="/docs/frontend/Tailwind/PricePage">
            {" "}
            New updates (August 2023): Pricing Page with Tailwind
          </a>
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
