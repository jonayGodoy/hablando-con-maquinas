import React from 'react'
import Helmet from "react-helmet"
import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'
import { GoogleFont, TypographyStyle } from 'react-typography'
import typography from './utils/typography'

const BUILD_TIME = new Date().getTime();

module.exports = React.createClass({
  displayName: 'HTML',
  propTypes: {
    body: React.PropTypes.string,
  },
  render () {
    const { body } = this.props;
    const head = Helmet.rewind();

    let css;
    if (process.env.NODE_ENV === 'production') {
      css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
    }

        let isDevDeploy = !!prefixLink("");
      if(isDevDeploy){
         console.log("meta ignorada "+ isDevDeploy);
          return (
              <html lang="en">
              <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                  {head.title.toComponent()}
                  <meta name="robots" content="NoIndex, NoFollow" />
                <TypographyStyle typography={typography} />
                <GoogleFont typography={typography} />
                  {css}
              </head>
              <body>
              <div id="react-mount" dangerouslySetInnerHTML={{ __html: body }} />
              <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
              </body>
              </html>)
      }else{
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {head.title.toComponent()}

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
          <meta itemprop="knows" content="javascript, php" />
          <meta itemprop="email" content="jonay.godoy.reyes@gmail.com" />
          <meta itemprop="alternateName" content="jonay" />
          <meta itemprop="follows" content="https://twitter.com/GodoyJonay" />

          
            {/*THUMB
          <meta property="og:image" content="img/profile.jpg"/>
          <link itemprop="image" href="img/profile.jpg"/>
          <meta name="thumbnail" content="img/profile.jpg" />
          <meta property="og:image:width" content="460" />
          <meta property="og:image:height" content="460" />
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

          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />
          {css}
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: body }} />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    )
      }
  },
});
