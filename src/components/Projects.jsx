import React from "react";
import project1 from "../projects/project-image-1.png"
import project2 from "../projects/project-image-2.png"
import project3 from "../projects/project-image-3.png"
import project4 from "../projects/project-image-4.png"
import project5 from "../projects/project-image-5.png"
import react from "../images/icons/react-icon.png"
import css from "../images/icons/css-icon.png"
import html from "../images/icons/html-icon.png"
import javaScript from "../images/icons/javascript-icon.png"
import api from "../images/icons/restapi-icon.png"
import { BsArrowRight } from "react-icons/bs"

export default function Projects(){
    return(
        <>
        <h1 className="text-orange-500 text-center text-6xl mt-16">My Work</h1>
        <section className="grid grid-cols-3 gap-8 w-11/12 mt-20 m-auto">
            <div className="border-2 border-orange-500 rounded-lg bg-black grid grid-cols-1">
                <img className="rounded-t-lg" src={project1} alt="" />
                <p className="text-white text-2xl mt-6 mx-4">A fun quiz app made with React and React Router.</p>
                <p className="flex items-center text-xl text-orange-500 ml-4 mt-8">Made with : <img className="w-12 ml-4" src={react} alt="" /><img className="w-12" src={css} alt="" /><img className="w-10" src={api} alt="" /></p>
                <div className="flex items-center ml-4 mt-10 mb-6">
                <a className="bg-orange-500 text-black px-16 py-4 rounded-lg flex items-center justify-center w-1/5 text-2xl mr-6 relative z-10 before:absolute before:inset-0 before:bg-black before:-z-10 before:border-2 before:border-orange-500 before:border-solid before:rounded-lg before:origin-left before:scale-x-0 before:transition-transform before:hover:scale-x-100 hover:text-orange-500" href="" target="_blank" rel="noopener noreferrer">Live</a>

                <a className="bg-orange-500 text-black px-16 py-4 rounded-lg w-1/5 flex items-center justify-center text-2xl relative z-10 before:absolute before:inset-0 before:bg-black before:-z-10 before:border-2 before:border-orange-500 before:border-solid before:rounded-lg before:origin-left before:scale-x-0 before:transition-transform before:hover:scale-x-100 hover:text-orange-500" href="" target="_blank" rel="noopener noreferrer">Github</a>
                </div>
            </div>

            <div className="border-2 border-orange-500 rounded-lg bg-black grid grid-cols-1">
                <img className="rounded-t-lg" src={project2} alt="" />
                <p className="text-white text-2xl mt-6 mx-4">Tenzies Game made with React. Your Objective is to roll the dice till all the dice have same value.</p>
                <p className="flex items-center text-xl text-orange-500 ml-4 mt-8">Made with : <img className="w-12 ml-4" src={react} alt="" /><img className="w-12" src={css} alt="" /></p>
                <div className="flex items-center ml-4 mt-10 mb-6">
                <a className="bg-orange-500 text-black px-16 py-4 rounded-lg w-1/5 flex items-center justify-center text-2xl mr-6 relative z-10 before:absolute before:inset-0 before:bg-black before:-z-10 before:border-2 before:border-orange-500 before:border-solid before:rounded-lg before:origin-left before:scale-x-0 before:transition-transform before:hover:scale-x-100 hover:text-orange-500" href="" target="_blank" rel="noopener noreferrer">Live</a>

                <a className="bg-orange-500 text-black px-16 py-4 rounded-lg w-1/5 flex items-center justify-center text-2xl relative z-10 before:absolute before:inset-0 before:bg-black before:-z-10 before:border-2 before:border-orange-500 before:border-solid before:rounded-lg before:origin-left before:scale-x-0 before:transition-transform before:hover:scale-x-100 hover:text-orange-500" href="" target="_blank" rel="noopener noreferrer">Github</a>
                </div>
            </div>

            <div className="border-2 border-orange-500 rounded-lg bg-black grid grid-cols-1">
                <img className="rounded-t-lg" src={project3} alt="" />
                <p className="text-white text-2xl mt-6 mx-4">A fun application to test how fast you can type in a given amount of time. It consists of a theme switcher too.</p>
                <p className="flex items-center text-xl text-orange-500 ml-4 mt-8">Made with : <img className="w-12 ml-4" src={react} alt="" /><img className="w-12" src={css} alt="" /></p>
                <div className="flex items-center ml-4 mt-10 mb-6">
                <a className="bg-orange-500 text-black px-16 py-4 rounded-lg w-1/5 flex items-center justify-center text-2xl mr-6 relative z-10 before:absolute before:inset-0 before:bg-black before:-z-10 before:border-2 before:border-orange-500 before:border-solid before:rounded-lg before:origin-left before:scale-x-0 before:transition-transform before:hover:scale-x-100 hover:text-orange-500" href="" target="_blank" rel="noopener noreferrer">Live</a>

                <a className="bg-orange-500 text-black px-16 py-4 rounded-lg w-1/5 flex items-center justify-center text-2xl relative z-10 before:absolute before:inset-0 before:bg-black before:-z-10 before:border-2 before:border-orange-500 before:border-solid before:rounded-lg before:origin-left before:scale-x-0 before:transition-transform before:hover:scale-x-100 hover:text-orange-500" href="" target="_blank" rel="noopener noreferrer">Github</a>
                </div>
            </div>

            <div className="border-2 border-orange-500 rounded-lg bg-black grid grid-cols-1">
                <img className="rounded-t-lg h-60 w-screen object-cover object-top" src={project4} alt="" />
                <p className="text-white text-2xl mt-6 mx-4">Twimba is an Application that lets you add your own thoughts in the form of tweets and also lets you like, delete and even reply to a particular tweet.</p>
                <p className="flex items-center text-xl text-orange-500 ml-4 mt-8">Made with : <img className="w-12 ml-4" src={html} alt="" /><img className="w-12" src={css} alt="" /><img className="w-12" src={javaScript} alt="" /></p>
                <div className="flex items-center ml-4 mt-10 mb-6">
                <a className="bg-orange-500 text-black px-16 py-4 rounded-lg w-1/5 flex items-center justify-center text-2xl mr-6 relative z-10 before:absolute before:inset-0 before:bg-black before:-z-10 before:border-2 before:border-orange-500 before:border-solid before:rounded-lg before:origin-left before:scale-x-0 before:transition-transform before:hover:scale-x-100 hover:text-orange-500" href="" target="_blank" rel="noopener noreferrer">Live</a>

                <a className="bg-orange-500 text-black px-16 py-4 rounded-lg w-1/5 flex items-center justify-center text-2xl relative z-10 before:absolute before:inset-0 before:bg-black before:-z-10 before:border-2 before:border-orange-500 before:border-solid before:rounded-lg before:origin-left before:scale-x-0 before:transition-transform before:hover:scale-x-100 hover:text-orange-500" href="" target="_blank" rel="noopener noreferrer">Github</a>
                </div>
            </div>

            <div className="border-2 border-orange-500 rounded-lg bg-black grid grid-cols-1">
                <img className="rounded-t-lg h-60 object-cover" src={project5} alt="" />
                <p className="text-white text-2xl mt-2 mx-4">A personal Dashboard which shows time, greeting message, weather and cryto value.</p>
                <p className="flex items-center text-xl text-orange-500 ml-4 mt-8">Made with : <img className="w-12 ml-4" src={html} alt="" /><img className="w-12" src={css} alt="" /><img className="w-12" src={javaScript} alt="" /><img className="w-10" src={api} alt="" /></p>
                <div className="flex items-center ml-4 mt-10 mb-6">
                <a className="bg-orange-500 text-black px-16 py-4 rounded-lg w-1/5 flex items-center justify-center text-2xl mr-6 relative z-10 before:absolute before:inset-0 before:bg-black before:-z-10 before:border-2 before:border-orange-500 before:border-solid before:rounded-lg before:origin-left before:scale-x-0 before:transition-transform before:hover:scale-x-100 hover:text-orange-500" href="" target="_blank" rel="noopener noreferrer">Live</a>

                <a className="bg-orange-500 text-black px-16 py-4 rounded-lg w-1/5 flex items-center justify-center text-2xl relative z-10 before:absolute before:inset-0 before:bg-black before:-z-10 before:border-2 before:border-orange-500 before:border-solid before:rounded-lg before:origin-left before:scale-x-0 before:transition-transform before:hover:scale-x-100 hover:text-orange-500" href="" target="_blank" rel="noopener noreferrer">Github</a>
                </div>
            </div>
        </section>
        <div className=" text-center transition-all delay-200 my-24 ease-in-out hover:scale-150 w-9/12 m-auto">
        <a className="text-4xl bg-orange-500 text-black px-16 py-4 rounded-lg w-8/12 m-auto flex items-center justify-center relative z-10 before:absolute before:inset-0 before:bg-black before:-z-10 before:border-2 before:border-orange-500 before:border-solid before:rounded-lg before:origin-left before:scale-x-0 before:transition-transform before:hover:scale-x-100 hover:text-white" href="" target="_blank" rel="noopener noreferrer">Check more of my work on my Github <BsArrowRight className="ml-4" /></a>
        </div>

        <footer className="text-white py-20 text-center border-t-2 border-orange-500">
            <h2 className="text-6xl mb-8">Sparked your Interest?</h2>
            <h3 className="text-4xl mb-4">Let's Connect</h3>
            <p className="underline text-orange-500 text-3xl">ayush.97mahajan@gmail.com</p>
        </footer>
        </>
    )
}