import React from "react";
import { Link } from "react-router-dom";

type Props = {};

export default function HomePage({}: Props) {
    return (
        <div className="HomePage">
            Welcome to Home Page button
            <Link to="/login">Login</Link>
            or
            <Link to="/signup">Sign up</Link>
        </div>
    );
}
