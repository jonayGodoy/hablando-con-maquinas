import React from 'react'
import Helmet from "react-helmet"
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import DisqusComments  from 'react-disqus-comments';

import './md.css';
import './zenburn.css';

import BlogTemplate from '../src/components/blogTemplate/BlogTemplate';


class MarkdownWrapper extends BlogTemplate {

    constructor(props, context){
        super(props, context);
        this.getContain = this.getContain.bind(this);
    }

    getContain () {
        const { route } = this.props;
        const post = route.page.data;

        return (
          <div  className="markdown">
            <img className="img-thumbnail" src={prefixLink(post.path)+post.image_article} />
            <Helmet
              title={`${post.title} | ${config.blogTitle}`}
            />
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
            <hr/>
              <DisqusComments
                  shortname={config.disqus_shortname}
                  identifier={post.path}
                  title={post.title}
              />
          </div>
        )
    }
}
MarkdownWrapper.propTypes = {
  route: React.PropTypes.object
};

export default MarkdownWrapper
