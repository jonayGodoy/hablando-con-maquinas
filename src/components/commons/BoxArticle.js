import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { prune, include as includes } from 'underscore.string';
import find from 'lodash/find';
//import { rhythm, scale } from 'utils/typography';

class BoxArticles extends React.Component {
  render () {
    const { pages, post } = this.props;
      const  readNext  = post.path;
    let nextPost;
    if (readNext) {
      nextPost = find(pages, (page) =>
        includes(page.path, readNext)
      )
    }
    if (!readNext) {
      return React.createElement('noscript', null)
    } else {
      nextPost = find(pages, (page) =>
        includes(page.path, readNext.slice(1, -1))
      );
      // Create pruned version of the body.
      const html = nextPost.data.body;
      const body = prune(html.replace(/<[^>]*>/g, ''), 200);

      return (
        <div>
          <Link to={prefixLink(nextPost.path)}>
            <img className="img-thumbnail image-article-BoxArticle" src={prefixLink(nextPost.path)+nextPost.data.image_article} />
          </Link>

          <h3>
            <Link to={prefixLink(nextPost.path)}>
              {nextPost.data.title}
            </Link>
          </h3>
          <p>{body}</p>
          <hr />
        </div>
      )
    }
  }
}

BoxArticles.propTypes = {
  post: React.PropTypes.object.isRequired,
  pages: React.PropTypes.array
};

export default BoxArticles
