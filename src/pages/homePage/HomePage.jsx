import React from 'react';
import {Link} from "react-router";

export const HomePage = () => {
    return (
        <div>
            <h1 className={'text-red-800 font-bold'}>Main page</h1>
            <Link to={'/about'}>Page about company</Link>
            <div>
                <Link to={'/auth'}>Authentication</Link>
            </div>
        </div>
    );
};
