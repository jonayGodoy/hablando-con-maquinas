import React from 'react';

import MenuNav from '../menuNav/MenuNav';
import MenuMobile from '../menuMobile/MenuMobile';

import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../styles.css';
import './template.css';


class MainTemplate extends React.Component {
    constructor(props, context) {
        super(props, context);
    }


    render () {
        return (
            <div>
                <MenuMobile/>
                <div className="blog-main" >
                    <MenuNav />
                    <div id="pageMain">
                        {/* Main Content */}
                        {this.props.children()}
                    </div>
                </div>
            </div>
        )
    }
}

export default MainTemplate;