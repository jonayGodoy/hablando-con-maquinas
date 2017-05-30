import React from 'react'
import { Link } from 'react-router'
import { Container } from 'react-responsive-grid'
import { prefixLink } from 'gatsby-helpers'
//import { rhythm, scale } from 'utils/typography'
import { config } from 'config'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Menu from 'components/commons/menu/MenuNav'


class Template extends React.Component {
  render () {
    const { location, children } = this.props
    let header
    if (location.pathname === prefixLink('/')) {
      header = (
          <div>
              <Menu />
            <h1>
              <Link to={prefixLink('/')}
              >
                {config.blogTitle}
              </Link>
            </h1>
          </div>
      )
    } else {
      header = (
          <div>
              <Menu />
            <h3>
              <Link
                to={prefixLink('/')}
              >
                {config.blogTitle}
              </Link>
            </h3>
          </div>
      )
    }

    return (
      <div>
        {header}
        {children}
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
