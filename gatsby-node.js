const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        Root: path.resolve(__dirname, 'src/'),
        'firebase/app': path.resolve(
          __dirname,
          'node_modules/firebase/app/dist/index.cjs.js'
        ),
        firebase: path.resolve(
          __dirname,
          'node_modules/firebase/dist/index.node.cjs.js'
        ),
      },
    },
  })
}

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const blogPosts = await graphql(`
//     {
//       allSanityBlogPost {
//         edges {
//           node {
//             slug {
//               current
//             }
//           }
//         }
//       }
//     }
//   `)
//   const {
//     data: { allSanityBlogPost },
//   } = blogPosts
//   allSanityBlogPost.edges.forEach(({ node: { slug: { current } } }) => {
//     createPage({
//       path: `blog/${current}`,
//       component: path.resolve(`./src/components/BlogPostPage.js`),
//       context: {
//         slug: current,
//       },
//     })
//   })
// }
