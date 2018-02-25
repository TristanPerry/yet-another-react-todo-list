import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addTodoItem } from '../actions';
import logo from '../images/logo.svg';
import TodoList from '../components/TodoList';
import { TODO } from '../constants/TodoTypes';
import './App.css';
import uuidv1 from "uuid";
import PropTypes from "prop-types";

const mapDispatchToProps = dispatch => {
    return {
        addTodoItem: todoItem => dispatch(addTodoItem(todoItem))
    };
};

class ConnectedApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'textInput' : '',
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { textInput } = this.state;
        const id = uuidv1();

        this.props.addTodoItem({id : id, status : TODO, value : textInput}); // dispatch Redux action

        this.setState({
            'textInput' : ''
        });
    }

    handleChange = (event) => {
        this.setState({ [event.target.id] : event.target.value })
    }

    render() {
        const { textInput } =  this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">{this.props.title}</h1>
                </header>
                <form className="Form" onSubmit={this.handleSubmit}>
                    <input type="text" id="textInput" className="Todo-Input" value={textInput} placeholder={this.props.todoInputPlaceholder} onChange={this.handleChange} />
                    <TodoList />
                </form>
            </div>
        );
    }
}

ConnectedApp.defaultProps = {
    'title' : 'Yet Another React Todo List',
    'todoInputPlaceholder' : 'Enter new todo item here...',
};

ConnectedApp.propTypes = {
    title : PropTypes.string.isRequired,
    todoInputPlaceholder : PropTypes.string.isRequired,
    addTodoItem : PropTypes.func.isRequired,
};

const App = connect(null, mapDispatchToProps)(ConnectedApp);

export default App;
