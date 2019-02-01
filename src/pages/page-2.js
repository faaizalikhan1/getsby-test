import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="The second page" />
    <h1>This is the second page!</h1>
    <p>Welcome!</p>
    <Link to="/">Go back to the homepage</Link> <br/>
    <Link to="/blog">Take me to the blog</Link>
  </Layout>
)

export default SecondPage
