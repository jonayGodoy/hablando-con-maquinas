import React from 'react';
import PropTypes from "prop-types";

import MenuNav from '../menuNav/MenuNav';
import MenuMobile from '../menuMobile/MenuMobile';

import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../styles.css';
import './template.css';


class MainTemplate extends React.Component {
    static propTypes = {
        children: PropTypes.any,
        location: PropTypes.object,
        route: PropTypes.object
    };

    constructor(props, context) {
        super(props, context);
    }


    render () {
        return (
            <div className="container-fluid">
                <MenuMobile/>
                <div className="container-fluid blog-main" >
                    <MenuNav />
                    <div id="pageMain" className="row">
                        {/* Main Content */}
                        {this.props.children()}
                    </div>
                </div>
            </div>
        )
    }
}

export default MainTemplate;