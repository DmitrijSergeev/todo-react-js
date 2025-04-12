import {useState} from "react";
import {TodoItem} from "./components/todoItem/TodoItem.jsx";

export function App() {

    const initialTodos = [
        {id: 1, text: 'Изучить React'},
        {id: 2, text: 'Сделать TODO-APP'},
        {id: 3, text: 'Сделать деплой'},
    ]

    const [todos, setTodos] = useState(initialTodos)

    // const onDelete = (id) => {
    //     setTodos( todos.filter(t => t.id !== id))
    // }

    const onDelete = (id) => {
        setTodos( (prevTodos)=> prevTodos.filter( t => t.id !== id))
    }

    return (
        <div>
            <div>
                <h1>MY_TODO</h1>
                <div>Здесь будет компонент для добавления задач</div>
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
