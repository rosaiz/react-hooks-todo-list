//Import dependencies
import * as React from 'react'
//Import Todo item
import TodoItem from './todo-item'
//Import Interfaces
import { TodoListInterface } from '../interfaces'

//TodoList component
const TodoList = (props: TodoListInterface) => {
    return (
        <div className="todo-list">
            <ul>
                {props.todos.map((todo) => (
                    <li key={todo.id}>
                        <TodoItem
                            todo={todo}
                            handleTodoUpdate={props.handleTodoUpdate}
                            handleTodoRemove={props.handleTodoRemove}
                            handleTodoComplete={props.handleTodoComplete}
                            handleTodoBlur={props.handleTodoBlur}
                        />
                    </li>
                ))}
            </ul>
        </div>
        )
}
export default TodoList