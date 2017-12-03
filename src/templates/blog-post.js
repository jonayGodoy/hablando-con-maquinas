import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { rhythm, scale } from '../utils/typography'
import config from "../../config-blog"

import DisqusComments  from 'react-disqus-comments';
import  RecentArticles from "../components/widgets/recentArticles/RecentArticles";

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

        return (
            <div className="row">
                <div className="col-sm-8" style={{paddingLeft: "5%"}}>
                    <Helmet title={get(this, "props.data.site.siteMetadata.title")} />
                    <div>
                        <img className="img-thumbnail" src={this.cover} />
                        <h1>{this.post.frontmatter.title}</h1>

                        <div dangerouslySetInnerHTML={{ __html: this.post.html }} />
                        <hr/>
                        <DisqusComments
                            shortname={config.disqus_shortname}
                            identifier={this.post.frontmatter.title}
                            title={this.post.frontmatter.title}
                        />
                    </div>
                </div>
                <div className="col-sm-4"><RecentArticles posts={posts}/></div>
            </div>
        )
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
