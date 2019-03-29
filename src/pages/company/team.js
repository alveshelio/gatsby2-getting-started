import React from "react"
import { Link } from "gatsby"

import BlogLayout from "../../components/layoutBlog"
import SEO from "../../components/seo"

const Team = () => (
  <BlogLayout>
    <SEO title="Team Page" />
    <h1>Hi from the Team Page</h1>
    <p>Welcome to Team page</p>
    <Link to="/company">Back to Company</Link>
  </BlogLayout>
)

export default Team

