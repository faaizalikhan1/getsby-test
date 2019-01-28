
const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

// We'll need something for creating the slugs
const slugify = require(`slugify`)
const slugifyOptions = {
  replacement: '-',
  remove: /[$*_+~.()'"!\-:@]/g,
  lower: true
}

// We'll use Gatsby's createPage API for generating the pages
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    // This is where we'll do most of our work
    graphql(`
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
    `)
    .then((result)=>{
        if (result.errors) {
            reject(result.errors)
        }

        const pageTemplate = path.resolve(`./src/templates/blog-post.js`)
        result.data.allContentfulGetsbyTest.edges.map(edge => {
            createPage({
                path: `/blog/${slugify(edge.node.firstname, slugifyOptions)}/`,
                component: slash(pageTemplate),
                context: {
                    id: edge.node.id
                },
            })
        })

        resolve()
    })
  })
}