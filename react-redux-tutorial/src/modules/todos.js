import produce from "immer";
import { handleActions } from "redux-actions";
import { createAction } from "redux-actions";

const CHANGE_INPUT = 'todos/CHANGE_INPUT'; //인풋값을 변경
const INSERT = 'todos/INSERT'; //새로운 todo를 등록함
const TOGGLE = 'todos/TOGGLE'; //todo를 체크/체크해제
const REMOVE = 'todos/REMOVE'; //todo를 제거함 

export const changeInput = createAction(CHANGE_INPUT, input => input);

let id = 3; // insert가 호출될때마다 1씩 더해진다.
export const insert = createAction(INSERT, text => ({
    id: id++,
    text,
    done: false,
}));

export const toggle = createAction(TOGGLE, id => id);

export const remove = createAction(REMOVE, id => id);

const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: '리덕스 기초 배우기',
            done: true
        },
        {
            id: 2,
            text: '리액트와 리덕스 사용하기',
            done: false
        }
    ]
};

// function todos(state = initialState, action){
//     switch (action.type){
//         case CHANGE_INPUT:
//             return{
//                 ...state,
//                 input: action.input
//             };
//         case INSERT:
//             return{
//                 ...state,
//                 todos: state.todos.concat(action.todo)
//             };
//         case TOGGLE:
//             return{
//                 ...state,
//                 todos: state.todos.map(todo =>
//                     todo.id === action.id ? { ...todo, done: !todo.done } : todo    
//                 )
//             }
//         case REMOVE: 
//             return {
//                 ...state,
//                 todos: state.todos.filter(todo => todo.id !== action.id)
//             }
//         default:
//             return state;
//     }
// }
const todos = handleActions(
    {
        [CHANGE_INPUT]: (state, {payload: input}) => 
        produce(state, draft => {
            draft.input = input;
        }),
        [INSERT]: (state, {payload: todo}) => 
        produce(state, draft => {
            draft.todos.push(todo);
        }),
        // ({
        //     ...state,
        //     todos: state.todos.concat(todo)
        // }),
        [TOGGLE]: (state, {payload: id}) => 
        produce(state, draft => {
            const todo = draft.todos.find(todo => todo.id === id);
            todo.done = !todo.done;
        }),
        // ({
        //     ...state,
        //     todos: state.todos.map(todo => 
        //         todo.id === id ? { ...todo, done: !todo.done } : todo,    
        //     ),
        // }),
        [REMOVE]: (state, {payload: id}) => 
        produce(state, draft => {
            const index = draft.todos.findIndex(todo => todo.id === id);
            draft.todos.splice(index, 1);
        }),
        // ({
        //     ...state,
        //      todos: state.todos.filter(todo => todo.id !== id),
        // }),
    },
    initialState,
)

export default todos;

