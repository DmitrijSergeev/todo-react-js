import React from 'react';
import {Link} from "react-router";
import {AppRoutes} from "../../../features/AppRoutes.js";

export const RegisterPage = () => {
    return (
        <div>
            REGISTRATION
            <Link to={`${AppRoutes.AUTH}/${AppRoutes.LOGIN}`}>Enter</Link>
        </div>
    );
};
