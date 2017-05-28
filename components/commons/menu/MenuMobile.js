import React, {PropTypes} from 'react';
import { config } from 'config'
import ManagerMenu from '../../../src/ManagerMenuResponsive';

import '../../../css/menuNav.css';
import img_head from '../../../pages/global-img/head.png';

const MenuMobile = () => {
    let managerMenu = new ManagerMenu('menu-mobile-lateral');

    return (
        <div>
            <div className="row jumbotron hidden-sm hidden-md hidden-lg hidden-sm hidden-md hidden-lg">
                <a href="/"><h2 className="col-xs-10 text-center">{config.blogTitle}</h2></a>
                <button className="btn btn-default" onClick={managerMenu.toogle}>
                    <span className="glyphicon glyphicon-menu-hamburger" aria-hidden="true" />
                </button>
            </div>

            <div id="menu-mobile-lateral" className="blog-nav-mobile panel hidden hidden-sm hidden-md hidden-lg">
                <div>
                    <div>
                        <a href="/"><img className="img-responsive img_logo_mobile" src={img_head} /></a>
                    </div>
                    <div>
                        <hr/>
                        <a className="blog-nav-item" href="/">Inicio</a>
                    </div>

                    <span className="button-exit-menu glyphicon glyphicon-menu-left" onClick={managerMenu.toogle}/>
                </div>
            </div>
        </div>
    );
};

export default MenuMobile;
