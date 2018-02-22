import React from 'react';
import Link from "gatsby-link";

import { prune, include as includes } from 'underscore.string';

const imagesAllArticles = require.context("../../pages/", true,  /\.(png|jpg|gif)$/);

class BoxArticles extends React.Component {

    constructor(props, context){
      super(props, context);
      this.cover = imagesAllArticles("./"+this.props.post.node.frontmatter.image_article.relativePath);
    }


  render () {
    const {post} = this.props;

      return (
        <div>
            <Link style={{ boxShadow: "none" }} to={post.node.frontmatter.path}>
                <img  className="img-thumbnail-new image-article-BoxArticle" src={this.cover} />
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

export default BoxArticles
