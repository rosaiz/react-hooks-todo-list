//Import dependencies
import React from 'react';
import { render } from 'react-dom'
//Import components
import TodoForm from './components/todo-form'
import TodoList from './components/todo-list'
//Import interfaces
import { TodoInterface } from './interfaces'
// Import styles
import './styles/styles.css'
import TodoListCompleted from './components/todo-list-completed';


//TodoListApp component
const TodoListApp = () => {
    const [todos, setTodos] = React.useState<TodoInterface[]>([])
    const [counter, setCount] = React.useState(0)
    const [counterCompleted, setCountC] = React.useState(0)
 
    //Creating new todo item
    function handleTodoCreate(todo: TodoInterface) {
        //Prepare new todos state
        const newTodosState: TodoInterface[] = [...todos]

        //Update new todos state
        newTodosState.push(todo)

        //Update todos state
        setTodos(newTodosState)

        //Increase Counter
        setCount(counter + 1)

    }

    //Update existing todo item
    function handleTodoUpdate(event: React.ChangeEvent<HTMLInputElement>, id: string) {
        //Prepare new todos state
        const newTodosState: TodoInterface[] = [...todos]

        //Find correct todo item to update
        newTodosState.find((todo: TodoInterface) => todo.id === id)!.text = event.target.value

        //Update todos state
        setTodos(newTodosState)
    }

    // Remove existing todo item
    function handleTodoRemove(id: string) {
        // Prepare new todos state
        const checkCompleted: TodoInterface[] = [...todos] 
        const newTodosState: TodoInterface[] = todos.filter((todo: TodoInterface) => todo.id !== id)
        // Update todos state
        setTodos(newTodosState)
        //Decrease counter
        setCount(counter - 1)
        if (checkCompleted.find((todo: TodoInterface) => todo.id === id)!.isCompleted)
            setCountC(counterCompleted - 1)

    }

    // Check existing todo item as completed
    function handleTodoComplete(id: string) {
        // Copy current todos state
        const newTodosState: TodoInterface[] = [...todos]
        // Find the correct todo item and update its 'isCompleted' key
        newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted = !newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted
        //Count completed tasks
        if (newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted)
            setCountC(counterCompleted + 1)
        else
            setCountC(counterCompleted - 1)
        // Update todos state
        setTodos(newTodosState)
        
    }
    // Check if todo item has title
    function handleTodoBlur(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.value.length === 0) {
            event.target.classList.add('todo-input-error')
        } else {
            event.target.classList.remove('todo-input-error')
        }
    }

 
    return (
        <div className="todo-list-app">
            <div className="counters">
                <h1 className="todo-counter-all"> {counter} </h1>
                <h1 className="todo-counter-completed"> {counterCompleted} </h1>
                <h1 className="todo-counter-remained">{counter - counterCompleted}</h1>
            </div>
            {/* Todo form Component */}
            <TodoForm
                todos={todos}
                handleTodoCreate={handleTodoCreate}
            />

            {/* Todo list component */}
            <TodoList
                todos={todos}
                handleTodoUpdate={handleTodoUpdate}
                handleTodoRemove={handleTodoRemove}
                handleTodoComplete={handleTodoComplete}
                handleTodoBlur={handleTodoBlur}
            />
            <TodoListCompleted
                todos={todos}
                handleTodoUpdate={handleTodoUpdate}
                handleTodoRemove={handleTodoRemove}
                handleTodoComplete={handleTodoComplete}
                handleTodoBlur={handleTodoBlur}
            />
        </div>
    )
}
//Render the App in the DOM
const rootElement = document.getElementById('root')
render(<TodoListApp />, rootElement)