import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
// import logo from "@site/static/img/头像.jpg";
import logo from "@site/static/img/自画像.png";
import { css } from "@emotion/css";

const FeatureList = [
  {
    title: "Support Me",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
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
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>now working at bytedance</>,
  },
  {
    title: "Contact Me",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>Wechat: a616348105</>,
  },
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <img src={logo} style={{ width: 280, borderRadius: "50%" }} />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/HTML">
            前端博客 →
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <h1 className={styles.heading}>アプリ</h1>
        <HomepageFeatures
          list={[
            {
              title: "Mahjongg Solitaire",
              Svg: require("@site/static/img/mahjong.svg")
                .default,
              link: "https://game.nicovideo.jp/atsumaru/games/gm28040",
              description: (
                <>
                  上海と呼ばれている有名なパズルゲームです。
                  {/* <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://game.nicovideo.jp/atsumaru/games/gm28040"
                  >
                    GitHub
                  </a> */}
                </>
              ),
            },
            {
              title: "About Me",
              Svg: require("@site/static/img/undraw_docusaurus_mountain.svg")
                .default,
              description: <>now working at bytedance</>,
            },
            {
              title: "Contact Me",
              Svg: require("@site/static/img/undraw_docusaurus_react.svg")
                .default,
              description: <>Wechat: a616348105</>,
            },
          ]}
        />
        <h1 className={styles.heading}>プログラミング</h1>
        <HomepageFeatures list={FeatureList} />
      </main>
    </Layout>
  );
}
