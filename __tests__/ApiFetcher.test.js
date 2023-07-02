import React from 'react';
import {mount} from 'enzyme';
import { act } from 'react-dom/test-utils';
import ApiFetcher from '../app/ApiFetcher';
import 'regenerator-runtime/runtime';
import axios from 'axios';


const waitingFunction = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000);
    });
}

describe.skip('ApiFetcher', () => {
    it('fetches the data', async ()=> {

        await act(async () => {

            const wrapper = mount(<ApiFetcher />);
            expect(wrapper.find('#loading').text()).toEqual('Loading...');
      
           let getData = await axios.get('https://jsonplaceholder.typicode.com/users');
        //    console.log(getData.data[0]);   
         
            await waitingFunction();
            
            wrapper.update();
            // console.log(wrapper.debug());
            expect(wrapper.find('#name').text()).toContain('Graham');
            expect(wrapper.find('#username').text()).toEqual('Bret');
            
        }
        )
  
    })
})