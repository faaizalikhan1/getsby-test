import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

class Blog extends React.Component {

  render(){
    const blogs = this.props.data.allContentfulGetsbyTest.edges
    console.log(blogs)
    return(
      <Layout>
        <SEO title="Surf Status Blog" />
        <h1>Hi, this is the blog </h1>
        { 
          blogs.map((blog)=>{
            let b = blog.node
            console.log('----blog', blog)
            return(
              <div>
                  <h4>{ b.firstname }</h4>
                  <p>{ b.age }</p>
                  <Link to={`/blog/${b.firstname.replace(' ','-').replace(' ','-')}/`}>Go to post</Link>
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