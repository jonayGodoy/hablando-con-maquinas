import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';
import * as routesPath from "../../../routePath";

import '../../../css/menuNav.css';
import img_head from '../../../pages/global-img/head.jpg';


const MenuNav = () => {
    return (
        <div className="blog-menu navbar-btn">
            <div className="hidden visible-sm visible-md visible-lg">
                <div className="row ">
                    <div>
                        <Link to={prefixLink(routesPath.inicio.path)}>
                            <img className="col-xs-5 col-md-5 img_logo img-responsive " src={img_head}/>
                        </Link>
                        <nav className="blog-nav col-md-offset-1 col-md-6">
                            <h3 className="text-center" style={{paddingBottom: "1em"}}>{config.blogTitle}</h3>
                            {routesPath.menu.map((routePath) =>(
                                    <Link className="blog-nav-item" to={prefixLink(routePath.path)}>{routePath.name}</Link>
                            ))}
                        </nav>
                    </div>
                </div>
                <hr className="head" />
            </div>
        </div>
    );
};

export default MenuNav;