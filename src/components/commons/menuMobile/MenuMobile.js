import React from 'react';
//import { Link } from 'react-router';
import Link  from "gatsby-link";
//import { prefixLink } from 'gatsby-helpers';
import config from "../../../../config-blog"
import * as routesPath from "../../../routePath";

import './menuMobile.css';
import img_head from '../../../assets/img/head.jpg';


const responsiveMainStyleBootstrap = "hidden-sm hidden-md hidden-lg hidden-sm hidden-md hidden-lg";
class MenuMobile extends React.Component {

    constructor(props, context){
        super(props, context);
        this.state = {
            isHidden: true
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle(){
        this.setState(Object.assign({}, this.state, {isHidden: !this.state.isHidden}));
    };

    componentDidUpdate(){
        document.documentElement.style.overflowY = !this.state.isHidden ? "hidden" : "";
    }

    render(){
        return (
            <div className={responsiveMainStyleBootstrap}>
                <div className="head-mobile row">
                        <div className="col-xs-1">
                            <button className="btn"  onClick={this.toggle}>
                                <span className="text-center glyphicon glyphicon-menu-hamburger" />
                            </button>
                        </div>
                        <Link to={'/'}>
                            <h2 className="col-xs-offset-1 col-xs-9 text-center">{config.blogTitle}</h2>
                        </Link>
                </div>
                <hr/>
                <div id="drawer" className={ this.state.isHidden ? "" : "background-menu-mobile"}
                     onClick={this.toggle}>
                    <div className="drawer-panel panel"
                         style={this.state.isHidden ? { left: "-500px"} :{left: "0" }}>
                        <div>
                            <Link to={'/'} onClick={this.toggle}>
                                <img className="img-responsive img_logo_mobile" src={img_head}/>
                            </Link>
                            <div onClick={this.toggle}>
                                {routesPath.menu.map((routePath, index) =>(
                                    <div key={index}>
                                        <hr/>
                                        <Link to={routePath.path}>
                                            <h3 className="blog-nav-item-mobile">{routePath.name}</h3>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuMobile;
