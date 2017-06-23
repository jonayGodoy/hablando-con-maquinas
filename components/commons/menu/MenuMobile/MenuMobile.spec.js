import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import MenuMobile from './MenuMobile';

function getWrapperMount(){
   return mount(<MenuMobile />,{ attachTo: document.body });
}

function getButtonHead(wrapper){
    return wrapper.find('button').first();
}

describe("<MenuMobile/>", function(){
    it("Mobile menu panel start hidden", function () {
        let wrapper = shallow(<MenuMobile />);
        let sidePanel = wrapper.find("#menu-mobile-lateral");
        expect(sidePanel.hasClass('hidden')).to.equal(true);
    });
    it("Mobile menu panel is show when click button ", function () {
        let wrapper = getWrapperMount();
        let sidePanel = wrapper.find("#menu-mobile-lateral");
        let button = getButtonHead(wrapper);

        button.simulate('click');

        expect(sidePanel.hasClass('hidden')).to.equal(false);
    });
    it("Mobile menu panel is hidden when twice click button ", function () {
        let wrapper = getWrapperMount();
        let sidePanel = wrapper.find("#menu-mobile-lateral");
        let button = getButtonHead(wrapper);

        button.simulate('click');
        button.simulate('click');

        expect(sidePanel.hasClass('hidden')).to.equal(false);
    });
    it("Mobile menu panel, the button work ", function () {
        let wrapper = getWrapperMount();
        let sidePanel = wrapper.find("#menu-mobile-lateral");
        let button = sidePanel.find('span').first();

        button.simulate('click');

        expect(sidePanel.hasClass('hidden')).to.equal(false);
    });
});