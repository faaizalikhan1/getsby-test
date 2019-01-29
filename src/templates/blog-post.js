import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import * as PropTypes from "prop-types"

const propTypes = {
    data: PropTypes.object.isRequired,
}

class BlogPost extends React.Component{
 render(){
    const page = this.props.data.contentfulGetsbyTest

    return(
        <div>
            <Layout>
            <SEO title="Surf Status Blog" />
            <h1>Hi, this is the blog </h1>
            <p>Welcome to page the blog, here is where the blog posts will be displayed</p>
            <Link to="/">Go back to the homepage</Link>
        </Layout>
        </div>
  
    )
 }
}

export default BlogPost

export const pageQuery = graphql`
    query pageQuery($id: String) {
        contentfulGetsbyTest( id: { eq: $id } ) {
            firstname
            age
        }
    }
`