import React from 'react';
import {Link} from "react-router";

export const AuthLayout = () => {
    return (
        <div>
            <h2>Authentication</h2>
            <div>
                <div>
                    <Link to={'/auth/login'}>Вход</Link>
                </div>
                <div>
                    <Link to={'/auth/register'}>Регистрация</Link>
                </div>
            </div>
        </div>
    );
};
