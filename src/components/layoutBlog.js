import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import BlogHeader from './headerBlog'
import Archive from './archive'
import './reset.css'

const BlogLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query BlogTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <BlogHeader siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: '100%',
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <Archive />
          <footer>
            <p>Built by Helio</p>
          </footer>
        </div>
      </>
    )}
  />
)

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlogLayout
