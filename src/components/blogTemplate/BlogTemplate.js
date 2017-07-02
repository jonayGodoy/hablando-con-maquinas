import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import './sidebar.css'
import RecentArticlesWidget from "../widgets/RecentArticles/RecentArticles"


class BlogTemplate extends React.Component {

    constructor(props, context){
        super(props, context);
       this.getContain = this.getContain.bind(this);
    }

    getContain(){}

    render () {
        return (
        <div className="row">
            <div className="col-sm-8" style={{paddingLeft: "5%"}}>
                {this.getContain()}
            </div>
            <div className="col-sm-4">
                <RecentArticlesWidget {...this.props}/>
            </div>
        </div>
        )
    }
}



export default BlogTemplate;

