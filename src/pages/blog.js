import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'graphql'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Blog = () => (

  <Layout>
    <SEO title="Surf Status Blog" />
    <h1>Hi, this is the blog </h1>
    <p>Welcome to page the blog, here is where the blog posts will be displayed</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Blog