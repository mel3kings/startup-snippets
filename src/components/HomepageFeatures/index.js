import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Discover the World of Fullstack Development',
    Svg: require('@site/static/img/development-web-development-svgrepo-com.svg').default,
    description: (
      <>
        Explore snippets of code covering frontend, backend, infrastructure, architecture, and everything in-between to enhance your fullstack development skills.
      </>
    ),
  },
  {
    title: 'Unleash Your Creativity with Unique Self-Projects',
    Svg: require('@site/static/img/creative-knowledge-lightbulb-svgrepo-com.svg').default,
    description: (
      <>
      Get inspired by our collection of unique and interesting self-projects that push the boundaries of technology and spark your creativity.
      </>
    ),
  },
  {
    title: 'Stay Ahead with Exciting Technology Insights',
    Svg: require('@site/static/img/analytics-svgrepo-com.svg').default,
    description: (
      <>
        Stay up-to-date with the latest advancements in technology as we bring you fascinating insights into the most interesting and cutting-edge developments.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
