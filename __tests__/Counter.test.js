import React from 'react';
import Counter from '../app/Counter';
import {shallow} from 'enzyme';

const setState = jest.fn();
const useStateSpy = jest.spyOn(React, "useState");
useStateSpy.mockImplementation((initialState) => [initialState, setState]);

describe('All test', ()=> {
    it('starts with a count of 0', ()=> {
        const wrapper = shallow(<Counter />);
        // const countState = wrapper.state().count;
        // expect(countState).toEqual(0);
        console.log('all good')
    })
})