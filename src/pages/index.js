import React, { useEffect } from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import PageUpdates from "./PageUpdates";
import ReactGA from "react-ga4";

ReactGA.initialize("G-64K0B09XKZ");
function HomepageHeader() {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/", title: "Startup Snippets" });
  });
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <header className="bg-slate-950">
        <div className="container mx-auto text-center py-4 pt-12">
          <h1 className="text-7xl font-bold bg-gradient-to-r from-pink-700 to-indigo-700 inline-block text-transparent bg-clip-text">
            {siteConfig.title}
          </h1>
          <p className="text-xl text-white">{siteConfig.tagline}</p>

          <div className="py-10"></div>
        </div>
      </header>
      <header className="bg-slate-950 w-full p-4 flex justify-center items-center align-center text-center">
        <div className="overflow-auto font-thin bg-gradient-to-r from-pink-700 to-indigo-700 inline-block text-transparent bg-clip-text">
          <h1 className="text-4xl">Recent Updates</h1>
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
          <PageUpdates link="/docs/frontend/Tailwind/BottomNav" title="New updates (Sept 2023): Tailwind Bottom Nav" />
          <PageUpdates link="/docs/infrastructure/AWS/DynamoDB/CRUD" title="New updates (Oct 2023): AWS CRUD Dynamo" />
        </div>
        {/* <div>
        <iframe width="400" height="250" src="https://httpx.ck.page/0143bba2cc" frameborder="0">
          {" "}
        </iframe>
      </div> */}
      </header>
    </>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A collection of snippets & small projects for common programming tasks"
    >
      <HomepageHeader />
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
