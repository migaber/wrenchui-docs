import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const docPageTemplate = ({ data }) => {
  const { markdownRemark } = data
  const html = markdownRemark.html

  return (
    <Layout>
      <div className="spark-docs-details-body u-window-padding--1x"
        dangerouslySetInnerHTML = {{__html: html}}
      />
    </Layout>
  )
}

export const query = graphql`
  query ($pathSlug: String!) {
    markdownRemark(frontmatter: {path: {eq: $pathSlug} }) {
      html
      frontmatter {
        title
      }
    }
  }

`

export default docPageTemplate
