import React from 'react';
import Link from "gatsby-link";

/*import { prefixLink } from 'gatsby-helpers';*/
import { prune, include as includes } from 'underscore.string';
import find from 'lodash/find';
//import cover from "../../pages/2017-07-01-como-testear-metodos-estaticos/image-article.jpg";

class BoxArticles extends React.Component {

    constructor(props, context){
      super(props, context);
     // this.cover = importAll(require.context("../../pages/"+this.props.post.node.frontmatter.image_article.relativePath, false,  /\.(png|jpg|gif)$/));
        this.cover = require("../../pages/"+this.props.post.node.frontmatter.image_article.relativePath);
    }



  render () {
    const {post} = this.props;


      return (
        <div>
            <Link style={{ boxShadow: "none" }} to={post.node.frontmatter.path}>
                <img  className="img-thumbnail image-article-BoxArticle" src={this.cover} />
            </Link>
            <h3>
                <Link style={{ boxShadow: "none" }} to={post.node.frontmatter.path}>
                    {post.node.frontmatter.title}
                </Link>
            </h3>
            <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
            <small>
                {post.node.frontmatter.date}
            </small>
            <hr/>
        </div>
      )
  }
}
/*
BoxArticles.propTypes = {
  post: React.PropTypes.object.isRequired
};
*/

export default BoxArticles
