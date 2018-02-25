import React from 'react'
import get from "lodash/get"
import Helmet from "react-helmet";
import  RecentArticles from "../../widgets/recentArticles/RecentArticles";

export default function templateWithWidget(body,posts){
    return (
        <div className="container-new">
            <div className="article">
                <Helmet title={get(this, "props.data.site.siteMetadata.title")} />
                <ul>
                    {body}
                </ul>
            </div>
            <div className="sidebar-column">
                <div>
                    <RecentArticles posts={posts}/>
                </div>
            </div>
            <div className="parchForSizeContainer"/>
        </div>
    )
}