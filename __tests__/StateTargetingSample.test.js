import React from 'react';
import StateTargetingSample from '../app/StateTargetingSample';
import {shallow} from 'enzyme';

const setState = jest.fn();
const useStateSpy = jest.spyOn(React, "useState");
useStateSpy.mockImplementation((initialState) => [initialState, setState]);
const wrapper = shallow(<StateTargetingSample />);

describe('All test', ()=> {
    it('starts with a count of 0', ()=> {

        const newInput = 'omg yes'

        wrapper.find('.input').simulate('change', {target: {value: newInput}});

        console.log(wrapper.debug());


        expect(setState).toHaveBeenCalledWith(newInput);
    })
})