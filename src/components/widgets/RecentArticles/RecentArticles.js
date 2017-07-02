import React from 'react';
import { Link } from 'react-router';
import sortBy from '../../../../node_modules/lodash/sortBy';
import get from '../../../../node_modules/lodash/get';
import { prefixLink } from 'gatsby-helpers';
import Helmet from "react-helmet";
import { config } from 'config';
import include from '../../../../node_modules/underscore.string/include';


class RecentArticles extends React.Component {
    render () {
        const NUM_MAX_ARTICLES = 5;
        // Sort pages.
        const sortedPages = sortBy(this.props.route.pages, 'data.date');
        // Posts are those with md extension that are not 404 pages OR have a date (meaning they're a react component post).
        const visiblePages = sortedPages.filter(page => (
            get(page, 'file.ext') === 'md' && !include(page.path, '/404') || get(page, 'data.date')
        ));

        return (
            <div className="sidebar-module sidebar-module-inset">
                <h5 className="sidebar-module-title text-center">Articulos Recientes</h5>
                {visiblePages.map((page) => (
                    <li key={page.path}>
                        <Link style={{boxShadow: 'none'}} to={prefixLink(page.path)}>
                            {get(page, 'data.title', page.path)}
                        </Link>
                    </li>
                )).reverse().slice(0,NUM_MAX_ARTICLES)}
            </div>
        )
    }
}

RecentArticles.propTypes = {
    route: React.PropTypes.object
};

export default RecentArticles;