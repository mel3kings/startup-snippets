import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import PageUpdates from "./PageUpdates";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary")}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className="hero__subtitle">Subscribe to get updated 👉</p>
        <PageUpdates
          link="/docs/Authentication/Auth0"
          title="New updates (July 2023): Added Authentication Section: Auth0"
        />
        <PageUpdates link="/docs/category/-frontend" title="New updates (July 2023): Tailwind Section" />
        <PageUpdates link="/docs/others/Video_editing" title="New updates (July 2023): Video Editing with Python" />
        <PageUpdates
          link="/docs/frontend/Tailwind/PricePage"
          title="New updates (August 2023): Pricing Page with Tailwind"
        />
        <PageUpdates link="/docs/frontend/JS_Best_Practice" title="New updates (August 2023): JS Do This Not That" />
        <PageUpdates
          link="/docs/frontend/Tailwind/Customer_Reviews"
          title="New updates (August 2023): Tailwind Customer Reviews Section"
        />
      </div>
      <div>
        <iframe width="400" height="250" src="https://httpx.ck.page/0143bba2cc" frameborder="0">
          {" "}
        </iframe>
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
