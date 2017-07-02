import React from 'react';
import { prefixLink } from 'gatsby-helpers';

//import { rhythm, scale } from 'utils/typography';
import { config } from 'config';

import MenuNav from '../../commons/menu/MenuNav';
import MenuMobile from '../../commons/menu/MenuMobile/MenuMobile';


import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../styles.css';
import './template.css';


class MainTemplate extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render () {
        return (
            <div className="container-fluid">
                <div id="menu_mobile">
                    <MenuMobile/>
                </div>
                <div className="container-fluid blog-main" >
                    <MenuNav />
                    <div id="pageMain" className="row">
                        {/* Main Content */}
                        {this.props.children}
                    </div>
                </div>
                { /* Footer -->
                 partial('_partial/footer')  */}
            </div>
        )
    }
}

MainTemplate.propTypes = {
    children: React.PropTypes.any,
    location: React.PropTypes.object,
    route: React.PropTypes.object
};

export default MainTemplate;