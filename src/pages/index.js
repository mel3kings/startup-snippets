import React, { useEffect } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
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
        <div className="overflow-auto font-thin bg-gradient-to-r from-pink-700 to-indigo-700 inline-block text-transparent bg-clip-text ">
          <h1 className="text-4xl">Recent Updates</h1>
          <PageUpdates link="/docs/Authentication/Auth0" title="July 2023: Added Authentication Section: Auth0" />
          <PageUpdates link="/docs/category/-frontend" title="July 2023: Tailwind Section" />
          <PageUpdates link="/docs/others/Video_editing" title="July 2023: Video Editing with Python" />

          <PageUpdates link="/docs/frontend/JS_Best_Practice" title="August 2023: JS Do This Not That" />
          <PageUpdates
            link="/docs/frontend/Tailwind/Customer_Reviews"
            title="August 2023: Tailwind Customer Reviews Section"
          />
          <PageUpdates link="/docs/frontend/Tailwind/BottomNav" title="Sept 2023: Tailwind Bottom Nav" />
          <PageUpdates link="/docs/infrastructure/AWS/DynamoDB/CRUD" title="Oct 2023: AWS CRUD Dynamo" />
          <PageUpdates link="/docs/frontend/Tailwind/ResponsiveIframe" title="Nov 2023: Responsive IFrame" />
          <PageUpdates link="/docs/frontend/Lottie/Loading" title="Dec 2023: Loading from Lottie" />
          <PageUpdates link="/docs/frontend/SVGs/Loader" title="Dec 2023: SVG Loader" />
          <PageUpdates link="/docs/frontend/Tailwind/PricePage" title="Dec 2023: Updates on Pricing Page" />
          <PageUpdates
            link="/docs/frontend/others/Useful-Resources"
            title="Dec 2023: Useful Frontend Resources (SVGs and Icons)"
          />
          <PageUpdates link="/docs/backend/Node/Send-Email" title="Dec 2024: Send Email" light={true} />
          <PageUpdates link="/docs/frontend/Tailwind/GradientButton" title="Jan 2024: Gradient Button" light={true} />
          <PageUpdates link="/docs/frontend/Tailwind/GradientText" title="Jan 2024: Gradient Text" light={true} />
          <PageUpdates
            link="/docs/frontend/Tailwind/PricePage"
            title="Jan 2024: Pricing Page with Tailwind"
            light={true}
          />
          <PageUpdates
            link="/docs/frontend/React/React-DatePicker"
            title="Jan 2024: Simple React Date Picker"
            light={true}
          />
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
