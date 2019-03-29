import React from "react"
import { Link } from "gatsby"

import BlogLayout from "../components/layoutBlog"
import SEO from "../components/seo"

const SecondPage = () => (
  <BlogLayout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/company">Go to Company</Link>
  </BlogLayout>
)

export default SecondPage
