import React from "react";
import AvatarImg from "../images/my-image.jpg"
import Typewriter from 'typewriter-effect'

export default function Home(){
    return(
        <div className="text-white">
            <div>
            <h1>Hi, I'm Ayush Mahajan</h1>
            <div className="flex">
            <h2 className="mr-2">I am a </h2>
            <Typewriter
            options={{
                strings : ["Frontend Developer"],
                autoStart : true,
                loop : true,
            }} />
            </div>
            
            </div>
            <img className="w-[20%] rounded" src={AvatarImg} /> 
        </div>
    )
}