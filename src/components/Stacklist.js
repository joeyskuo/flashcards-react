import React, {Component} from 'react';
import { connect } from 'react-redux';
import stacks from '../data/stacks.json';
import { Link } from 'react-router-dom';
import { setStack } from '../actions';

class StackList extends Component {
    render() {
        return (
            <div>
                {
                    stacks.map(stack => {
                        return (
                            <Link to='/stack'>
                                <h4 key={stack.id}>{stack.title}</h4>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
}

const connectComponent = connect();

export default connectComponent(StackList);