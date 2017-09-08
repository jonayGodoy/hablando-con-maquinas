import React from 'react';
import get from "lodash/get";
import './sidebar.css'
import  RecentArticles from "../widgets/recentArticles/RecentArticles";

class BlogTemplate extends React.Component {

    constructor(props, context){
        super(props, context);
       this.getContain = this.getContain.bind(this);
        this.posts = get(this, "props.data.allMarkdownRemark.edges");
    }

    getContain(){}


    render () {
        return (
        <div className="row">
            <div className="col-sm-8" style={{paddingLeft: "5%"}}>
                {this.getContain()}
            </div>
            <div className="col-sm-4"><RecentArticles/></div>
        </div>
        )
    }
}


export default BlogTemplate;

