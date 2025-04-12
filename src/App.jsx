import {useState} from "react";
import {TodoItem} from "./components/todoItem/TodoItem.jsx";
import {AddTodo} from "./components/addTodo/AddTodo.jsx";

export function App() {

    const initialTodos = [
        {id: 1, text: 'Изучить React'},
        {id: 2, text: 'Сделать TODO-APP'},
        {id: 3, text: 'Сделать деплой'},
    ]

    const [todos, setTodos] = useState(initialTodos)

    const onAdd = (text) => {
        const newTodo = {
            id: Date.now(),
            text
        }
        setTodos([...todos, newTodo])
    }

    const onDelete = (id) => {
        setTodos( (prevTodos)=> prevTodos.filter( t => t.id !== id))
    }

    return (
        <div className={'flex flex-col'}>
            <div>
                <h1>MY_TODO</h1>
                <AddTodo
                onAdd={onAdd}
                />
                <div>
                    {todos.map((todo) => (
                        <TodoItem key={todo.id}
                                  todo={todo}
                                  onDelete={onDelete}
                        />
                    ) )}
                </div>
            </div>
        </div>
    )
}
