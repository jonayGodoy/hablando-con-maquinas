import React from "react"
import get from "lodash/get"
import Helmet from "react-helmet"
import BoxArticle from '../components/boxArticle/BoxArticle';
import { rhythm } from "../utils/typography"


import  RecentArticles from "../components/widgets/recentArticles/RecentArticles";

import '../components/widgets/recentArticles/sidebar.css'


class BlogIndex extends  React.Component {
    render () {
        const posts =  get(this, "props.data.allMarkdownRemark.edges");

        return (
            <div className="row">
                <div className="col-sm-8" style={{paddingLeft: "5%"}}>
                    <Helmet title={get(this, "props.data.site.siteMetadata.title")} />
                    <ul>
                        {posts.map((post,index) => {
                            if (post.node.path !== "/404/") {
                                return <BoxArticle key={index} post={post}/>
                            }
                        })
                        }
                    </ul>
                </div>
                <div className="col-sm-4"><RecentArticles posts={posts}/></div>
            </div>
        )
    }

}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
};

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
