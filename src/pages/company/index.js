import React from "react"
import { Link } from "gatsby"

import BlogLayout from "../../components/layoutBlog"
import SEO from "../../components/seo"

const Company = () => (
  <BlogLayout>
    <SEO title="Company Page" />
    <h1>Hi from the Company Page</h1>
    <p>Welcome to company page</p>
    <Link to="/company/team">About our team</Link>
  </BlogLayout>
)

export default Company
