import { ADD_TODO_ITEM, TODO_ITEM_COMPLETE } from "../constants/ActionTypes";
import { TODO, COMPLETE } from '../constants/TodoTypes';
import uuidv1 from "uuid";

const initialState = {
    'textInput' : '',
    'todoList' : [
        { id : uuidv1(), status : TODO, value: 'Brush up on React'},
        { id : uuidv1(), status : COMPLETE, value: 'Install Node'},
        { id : uuidv1(), status : COMPLETE, value: 'Convert to Redux'},
        { id : uuidv1(), status : TODO, value: 'Use more ES6 syntax'},
        { id : uuidv1(), status : TODO, value: 'Add some unit tests'},
    ],
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO_ITEM:
            return { ...state, todoList: [...state.todoList, action.payload]};
        case TODO_ITEM_COMPLETE:
            const { todoList } = state;
            let newTodoList = todoList.map(item => {
                if (item.id === action.payload) {
                    item.status = 'complete';
                }
                return item;
            });

            return { ...state, todoList: newTodoList};
        default:
            return state;
    }
};

export default rootReducer;