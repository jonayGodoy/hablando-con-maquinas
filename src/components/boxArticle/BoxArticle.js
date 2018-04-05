import React from 'react';
import Link from "gatsby-link";
import * as routesPath from "../../routePath";

import './boxArticle.css';

const imagesAllArticles = require.context("../../pages/", true,  /\.(png|jpg|gif)$/);

class BoxArticles extends React.Component {

    constructor(props, context){
      super(props, context);
      this.cover = imagesAllArticles("./"+this.props.post.node.frontmatter.image_article.relativePath);
    }


  render () {
    const {post} = this.props;

    return(
        <div className="blog-card">
            <div className="photo-details">
                <Link style={{ boxShadow: "none" }} to={post.node.frontmatter.path}>
                    {/*<img  className="photo-card" src={this.cover} />*/}
                    <div className="photo-card" style={ { backgroundImage: `url(${this.cover})`} } />
                </Link>
                <ul className="details">
                    <li className="author">
                        {/* todo: testear el comportamiento del autor terminar que hacer que funciones ahora solo esta planteado*/}
                        <Link style={{ boxShadow: "none" }} to={!post.node.author_path ? routesPath.conoceme.path : ""}>
                            {post.node.author || "Jonay Godoy" }
                        </Link>
                    </li>
                    <li className="date">Aug. 24, 2015</li>
                    <li className="tags">
                        <ul>
                            <li><a href="#">Learn</a></li>
                            <li><a href="#">Code</a></li>
                            <li><a href="#">HTML</a></li>
                            <li><a href="#">CSS</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="description">
                <h3>
                    <Link style={{ boxShadow: "none" }} to={post.node.frontmatter.path}>
                        {post.node.frontmatter.title}
                    </Link>
                </h3>
                <h4>Opening a door to the future(subtitle)</h4>
                <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
                {/*todo: enlaces no trabajan */}
                <Link style={{ boxShadow: "none" }} to={post.node.frontmatter.path}>
                    Leer más
                </Link>
            </div>
        </div>
    );

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
