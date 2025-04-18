import React from 'react';
import {Link} from "react-router";

export const AboutPage = () => {
    return (
        <div>
            <h1 className={'text-red-800 font-bold'}>Page about company</h1>
            <Link to={'/'}>Main Page</Link>
        </div>
    );
};
