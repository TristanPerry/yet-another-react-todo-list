import React, {Component} from 'react';
import { connect } from 'react-redux';
import { TODO } from '../constants/TodoTypes';
import PropTypes from 'prop-types';
import { todoItemComplete } from '../actions'
import './TodoItem.css';

const mapDispatchToProps = dispatch => {
    return {
        todoItemComplete: todoValue => dispatch(todoItemComplete(todoValue))
    };
};

class ConnectedTodoItem extends Component {

    markAsComplete = (todoId) => {
        this.props.todoItemComplete(todoId); // dispatch Redux action
    };

    render() {
        let deleteIcon = null;
        if (this.props.item.status === TODO) {
            deleteIcon = <a onClick={this.markAsComplete.bind(this, this.props.item.id)} className="Todo-Complete">DONE</a>;
        }

        const className = `Todo-Item ${this.props.item.status}`;

        return (
            <li className={className}>
                {deleteIcon} <span className="Todo-Text">{this.props.item.value}</span>
            </li>
        );
    }
}

ConnectedTodoItem.propTypes = {
    item : PropTypes.shape({
        id: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
    }),
    todoItemComplete : PropTypes.func.isRequired,
}

const TodoItem = connect(null, mapDispatchToProps)(ConnectedTodoItem);

export default TodoItem;
