import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function HostLayout(){
    return(
        <div className="min-h-screen bg-light-black overflow-hidden font-display">
        <Header />
        <Outlet />
        </div>
    )
}