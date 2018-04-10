import React from 'react';
import Link from "gatsby-link";

import MenuNav from '../menuNav/MenuNav';
import MenuMobile from '../menuMobile/MenuMobile';

import config_blog from "../../../../config-blog"

import '../../../styles.css';
import './template.css';
import "./footer.css"

import icon_github from "../../../assets/img/footer/github.svg";
import icon_twitter from "../../../assets/img/footer/twitter.svg";

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
                    <div id="pageMain" className="page-main">
                        {/* Main Content */}
                        {this.props.children()}
                    </div>
                    <footer className="footer">
                        <Link className="title-footer" style={{ boxShadow: "none" }} to={"/"}>
                            {config_blog.blogTitle}
                        </Link>
                        <div className="icons-footer">
                            <Link style={{ boxShadow: "none" }} to={"/"}>
                                <img className="icon-footer" src={icon_twitter} />

                            </Link>
                            <Link style={{ boxShadow: "none" }} to={"/"}>
                                <img className="icon-footer" src={icon_github} />
                            </Link>
                        </div>
                    </footer>
                </div>

            </div>
        )
    }
}

export default MainTemplate;