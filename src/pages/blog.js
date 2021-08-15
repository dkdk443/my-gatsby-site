import * as React from 'react';
import { graphql } from 'gatsby'
import Layout from '../components/layouts';
const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog Page">
      <ul>
        {
          data.allFile.nodes.map(node => (
            <li key={node.name}>
              {node.name}
            </li>
          ))
       }
      </ul>
      <p>これはblog</p>

    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`
export default BlogPage;