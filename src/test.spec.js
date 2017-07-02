import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import MenuMobile from './components/commons/menuMobile/MenuMobile';

describe("suite test", function(){
    it("test green", function () {
        expect(true).to.equal(true);
    });
    it("test1", function () {
        let wrapper = shallow(<MenuMobile />);
        console.log(wrapper.html());
    });
});