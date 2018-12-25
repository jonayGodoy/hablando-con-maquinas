import React from 'react';
import config from "../../config-blog";

import DisqusComments  from 'react-disqus-comments';

import "./md.css";
import "./blog-post.css"
import "./zenburn.css"

const imagesAllArticles = require.context("../pages/", true,  /\.(png|jpg|gif)$/);

class BlogPostTemplate extends React.Component {

    constructor(props, context){
        super(props, context);
        this.post = this.props.data.markdownRemark;
        this.cover = imagesAllArticles("./"+this.post.frontmatter.image_article.relativePath);
    }

    render () {
        return (
            <article>
                <div className="img-cover" style={ { backgroundImage: `url(${this.cover})`} } />
                <h1>{this.post.frontmatter.title}</h1>

                <div dangerouslySetInnerHTML={{ __html: this.post.html }} />
                <hr/>
                <DisqusComments
                    shortname={config.disqus_shortname}
                    identifier={this.post.frontmatter.title}
                    title={this.post.frontmatter.title}
                />
            </article>);

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
