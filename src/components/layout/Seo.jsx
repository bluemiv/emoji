import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        // Google Search Console
        {
          name: "google-site-verification",
          content: "4gt--MEEcnP2lX9x2cuQbivs1yzLLXrOx0RbUtiRqzs",
        },
        // Encoding
        {
          charSet: "utf-8",
        },
        {
          name: `description`,
          content: metaDescription,
        },
        // OG Tags
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: "og:url",
          content: "https://bluemiv.github.io/emoji",
        },
        {
          property: "og:image",
          content: "https://bluemiv.github.io/emoji/logo512.png",
        },
        {
          property: "og:image:width",
          content: "512",
        },
        {
          property: "og:image:height",
          content: "512",
        },
        // Twitter
        {
          name: `twitter:card`,
          content: metaDescription,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
