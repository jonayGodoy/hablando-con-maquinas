import React from "react"
import config from '../config-blog'

let stylesStr;
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css;
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />


          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
          />

            {/*INFO*/}
          <meta name="Author" content="Jonay Godoy" />
          <meta name="description" content="Blog personal sobre informática y programación"/>
          <meta name="keywords" content="jonay godoy, clean code, javascript,"/>
          <meta name="robots" content="index, follow" />
            {/*Info
          <meta name="msvalidate.01" content="453947665841FBB11EFD972217B399EE" />
          <meta name="Copyright" content="Copyright (c) 2017 Ulises Santana" />
          */}

            {/*ITEM PROPERTIES*/}
          <meta itemprop="name" content="Jonay Godoy" />
          <meta itemprop="jobTitle" content="Developer" />
          <meta itemprop="description" content={config.blogDescription}/>
          <meta itemprop="knows" content="javascript, clean code, xp" />
          <meta itemprop="email" content="jonay.godoy.reyes@gmail.com" />
          <meta itemprop="alternateName" content="jonay" />
          <meta itemprop="follows" content="https://twitter.com/GodoyJonay" />


            {/*THUMB*/}
          <meta property="og:image" content="./metaImage.jpg"/>
          <meta property="og:image:width" content="460" />
          <meta property="og:image:height" content="460" />
          <link itemprop="image" href="./metaImage.jpg"/>
          <meta name="thumbnail" content="./metaImage.jpg" />
            {/*
          <link rel="canonical" href="https://ulisesantana.github.io/"/>
          <meta property="og:url" content="https://ulisesantana.github.io/"/>
          */}
          <meta property="og:type" content="website"/>


            {/*TWITTER*/}
          <meta name="twitter:site" content="@GodoyJonay"/>
          <meta name="twitter:card" content="summary"/>
            {/*<meta name="twitter:image" content="https://ulisesantana.github.io/img/profile.jpg" />*/}
          <meta name="twitter:title" content={config.blogTitle} />
          <meta name="twitter:description" content={config.blogDescription}/>

            {this.props.headComponents}
          {css}
        </head>
        <body>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
};
