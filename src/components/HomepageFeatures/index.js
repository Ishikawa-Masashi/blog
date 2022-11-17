import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Support Me",
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Give me a star at here{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Messiahhh/blog"
        >
          GitHub
        </a>
      </>
    ),
  },
  {
    title: "About Me",
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: <>now working at bytedance</>,
  },
  {
    title: "Contact Me",
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: <>Wechat: a616348105</>,
  },
];

function Feature({ Svg, title, description, link }) {
  return (
    <div className={clsx("col col--4")}>
      <a href={link}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
      </a>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures({ list }) {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {list.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
