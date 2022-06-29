import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Main from "../components/main"
import HeroSection from "../components/HeroSection"
import BannerSection from "../components/BannerSection"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    {/* <div className={styles.textCenter}> */}
    {/* <Main /> */}

    {/* <StaticImage
      src="../images/city-hero.svg"
      alt=""
      width={1500}
      height={1500}
      formats={["auto", "webp", "avif"]}
      placeholder="none"
      backgroundColor="#b6d6f8"
      layout="fullWidth"
      loading="eager"
    /> */}
    <HeroSection />
    <Main />
    <BannerSection />

    {/* <StaticImage
        src="../images/car-hero.svg"
        loading="eager"
        width={664}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Welcome to <b>Gatsby!</b>
      </h1>
      <p className={styles.intro}>
        <b>Example pages:</b>{" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br />
        Edit <code>src/pages/index.js</code> to update this page.
      </p> */}
    {/* </div> */}
    {/* <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul> */}
    {/* {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))} */}
  </Layout>
)

export default IndexPage
