import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config'

import '../../../css/menuNav.css';
import img_head from '../../../pages/global-img/head.png';

const MenuNav = () => {
    return (
        <div className="blog-menu navbar-btn">
            <div className="hidden visible-sm visible-md visible-lg">
                <div className="row ">
                    <Link to={prefixLink('/')}>
                        <img className="col-xs-5 col-md-5 img_logo img-responsive " src={img_head}/>
                    </Link>
                    <nav className=" blog-nav col-md-offset-1 col-md-6">
                        <h3 className="text-center" style={{paddingBottom: "1em"}}>{config.blogTitle}</h3>
                        <Link className="blog-nav-item" to={prefixLink('/')}>Inicio</Link>
                    </nav>
                </div>
                <hr className="head" />
            </div>
        </div>
    );
};

export default MenuNav;