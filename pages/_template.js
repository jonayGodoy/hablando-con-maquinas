import React from 'react'
import { Link } from 'react-router'
import { Container } from 'react-responsive-grid'
import { prefixLink } from 'gatsby-helpers'
import { rhythm, scale } from 'utils/typography'
import { config } from 'config'

import Menu from 'components/commons/menu/MenuNav'
import MenuMobile from 'components/commons/menu/MenuMobile'
import RecentArticlesWidget from 'components/widgets/recent-articles';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../css/blog.css'


class Template extends React.Component {
  render () {
    const { location, children } = this.props

    return (
        <div className="container-fluid">
            <div id="menu_mobile">
                <MenuMobile/>
            </div>
            <div className="container-fluid blog-main" >
                <Menu />
                <div id="pageMain" className="row">

                    {/* Main Content */}
                    <div className="col-sm-8">
                        {children}
                    </div>

                     <div className="col-sm-3 col-sm-offset-1 blog-sidebar">
                            <RecentArticlesWidget {...this.props}/>
                     </div>

                </div>
            </div>
            { /* Footer -->
             partial('_partial/footer')  */}
        </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
};

export default Template;
