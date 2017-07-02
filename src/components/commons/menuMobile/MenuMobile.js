import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';
import * as routesPath from "../../../../routePath";

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
        this.toggleOneElement = this.toggleOneElement.bind(this);
    }

    toggle(){
        this.setState(Object.assign({}, this.state, {isHidden: !this.state.isHidden}));
    };
    toggleOneElement(event){
        if(event.currentTarget === event.target){this.toggle()}
    }

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
                        <Link to={prefixLink('/')}>
                            <h2 className="col-xs-offset-1 col-xs-9 text-center">{config.blogTitle}</h2>
                        </Link>
                </div>
                <hr/>
                <div id="drawer" className={ this.state.isHidden ? "" : "background-menu-mobile"}
                     onClick={this.toggleOneElement}>
                    <div className="drawer-panel panel"
                         style={this.state.isHidden ? { left: "-500px"} :{left: "0" }}>
                        <div>
                            <Link to={prefixLink('/')} onClick={this.toggle}>
                                <img className="img-responsive img_logo_mobile" src={img_head}/>
                            </Link>
                            <div onClick={this.toggle}>
                                {routesPath.menu.map((routePath) =>(
                                    <div>
                                        <hr/>
                                        <Link to={prefixLink(routePath.path)}>
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
