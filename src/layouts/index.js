import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"

import MainTemplate from "../components/commons/template/MainTemplate";

class Template extends React.Component {
    render () {
        const { location, children } = this.props;
        return <MainTemplate children={children}/>
    }
}
export default Template;
