import React from "react"
import get from "lodash/get"
import BoxArticle from '../components/boxArticle/BoxArticle';
import { rhythm } from "../utils/typography"

import TemplateWithSidebar from '../components/commons/template-with-sidebar/TemplateWithSidebarNotComponent'

import '../templates/blog-post.css';
import '../components/widgets/recentArticles/sidebar.css'


class BlogIndex extends  React.Component {
    render () {
        const posts =  get(this, "props.data.allMarkdownRemark.edges");
        let bodyHome = posts.map((post,index) => {
            if (post.node.path !== "/404/") {
                return <BoxArticle key={index} post={post}/>
            }
        });

        return TemplateWithSidebar(bodyHome, posts);
    }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
           title
            image_article {
             relativePath
            }
           path
           date(formatString: "DD MMMM, YYYY")
          }
          
        }
      }
    }
  }
`;
