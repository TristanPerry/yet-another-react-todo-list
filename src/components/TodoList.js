import React from 'react';
import TodoItem from '../components/TodoItem';
import { connect } from 'react-redux'
import './TodoList.css';
import PropTypes from "prop-types";

const mapStateToProps = state => {
    return { todoList: state.todoList };
};

const ConnectedTodoList = ({ todoList }) => (
    <ul className="TodoList">
        {todoList.map(item => <TodoItem item={item} key={item.id + item.status} />)}
    </ul>
);

ConnectedTodoList.propTypes = {
    todoList : PropTypes.array.isRequired
}

const TodoList = connect(mapStateToProps)(ConnectedTodoList);

export default TodoList;
