import React, {PropTypes} from 'react';
import '../../../css/menuNav.css';
import img_head from '../../../pages/global-img/head.png';

const MenuNav = () => {
    return (
        <div className="blog-menu navbar-btn">
            <div className="hidden visible-sm visible-md visible-lg">
                <div className="row ">
                    <a href="/"><img className="col-xs-5 col-md-5 img_logo img-responsive " src={img_head}/></a>
                    <nav className="blog-nav col-md-offset-1 col-md-6">
                        <a className="blog-nav-item" href="#">Inicio</a>
                    </nav>
                </div>
                <hr className="head" />
            </div>
        </div>
    );
};


export default MenuNav;