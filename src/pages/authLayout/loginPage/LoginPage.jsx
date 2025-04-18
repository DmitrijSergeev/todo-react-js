import React from 'react';
import {Link} from "react-router";
import {AppRoutes} from "../../../features/AppRoutes.js";

export const LoginPage = () => {
    return (
        <div>
            <h3>Форма входа</h3>
            <form action="">
                <input type="email" placeholder={'Email'}/>
                <input type="password" placeholder={'Password'}/>
                <button>Enter</button>
            </form>
            <p>No account? {''}
            <Link to={`${AppRoutes.AUTH}/${AppRoutes.REG}`}>You need registration</Link>
            </p>
        </div>
    );
};
