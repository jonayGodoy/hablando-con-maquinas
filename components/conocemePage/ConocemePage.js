import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import cv from "./cvDTO"


class ConocemePage extends React.Component {

    render () {
        return (
            <div>{cv.basics.name}</div>
        )
    }
}

ConocemePage.propTypes = {
    route: React.PropTypes.object,
};

export default ConocemePage

