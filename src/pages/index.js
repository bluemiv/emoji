import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Helmet } from "react-helmet"

const IndexPage = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <meta
        name="google-site-verification"
        content="4gt--MEEcnP2lX9x2cuQbivs1yzLLXrOx0RbUtiRqzs"
      />
      <meta property="og:title" content="Emoji Set 이모지 모음" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://bluemiv.github.io/emoji" />
      <meta property="og:description" content="Easily copy and paste emojis." />
      <meta
        property="og:image"
        content="https://bluemiv.github.io/emoji/logo512.png"
      />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
    </Helmet>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
