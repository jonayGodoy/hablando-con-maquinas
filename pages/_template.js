import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';

import MainTemplate from 'src/components/commons/template/MainTemplate';

class Template extends React.Component {
  render () {
      const { location, children } = this.props;
      return <MainTemplate children={children}/>
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object
};

export default Template;
