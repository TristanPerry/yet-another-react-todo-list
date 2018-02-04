import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

class TodoItem extends Component {
    render() {
        let deleteIcon = null;
        if (this.props.item.status === 'todo') {
            deleteIcon = <a onClick={this.props.markAsComplete.bind(this)} className="Todo-Complete">DONE</a>;
        }

        const className = `Todo-Item ${this.props.item.status}`;

        return (
            <li className={className}>
                {deleteIcon} <span className="Todo-Text">{this.props.item.value}</span>
            </li>
        );
    }
}

TodoItem.propTypes = {
    item : PropTypes.shape({
        status: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
    }),
    markAsComplete : PropTypes.func.isRequired,
}

export default TodoItem;
