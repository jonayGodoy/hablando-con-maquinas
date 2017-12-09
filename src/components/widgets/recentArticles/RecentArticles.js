import React from 'react';
import Link from "gatsby-link"
import './sidebar.css'


class RecentArticles extends React.Component {

    constructor(props, context){
        super(props, context);
        const NUM_MAX = 5;

        this.posts = this.props.posts.length > NUM_MAX ? this.props.posts.slice(0,5) : this.props.posts;
    }


    render () {
        return (
            <div className="module-sidebar">
                <h5 className="sidebar-module-title text-center">Articulos Recientes</h5>
                <hr/>
                <ul>
                    {this.posts.map((post) => {
                        if (post.node.path !== "/404/") {
                          return(
                              <li key={post.node.frontmatter.title}>
                                <Link style={{ boxShadow: "none" }} to={post.node.frontmatter.path}>
                                    {post.node.frontmatter.title}
                                </Link>
                              </li>
                          )}
                    })
                    }
                </ul>
            </div>
        )
    }
}


export default RecentArticles;
