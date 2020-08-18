import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/sections/hero"
import About from "../components/sections/about"
import Experience from "../components/sections/experience"
import Contact from "../components/sections/contact"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero data={data.hero.edges} />
      <About data={data.about.edges} />
      <Experience />
      <Contact />
    </Layout>
  )
}
//
//<Link to="/page-2/">Go to page 2</Link> <br />
//<Link to="/using-typescript/">Go to "Using TypeScript"</Link>
export const query = graphql`
  query pageQuery {
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
      edges {
        node {
          frontmatter {
            title
            name
            subtitle
          }
          html
        }
      }
    }
    about: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/about/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            skills
            description
          }
          html
        }
      }
    }
    site {
      siteMetadata {
        description
        contact {
          email
          github
          linkedin
        }
      }
    }
  }
`
export default IndexPage
