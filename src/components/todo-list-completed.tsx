//Import dependencies
import * as React from 'react'
//Import Todo item
import TodoItem from './todo-item'
//Import Interfaces
import { TodoListInterface } from '../interfaces'

//TodoList component
const TodoListCompleted = (props: TodoListInterface) => {
    return (
        <div className="completed">
            <ul>
                {props.todos.map((todo) => (
                    todo.isCompleted ? (
                    <li key={todo.id}>
                        <TodoItem
                            todo={todo}
                            handleTodoUpdate={props.handleTodoUpdate}
                            handleTodoRemove={props.handleTodoRemove}
                            handleTodoComplete={props.handleTodoComplete}
                            handleTodoBlur={props.handleTodoBlur}
                        />
                    </li>
                        ) : (<h1 />)
                ))}
            </ul>
        </div>
    )
}
export default TodoListCompleted