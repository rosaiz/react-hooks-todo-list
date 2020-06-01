//Import dependencies
import * as React from 'react'
import shortid from 'shortid'
//Import Interfaces
import { TodoInterface, TodoFormInterface } from '../interfaces'

//Todo form component
const TodoForm = (props: TodoFormInterface) => {
    //Create ref for form input
    const inputRef = React.useRef<HTMLInputElement>(null)

    //Create form state
    const [formState, setFormState] = React.useState('')
    //let texto: string = ""

    //Handle todo input change
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        //Update form state with the text from input
        setFormState(event.target.value)
        //texto = event.target.value
    }

    //Handle 'Enter' in todo input
    function handleInputEnter(event: React.KeyboardEvent) {
        let newTodo: TodoInterface
        //Check for 'Enter' key
        if (event.key === 'Enter') {
            if (formState != "") {
                //Prepare new todo object
                newTodo = {
                    id: shortid.generate(),
                    text: formState,
                    isCompleted: false
                }
                //Create new todo Item
                props.handleTodoCreate(newTodo)
                //Reset the input field
                if (inputRef && inputRef.current) {
                    inputRef.current.value = ""
                    setFormState('')
                }
            } else { alert("todo cannot be empty")}
        }

    }

    return (
        <div className="todo-form">
            <input
                ref={inputRef}
                type="text"
                placeholder='Enter new todo'
                onChange={event => handleInputChange(event)}
                onKeyPress={event => handleInputEnter(event)}
            >
            </input>
        </div>
        )
}

export default TodoForm