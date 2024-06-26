import React from "react";
import project1 from "../projects/project-image-1.png";
import project2 from "../projects/project-image-2.png";
import project3 from "../projects/project-image-3.png";
import project4 from "../projects/project-image-4.png";
import project5 from "../projects/project-image-5.png";
import project6 from "../projects/project-image-6.png";
import project7 from "../projects/project-image-7.png";
import react from "../images/icons/react-icon.png";
import css from "../images/icons/css-icon.png";
import html from "../images/icons/html-icon.png";
import javaScript from "../images/icons/javascript-icon.png";
import typescript from "../images/icons/typescript-icon.png";
import tailwind from "../images/icons/tailwindcss-icon.png";
import api from "../images/icons/restapi-icon.png";
import { BsArrowRight } from "react-icons/bs";

export default function Projects() {
  return (
    <>
      <h1 className="text-orange-500 text-center text-6xl mt-16 max-s:text-5xl">
        My Work
      </h1>
      <section className="grid grid-cols-3 gap-8 w-11/12 mt-20 m-auto max-xl:grid-cols-2 max-md:grid-cols-1 max-md:min-w-5 max-sm:min-w-0">
        <div className="border-2 border-orange-500 rounded-lg bg-black grid grid-cols-1">
          <img className="rounded-t-lg" src={project7} alt="" />
          <p className="text-white text-2xl mt-6 mx-4">
            A Todo App consist of adding and deleting a todo, filtering todo in active or completed and dark/light mode.
          </p>
          <p className="flex items-center text-xl text-orange-500 ml-4 mt-8 max-s:text-lg">
            Made with :{" "}
            <img className="w-12 ml-4 max-s:w-8" src={react} alt="" />
            <img className="w-12 max-s:w-8" src={typescript} alt="" />
            <img className="w-10 max-s:w-8" src={tailwind} alt="" />
          </p>
          <div className="flex items-center ml-4 mt-10 mb-6 max-s:flex-col">
            <a
              className="bg-orange-500 text-black px-16 py-4 rounded-lg flex items-center justify-center w-1/5 text-2xl mr-6 relative z-10 before:absolute before:inset-0 before:bg-black before:-z-10 before:border-2 before:border-orange-500 before:border-solid before:rounded-lg before:origin-left before:scale-x-0 before:transition-transform before:hover:scale-x-100 hover:text-orange-500 max-s:mr-0 max-s:mb-4 max-s:text-xl max-s:px-12 max-s:py-2"
              href="https://ayush-todo-app.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>

            <a
              className="bg-orange-500 text-black px-16 py-4 rounded-lg w-1/5 flex items-center justify-center text-2xl relative z-10 before:absolute before:inset-0 before:bg-black before:-z-10 before:border-2 before:border-orange-500 before:border-solid before:rounded-lg before:origin-left before:scale-x-0 before:transition-transform before:hover:scale-x-100 hover:text-orange-500 max-s:text-xl max-s:px-12 max-s:py-2"
              href="https://github.com/Ayush1M/Todo-App"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>

        <div className="border-2 border-orange-500 rounded-lg bg-black grid grid-cols-1">
          <img className="rounded-t-lg" src={project2} alt="" />
          <p className="text-white text-2xl mt-6 mx-4">
            Tic tac toe game made with React+Typescript and styled using Tailwind CSS is a popular two player game. The 
            player who succeds in placing three of the either X or O in horizontal, vertical or diagonal is the winner.
          </p>
          <p className="flex items-center text-xl text-orange-500 ml-4 mt-8 max-s:text-lg">
            Made with :{" "}
            <img className="w-12 ml-4 max-s:w-8" src={react} alt="" />
            <img className="w-12 max-s:w-8" src={typescript} alt="" />
            <img className="w-12 max-s:w-8" src={tailwind} alt="" />
          </p>
          <div className="flex items-center ml-4 mt-10 mb-6 max-s:flex-col">
            <a
              className="bg-orange-500 text-black px-16 py-4 rounded-lg w-1/5 flex items-center justify-center text-2xl mr-6 relative z-10 before:absolute before:inset-0 before:bg-black before:-z-10 before:border-2 before:border-orange-500 before:border-solid before:rounded-lg before:origin-left before:scale-x-0 before:transition-transform before:hover:scale-x-100 hover:text-orange-500 max-s:mr-0 max-s:mb-4 max-s:text-xl max-s:px-12 max-s:py-2"
              href="https://tic-tac-toe-game-am.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>

            <a
              className="bg-orange-500 text-black px-16 py-4 rounded-lg w-1/5 flex items-center justify-center text-2xl relative z-10 before:absolute before:inset-0 before:bg-black before:-z-10 before:border-2 before:border-orange-500 before:border-solid before:rounded-lg before:origin-left before:scale-x-0 before:transition-transform before:hover:scale-x-100 hover:text-orange-500 max-s:text-xl max-s:px-12 max-s:py-2"
              href="https://github.com/Ayush1M/tic-tac-toe-game"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>

        <div className="border-2 border-orange-500 rounded-lg bg-black grid grid-cols-1">
          <img className="rounded-t-lg" src={project1} alt="" />
          <p className="text-white text-2xl mt-6 mx-4">
            A fun quiz app made with React and React Router.
          </p>
          <p className="flex items-center text-xl text-orange-500 ml-4 mt-8 max-s:text-lg">
            Made with :{" "}
            <img className="w-12 ml-4 max-s:w-8" src={react} alt="" />
            <img className="w-12 max-s:w-8" src={css} alt="" />
            <img className="w-10 max-s:w-8" src={api} alt="" />
          </p>
          <div className="flex items-center ml-4 mt-10 mb-6 max-s:flex-col">
            <a
              className="bg-orange-500 text-black px-16 py-4 rounded-lg flex items-center justify-center w-1/5 text-2xl mr-6 relative z-10 before:absolute before:inset-0 before:bg-black before:-z-10 before:border-2 before:border-orange-500 before:border-solid before:rounded-lg before:origin-left before:scale-x-0 before:transition-transform before:hover:scale-x-100 hover:text-orange-500 max-s:mr-0 max-s:mb-4 max-s:text-xl max-s:px-12 max-s:py-2"
              href="https://quizzical-ayush.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>

            <a
              className="bg-orange-500 text-black px-16 py-4 rounded-lg w-1/5 flex items-center justify-center text-2xl relative z-10 before:absolute before:inset-0 before:bg-black before:-z-10 before:border-2 before:border-orange-500 before:border-solid before:rounded-lg before:origin-left before:scale-x-0 before:transition-transform before:hover:scale-x-100 hover:text-orange-500 max-s:text-xl max-s:px-12 max-s:py-2"
              href="https://github.com/Ayush1M/Quizzical"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>

        <div className="border-2 border-orange-500 rounded-lg bg-black grid grid-cols-1">
          <img className="rounded-t-lg" src={project3} alt="" />
          <p className="text-white text-2xl mt-6 mx-4">
            A fun application to test how fast you can type in a given amount of
            time. It consists of a theme switcher too.
          </p>
          <p className="flex items-center text-xl text-orange-500 ml-4 mt-8 max-s:text-lg">
            Made with :{" "}
            <img className="w-12 ml-4 max-s:w-8" src={react} alt="" />
            <img className="w-12 max-s:w-8" src={css} alt="" />
          </p>
          <div className="flex items-center ml-4 mt-10 mb-6 max-s:flex-col">
            <a
              className="bg-orange-500 text-black px-16 py-4 rounded-lg w-1/5 flex items-center justify-center text-2xl mr-6 relative z-10 before:absolute before:inset-0 before:bg-black before:-z-10 before:border-2 before:border-orange-500 before:border-solid before:rounded-lg before:origin-left before:scale-x-0 before:transition-transform before:hover:scale-x-100 hover:text-orange-500 max-s:mr-0 max-s:mb-4 max-s:text-xl max-s:px-12 max-s:py-2"
              href="https://speed-typing-game-am.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>

            <a
              className="bg-orange-500 text-black px-16 py-4 rounded-lg w-1/5 flex items-center justify-center text-2xl relative z-10 before:absolute before:inset-0 before:bg-black before:-z-10 before:border-2 before:border-orange-500 before:border-solid before:rounded-lg before:origin-left before:scale-x-0 before:transition-transform before:hover:scale-x-100 hover:text-orange-500 max-s:text-xl max-s:px-12 max-s:py-2"
              href="https://github.com/Ayush1M/Speed-Typing-Game"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>

        <div className="border-2 border-orange-500 rounded-lg bg-black grid grid-cols-1">
          <img
            className="rounded-t-lg h-60 w-screen object-contain object-top"
            src={project4}
            alt=""
          />
          <p className="text-white text-2xl mt-6 mx-4">
            Restaurant ordering app made with the concepts of JavaScript consist of adding and deleting items from the cart, cart functionality, payment container, and payment form.
          </p>
          <p className="flex items-center text-xl text-orange-500 ml-4 mt-8 max-s:text-lg">
            Made with :{" "}
            <img className="w-12 ml-4 max-s:w-8" src={html} alt="" />
            <img className="w-12 max-s:w-8" src={css} alt="" />
            <img className="w-12 max-s:w-8" src={javaScript} alt="" />
          </p>
          <div className="flex items-center ml-4 mt-10 mb-6 max-s:flex-col">
            <a
              className="bg-orange-500 text-black px-16 py-4 rounded-lg w-1/5 flex items-center justify-center text-2xl mr-6 relative z-10 before:absolute before:inset-0 before:bg-black before:-z-10 before:border-2 before:border-orange-500 before:border-solid before:rounded-lg before:origin-left before:scale-x-0 before:transition-transform before:hover:scale-x-100 hover:text-orange-500 max-s:mr-0 max-s:mb-4 max-s:text-xl max-s:px-12 max-s:py-2"
              href="https://ayushm-restaurant-ordering-app.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>

            <a
              className="bg-orange-500 text-black px-16 py-4 rounded-lg w-1/5 flex items-center justify-center text-2xl relative z-10 before:absolute before:inset-0 before:bg-black before:-z-10 before:border-2 before:border-orange-500 before:border-solid before:rounded-lg before:origin-left before:scale-x-0 before:transition-transform before:hover:scale-x-100 hover:text-orange-500 max-s:text-xl max-s:px-12 max-s:py-2"
              href="https://github.com/Ayush1M/Restaurant-ordering-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>

        <div className="border-2 border-orange-500 rounded-lg bg-black grid grid-cols-1">
          <img
            className="rounded-t-lg h-60 w-screen object-contain"
            src={project6}
            alt=""
          />
          <p className="text-white text-2xl mt-2 mx-4">
            Color scheme generator generates a color palette of a particular color of your choosing. You can also clip a particular color hex code to use it in your projects.
          </p>
          <p className="flex items-center text-xl text-orange-500 ml-4 mt-8 max-s:text-lg">
            Made with :{" "}
            <img className="w-12 ml-4 max-s:w-8" src={html} alt="" />
            <img className="w-12 max-s:w-8" src={css} alt="" />
            <img className="w-12 max-s:w-8" src={javaScript} alt="" />
            <img className="w-10 max-s:w-8" src={api} alt="" />
          </p>
          <div className="flex items-center ml-4 mt-10 mb-6 max-s:flex-col">
            <a
              className="bg-orange-500 text-black px-16 py-4 rounded-lg w-1/5 flex items-center justify-center text-2xl mr-6 relative z-10 before:absolute before:inset-0 before:bg-black before:-z-10 before:border-2 before:border-orange-500 before:border-solid before:rounded-lg before:origin-left before:scale-x-0 before:transition-transform before:hover:scale-x-100 hover:text-orange-500 max-s:mr-0 max-s:mb-4 max-s:text-xl max-s:px-12 max-s:py-2"
              href="https://ayush-color-scheme-generator.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>

            <a
              className="bg-orange-500 text-black px-16 py-4 rounded-lg w-1/5 flex items-center justify-center text-2xl relative z-10 before:absolute before:inset-0 before:bg-black before:-z-10 before:border-2 before:border-orange-500 before:border-solid before:rounded-lg before:origin-left before:scale-x-0 before:transition-transform before:hover:scale-x-100 hover:text-orange-500 max-s:text-xl max-s:px-12 max-s:py-2"
              href="https://github.com/Ayush1M/color-scheme-generator"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>
      </section>
      <div className=" text-center transition-all delay-200 my-24 ease-in-out w-7/12 m-auto max-xl:w-8/12 max-lg:w-9/12 max-mdp:w-10/12 max-sm:min-w-3">
        <a
          className="text-4xl bg-orange-500 text-black p-4 rounded-lg m-auto flex items-center justify-center relative z-10 before:absolute before:inset-0 before:bg-black before:-z-10 before:border-2 before:border-orange-500 before:border-solid before:rounded-lg before:origin-left before:scale-x-0 before:transition-transform before:hover:scale-x-100 hover:text-white max-sm:text-3xl max-s:text-xl"
          href="https://github.com/Ayush1M?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check more of my work on my Github <BsArrowRight className="ml-4" />
        </a>
      </div>
    </>
  );
}