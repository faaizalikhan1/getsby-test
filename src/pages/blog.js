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
        <SEO title="Surf Status Blog" description="Welcome to the Surf Status Blog. Created with GatsbyJs" image="https://cranky-mayer-85efc7.netlify.com/static/6d91c86c0fde632ba4cd01062fd9ccfa/045aa/gatsby-astronaut.png" />
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
          <Link to="/">Go back to the homepage</Link>
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