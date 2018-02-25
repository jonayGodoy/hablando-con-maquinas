import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import MenuMobile from './MenuMobile';

import "./menuMobile.css";

function getWrapperMount(){
   return shallow(<MenuMobile />);
}

function getButtonHead(wrapper){
    return wrapper.find('.btn-hamburger').first();
}

function sidePanelcomponent(wrapper){
    return wrapper.find("#drawer");
}

describe("<MenuMobile/>", function(){
    it("Mobile menu panel start hidden", function () {
        let wrapper = shallow(<MenuMobile />);
        expect(wrapper.state().isHidden).to.equal(true);
    });
    it("Mobile menu panel is show when click button ", function () {
        let wrapper = getWrapperMount();
        let button = getButtonHead(wrapper);

        button.simulate('click');

        expect(wrapper.state().isHidden).to.equal(false);
    });
    it("Mobile menu panel is hidden when twice click ", function () {
        let wrapper = getWrapperMount();
        let sidePanel = sidePanelcomponent(wrapper);
        let button = getButtonHead(wrapper);

        button.simulate('click');
        sidePanel.simulate('click');

        expect(wrapper.state().isHidden).to.equal(true);
    });
    it("Mobile menu panel, the background work ", function () {
        let wrapper = getWrapperMount();
        let sidePanel = sidePanelcomponent(wrapper);
        let background = sidePanel.parent();

        background.simulate('click');

        expect(wrapper.state().isHidden).to.equal(true);
    });
});