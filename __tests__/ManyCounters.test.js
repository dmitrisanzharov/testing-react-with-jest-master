import React from 'react';
import {shallow, mount} from 'enzyme';
import ManyCounters from '../app/ManyCounters';


describe.skip('many counters', () => {
    it('test1', ()=> {
        const wrapper = shallow(<ManyCounters />);
     
        const counters = wrapper.find('Counter');
        expect(counters.length).toBe(2)
        // console.log(wrapper.debug())
   
    })


    it('can add more counters', ()=> {
        const wrapper = mount(<ManyCounters />);

        const btn = wrapper.find('#addMore');
        btn.simulate('click');
     
        const counters = wrapper.find('Counter');
        expect(counters.length).toBe(3)
      
        console.log('wrapper debug', wrapper.debug());
    })

    it('find anything', ()=> {
        const wrapper = mount(<ManyCounters />);
        const h1 = wrapper.find('ManyCounters');
        expect(counters.length).toBe(1);
    })


    // end of the test suite
})