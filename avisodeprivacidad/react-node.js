/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


const path = require ('path');
exports.createPages = ({actions})=>{
    actions.createPage({
        path : '/uso-de-cookies',
        component : path.resolve('src/pages/uso-de-cookies.js')
    })
}