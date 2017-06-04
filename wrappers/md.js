import React from 'react'
import moment from 'moment'
import Helmet from "react-helmet"
import { prefixLink } from 'gatsby-helpers'
//import { rhythm } from 'utils/typography'
import { config } from 'config'
import DisqusComments  from 'react-disqus-comments';


class MarkdownWrapper extends React.Component {

    handleNewComment(comment) {
        /* eslint no-console:0 */
        console.log(comment);
    };

  render () {
    const { route } = this.props;
    const post = route.page.data;

    return (
      <div>
        <img className="img-thumbnail" src={prefixLink(post.path)+post.image_article} />
        <Helmet
          title={`${post.title} | ${config.blogTitle}`}
        />
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
        <em>Posted {moment(post.date).format('MMMM D, YYYY')}</em>
        <hr/>
          <DisqusComments
              shortname={config.disqus_shortname}
              identifier={post.path}
              title={post.title}
              onNewComment={this.handleNewComment}
          />
      </div>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object
};

export default MarkdownWrapper
