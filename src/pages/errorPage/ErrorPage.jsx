import React from 'react';
import {Link} from "react-router";

export const ErrorPage = () => {
    return (
        <div>
            <h1 className={'text-amber-700 font-bold'}>ErrorPage</h1>
            <div>
                <Link to={'/'}>Вход</Link>
            </div>
            <div>
                <Link to={'/about'}>About company</Link>
            </div>
        </div>
    );
};
