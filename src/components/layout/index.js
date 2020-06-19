/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import './style.css'

import Header from "../header"
import Navbar from '../navbar'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Navbar />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        
        <footer>
          © {new Date().getFullYear()} Aces w/ Spaces, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby </a>
          by <a href="https://apps.apple.com/us/developer/nathaniel-brown/id1516706419" id="natelink" target="_blank">Nathaniel Brown</a>
        </footer>
      </div>
    </>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
