import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const BlogHeader = ({ siteTitle }) => (
  <header
    style={{
      background: '#bada55',
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: '100%',
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <p>This is my blog layout</p>
    </div>
  </header>
)

BlogHeader.propTypes = {
  siteTitle: PropTypes.string,
}

BlogHeader.defaultProps = {
  siteTitle: ``,
}

export default BlogHeader
