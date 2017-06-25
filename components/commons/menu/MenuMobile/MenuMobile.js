import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';
import * as routesPath from "../../../../pages/routePath";

import '../../../../css/menuNav.css';
import img_head from '../../../../pages/global-img/head.png';


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

    updateBlockScroll(){
        document.documentElement.style.overflowY = !this.state.isHidden ? "hidden" : "";
    }

    render(){
        this.updateBlockScroll();
        return (
            <div>
                <div className={"row jumbotron"+ responsiveMainStyleBootstrap}>
                    <Link to={prefixLink('/')}>
                        <h2 className="col-xs-10 text-center">{config.blogTitle}</h2>
                    </Link>
                    <button className="btn btn-default" onClick={this.toggle}>
                        <span className="glyphicon glyphicon-menu-hamburger" />
                    </button>
                    <hr/>
                </div>

                <div id="drawer" className={this.state.isHidden ? "hidden" : "background-menu-mobile "+responsiveMainStyleBootstrap}
                     onClick={this.toggleOneElement}>
                    <div className="drawer panel"
                         style={this.state.isHidden ? {width: "0"} :{width: "60%"}}>
                        <div>
                            <Link to={prefixLink('/')} onClick={this.toggle}>
                                <img className="img-responsive img_logo_mobile" src={img_head}/>
                            </Link>
                            <div onClick={this.toggle}>
                                {routesPath.menu.map((routePath) =>(
                                    <div>
                                        <hr/>
                                        <Link to={prefixLink(routePath.path)}>
                                            <div className="blog-nav-item-mobile">{routePath.name}</div>
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
