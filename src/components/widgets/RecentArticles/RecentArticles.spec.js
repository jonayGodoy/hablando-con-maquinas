import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import RecentArticle from './RecentArticles';


function getStubPage(number){
    let page = {
        data:{
            body: "<h1>post any info</h1>",
            date: "2016-12-29T22:40:32.169Z",
            image_article: "anyImage.jpg",
            path: "/anyPath"+number+"/",
            title: "any title"+number
        },
        file:{},
        path: "/anyPath"+number+"/",
        requirePath: "/anyPathFile"+number+"/.index.md"
    };
    return page;
}

function getStubPages(numPages){
    let pages = [];
    for(let i = 0; i < numPages;i++){pages.push(getStubPage(i))}
    return {pages: pages};
}


describe("<RecentArticle />",function(){
    it("three post show three links", function () {
        let wrapper = shallow(<RecentArticle route={getStubPages(3)} />);
        let linkPages = wrapper.find("ul");

        expect(linkPages.length).to.equal(3);
    });
    it("max limit five pages", function () {
        let wrapper = shallow(<RecentArticle route={getStubPages(8)} />);
        let linkPages = wrapper.find("ul");

        expect(linkPages.length).to.equal(5);
    });
    it("Items are sorted from most recent to oldest", function () {
        let pages = getStubPages(8);
        let wrapper = shallow(<RecentArticle route={pages} />);
        let linkPages = wrapper.find("ul");

        pages = pages.pages.reverse().slice(0,5);


        expect(linkPages.length).to.equal(5);
        let i = 0;
        linkPages.forEach(function (node) {
            expect(node.childAt(0).children().text()).to.equal(pages[i].data.title);
            i++;
        });
    });
});

