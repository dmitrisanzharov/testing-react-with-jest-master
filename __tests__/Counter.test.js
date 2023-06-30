import React from 'react';
import Counter from '../app/Counter';
import {shallow} from 'enzyme';

describe('All test', ()=> {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Counter />);
    })



    it('starts with a count of 0', ()=> {
  
        const text = wrapper.find('h2').text();
        expect(text).toEqual('the count is: 0');
       
    });


    it('increments by 1', ()=> {

        const incrementBtn = wrapper.find('#button1');

        incrementBtn.simulate('click');
   
         const text = wrapper.find('h2').text();
      
        expect(text).toBe('the count is: 1');


    })

    it('decrements by 1', ()=> {

        const incrementBtn = wrapper.find('#button2');

        incrementBtn.simulate('click');
   
         const text = wrapper.find('h2').text();
      
        expect(text).toBe('the count is: -1');

        // console.log(wrapper.debug());
    })



    // end of a test
})