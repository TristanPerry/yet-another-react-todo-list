import React, {Component} from 'react';
import logo from '../images/logo.svg';
import TodoItem from '../components/TodoItem';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'textInput' : '',
            'todoList' : [
                this.buildTodoItem('todo', 'Brush up on React'),
                this.buildTodoItem('complete', 'Install Node'),
                this.buildTodoItem('todo', 'Convert to Redux'),
                this.buildTodoItem('todo', 'Use more ES6 syntax'),
                this.buildTodoItem('todo', 'Add some unit tests'),
            ],
        }
    }

    formSubmitted = (event) => {
        event.preventDefault();

        this.setState({
            'todoList' : [...this.state.todoList, this.buildTodoItem('todo', this.state.textInput)],
            'textInput' : ''
        });
    }

    buildTodoItem(status, value) {
        return {
            status,
            value,
        };
    }

    todoItemInput = (event) => {
        this.setState({'textInput' : event.target.value})
    }

    markAsComplete = (index) => {
        // TODO Am I incorrectly mutating state here?
        let newTodoList = this.state.todoList.map((item, itemIndex) => {
            if (index === itemIndex) {
                item.status = 'complete';
            }
            return item;
        });
        this.setState({'todoList' : newTodoList});
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">{this.props.title}</h1>
                </header>
                <form className="Form" onSubmit={this.formSubmitted}>
                    <input type="text" className="Todo-Input" value={this.state.textInput} placeholder={this.props.todoInputPlaceholder} onChange={this.todoItemInput} />
                    <ul className="TodoList">
                        {this.state.todoList.map((item, index) => <TodoItem item={item} key={index} markAsComplete={this.markAsComplete.bind(this, index)} />)}
                    </ul>
                </form>
            </div>
        );
    }
}

App.defaultProps = {
    'title' : 'Yet Another React Todo List',
    'todoInputPlaceholder' : 'Enter new todo item here...',
};

export default App;
