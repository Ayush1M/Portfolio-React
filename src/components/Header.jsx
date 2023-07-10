import React from "react";
import { NavLink } from "react-router-dom";
import logoImg  from "../images/logo.png"

export default function Header(){
    return (
        <>
        <header className="text-white flex justify-between pt-4">
            <img src={logoImg} className="w-32" />
        <nav className="py-8 mr-16 flex justify-end text-xl">
        <NavLink to="/" className={(({isActive}) => isActive ? "decoration-4 underline underline-offset-8 decoration-orange-500" : "mr-12 hover:text-orange-500")}>Home</NavLink>
        <NavLink to="projects" className={(({isActive}) => isActive ? "decoration-4 underline underline-offset-8 decoration-orange-500" : "ml-12 hover:text-orange-500")}>Projects</NavLink>
        </nav>
        </header>
        </>
    )
}