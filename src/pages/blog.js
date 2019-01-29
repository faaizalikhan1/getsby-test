import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
const slugify = require(`slugify`)
const slugifyOptions = {
  replacement: '-',
  remove: /[$*_+~.()'"!\-:@]/g,
  lower: true
}
class Blog extends React.Component {

  render(){
    const blogs = this.props.data.allContentfulGetsbyTest.edges
    return(
      <Layout>
        <SEO title="Surf Status Blog" />
        <h1>Hi, this is the blog </h1>
        { 
          blogs.map((blog, i)=>{
            let b = blog.node
            return(
              <div key={i}>
                  <p><b>{ b.firstname }</b> <br/>
                  <Link to={`/blog/${slugify(b.firstname, slugifyOptions)}`}>Go to post</Link>   
                  </p>
              </div>
            )
          })
        }
      </Layout>
    )
  }
}
export default Blog

export const Posts = graphql`
    query Posts 
      {
        allContentfulGetsbyTest {
          edges {
            node {
              id
              firstname
              age
            }
          }
        }
      }
`