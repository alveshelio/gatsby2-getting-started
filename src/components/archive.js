import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

const Archive = () => (
  <StaticQuery
    query={graphql`
      query ArchiveMetadataQuery {
        site {
          siteMetadata {
            title
            author
            description
          }
        }
      }
    `}
    render={({ site: { siteMetadata: { title, author, description} }}) => (
      <aside>
        <h3>Archive</h3>
      </aside>
    )}
  />
)

Archive.propTypes = {
}

export default Archive
