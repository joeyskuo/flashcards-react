import React from 'react';
import { shallow } from 'enzyme';
import { StackList } from './Stacklist';
import { stacks } from '../data/fixtures';

const props = { stacks };
console.log(props);

describe('StackList', () => {
    const stackList = shallow(<StackList {...props} />);
    console.log({...props});

    it('renders the correct number of links', () => {
        expect(stackList.find('Link').length).toEqual(props.stacks.length);
    })
});