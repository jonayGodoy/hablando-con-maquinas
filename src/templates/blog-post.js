import React from 'react';
import { rhythm, scale } from '../utils/typography';
import config from "../../config-blog";

import DisqusComments  from 'react-disqus-comments';

import TemplateWithSidebar from '../components/commons/template-with-sidebar/TemplateWithSidebarNotComponent'

import "./md.css";

const imagesAllArticles = require.context("../pages/", true,  /\.(png|jpg|gif)$/);

class BlogPostTemplate extends React.Component {

    constructor(props, context){
        super(props, context);
        this.post = this.props.data.markdownRemark;
        this.cover = imagesAllArticles("./"+this.post.frontmatter.image_article.relativePath);
    }

    render () {
        const posts =  this.props.data.allMarkdownRemark.edges;

        let bodyPost = (
            <div>
                <img className="img-thumbnail-new" src={this.cover} />
                <h1>{this.post.frontmatter.title}</h1>

                <div dangerouslySetInnerHTML={{ __html: this.post.html }} />
                <hr/>
                <DisqusComments
                    shortname={config.disqus_shortname}
                    identifier={this.post.frontmatter.title}
                    title={this.post.frontmatter.title}
                />
            </div>);

        return TemplateWithSidebar(bodyPost,posts);
    }


}


export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
       allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
           title
           path
           date(formatString: "DD MMMM, YYYY")
          }
          
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        path
        date(formatString: "MMMM DD, YYYY")
        image_article {
             relativePath
        }
      }
    }
  }
`;
