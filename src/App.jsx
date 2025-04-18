import {useState} from "react";
import {TodoItem} from "./components/todoItem/TodoItem.jsx";
import {AddTodo} from "./components/addTodo/AddTodo.jsx";
import {Route, Routes} from "react-router";
import {HomePage} from "./pages/homePage/HomePage.jsx";
import {AboutPage} from "./pages/aboutPage/AboutPage.jsx";
import {ErrorPage} from "./pages/errorPage/ErrorPage.jsx";
import {AuthLayout} from "./pages/authLayout/AuthLayout.jsx";
import {AppRoutes} from "./features/AppRoutes.js";
import {LoginPage} from "./pages/authLayout/loginPage/LoginPage.jsx";
import {RegisterPage} from "./pages/authLayout/registerPage/RegisterPage.jsx";

export function App() {

    const initialTodos = [
        {id: 1, text: 'Изучить React'},
        {id: 2, text: 'Сделать TODO-APP'},
        {id: 3, text: 'Сделать деплой'},
    ]

    const getInitialTheme = () => {
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)".matches);

        if (savedTheme) {
            return savedTheme
        }else if (prefersDark) {
            return 'dark'
        }else {
            const hours = new Date().getHours();
            return hours < 6 || hours >= 21 ? 'dark' : 'light'
        }
    }

    const [todos, setTodos] = useState(initialTodos)
    const [theme, setTheme] = useState(getInitialTheme)

    const toggleTheme = () => {
        setTheme( (prevTheme)=> {
            const newTheme = prevTheme === "light" ? "dark" : "light"
            localStorage.setItem("theme", newTheme)
            return newTheme;
        })
    }

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

        <div data-theme={theme}
            className={'flex flex-col min-h-screen ' +
                'justify-center items-center bg-page-light dark:bg-page-dark'}
        >

            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path={AppRoutes.ABOUT} element={<AboutPage/>}/>
                <Route path={AppRoutes.AUTH} element={<AuthLayout/>}/>

                <Route path={`${AppRoutes.AUTH}/${AppRoutes.LOGIN}`}
                       element={<LoginPage />}/>
                <Route path={`${AppRoutes.AUTH}/${AppRoutes.REG}`} element={<RegisterPage/>}/>

                <Route path={AppRoutes.ERROR} element={<ErrorPage/>}/>
            </Routes>

           <di>
               <div>
                   <button onClick={toggleTheme}>
                       <div>Переключение</div>
                   </button>
               </div>
           </di>

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
