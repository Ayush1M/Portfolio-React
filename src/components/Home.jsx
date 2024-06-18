import React, { useState } from "react";
import AvatarImg from "../images/my-image.jpg";
import Typewriter from "typewriter-effect";
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import efficiencyimg from "../images/efficiency.png";
import goalsimg from "../images/goals.png";
import flexibilityimg from "../images/flexibility.png";
import html from "../images/icons/html-icon.png";
import css from "../images/icons/css-icon.png";
import javaScript from "../images/icons/javascript-icon.png";
import typescript from "../images/icons/typescript-icon.png";
import react from "../images/icons/react-icon.png";
import tailwind from "../images/icons/tailwindcss-icon.png";
import api from "../images/icons/restapi-icon.png";
import github from "../images/icons/github-icon.png";
import figma from "../images/icons/figma-icon.png";
import vscode from "../images/icons/vscode-icon.png";
import git from "../images/icons/git-icon.png";
import firebase from "../images/icons/firebase-icon.png";

export default function Home() {
  const [hover, setHover] = useState(null)
  const [copyText, setCopyText] = useState("ayush.97mahajan@gmail.com")

  const handleClick = (e) => {
    setCopyText(copyText)
    navigator.clipboard.writeText(copyText)

    const copyEmail = document.createElement("div")
    copyEmail.classList.add("py-1","px-4", "absolute", "-mt-28", "bg-orange-500", "text-black", "transition", "ease-in", "duration-700", "rounded-lg")
    copyEmail.textContent = "copied"
    e.target.appendChild(copyEmail)
    setTimeout(()=> e.target.removeChild(copyEmail), 1000)
  }

  const handleMouseOver = (e) => {
    switch(e.target.id) {
      case "1" : 
      setHover(1)
      break
      case "2" : 
      setHover(2)
      break
      case "3" :
      setHover(3)
      break
    }
  }
  
  return (
    <>
      <section className="text-white flex justify-evenly mt-24 max-md:flex max-md:flex-col max-md:items-center max-mdp:flex-col max-mdp:items-center border-2 border-orange-500 py-20 w-11/12 m-auto rounded-xl">
        <div>
          <div className="tracking-wider">
            <h1 className="text-5xl max-sm:text-3xl">Hi, I'm Ayush Mahajan</h1>
            <div className="flex mt-6">
              <h2 className="mr-2 text-4xl max-sm:text-2xl">I am a </h2>
              <div className="text-orange-500 text-4xl max-sm:text-2xl">
                <Typewriter
                  options={{
                    strings: ["Frontend Developer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>

            <div className="flex items-center mt-16 max-md:mb-12 max-sm:flex-col">
              <a
                className="bg-orange-500 text-black rounded-lg px-4 py-4 mr-6 relative z-10 before:absolute before:inset-0 before:bg-black before:-z-10 before:border-2 before:border-orange-500 before:border-solid before:rounded-lg before:origin-left before:scale-x-0 before:transition-transform before:hover:scale-x-100 hover:text-orange-500 max-sm:mb-8 max-sm:mr-0 max-sm:text-xl max-sm:px-10 hover:scale-125"
                href="https://github.com/Ayush1M"
                target="_blank"
                rel="noopener noreferrer"
                id="1"
                onMouseEnter={handleMouseOver}
                onMouseLeave={() => setHover(null)}
                >
                {hover === 1 && <span className="absolute mt-20 w-16 bg-orange-500 text-black px-2">github</span>}
                <DiGithubBadge className="text-5xl mr-2"/>  
              </a>

              <a
                className="bg-orange-500 text-black rounded-lg px-4 py-4 mr-6 relative z-10 before:absolute before:inset-0 before:bg-black before:-z-10 before:border-2 before:border-orange-500 before:border-solid before:rounded-lg before:origin-left before:scale-x-0 before:transition-transform before:hover:scale-x-100 hover:text-orange-500 max-sm:mr-0 max-sm:text-xl max-sm:px-8 max-sm:mb-8 hover:scale-125"
                href="https://www.linkedin.com/in/ayush-mahajan10"
                target="_blank"
                rel="noopener noreferrer"
                id="2" 
                onMouseEnter={handleMouseOver}
                onMouseLeave={() => setHover(null)}              
              > 
              {hover === 2 && <span className="absolute mt-20 w-20 bg-orange-500 text-black px-2">linkedin</span>}             
                <FaLinkedin className="text-5xl mr-2" />
               
              </a>

              <p
                className="cursor-pointer bg-orange-500 text-black rounded-lg px-4 py-4 mr-6 relative z-10 before:absolute before:inset-0 before:bg-black before:-z-10 before:border-2 before:border-orange-500 before:border-solid before:rounded-lg before:origin-left before:scale-x-0 before:transition-transform before:hover:scale-x-100 hover:text-orange-500 max-sm:mr-0 max-sm:text-xl max-sm:px-8 hover:scale-125"
                id="3"   
                onMouseEnter={handleMouseOver}
                onMouseLeave={() => setHover(null)}            
                onClick={handleClick}
              >
                {hover === 3 && <span className="absolute mt-20 -ml-10 w-40 bg-orange-500 text-black px-2">
                  copy email address</span>}              
                <MdEmail className="text-5xl mr-2"/>
              </p>
            </div>
          </div>
        </div>
        <img
          className="w-96 max-md:order-first max-md:mb-12 max-mdp:mb-12 max-mdp:order-first max-sm:w-60 max-lg:w-72 max-xl:w-80"
          src={AvatarImg}
        />
      </section>

      <div className="mx-2">
        <h2 className="text-white mt-64 text-center text-5xl max-md:mt-52 max-sm:mt-28 max-sm:text-4xl">
          Why Should you Hire Me?
        </h2>
        <section className="text-white grid grid-cols-3 text-3xl mt-24 max-md:flex flex-col">
          <div className="text-center mx-4">
            <h3 className="mb-8 text-orange-500">Efficiency</h3>
            <img
              src={efficiencyimg}
              alt="Efficiency"
              className="m-auto w-44 mb-8 max-sm:w-32"
            />
            <p className="w-[60%] m-auto max-lg:w-full max-sm:text-2xl">
              I believe having a proper planning and a end goal helps in
              achieving task more efficiently and takes less amout of time.
            </p>
          </div>
          <div className="text-center mx-4">
            <h3 className="mb-8 text-orange-500 max-md:mt-16">
              Goal Orientation
            </h3>
            <img
              src={goalsimg}
              alt="goal Orientation"
              className="m-auto w-44 mb-8 max-sm:w-32"
            />
            <p className="w-[60%] m-auto max-lg:w-full max-sm:text-2xl">
              I always try to break bigger goals into smaller tasks which makes
              it easy to achieve them.
            </p>
          </div>
          <div className="text-center mx-4">
            <h3 className="mb-8 text-orange-500 max-md:mt-16">Flexibilty</h3>
            <img
              src={flexibilityimg}
              alt="flexibility"
              className="m-auto w-44 mb-8 max-sm:w-32"
            />
            <p className="w-[60%] m-auto max-lg:w-full max-sm:text-2xl">
              I am flexible in working in any environment wheather its in a team
              or as a individual.
            </p>
          </div>
        </section>
      </div>
      <section className="mb-24 mt-48">
        <h2 className="text-white mb-16 text-6xl text-center tracking-wide max-sm:text-4xl">
          Technolgies I Use
        </h2>
        <div className="text-white flex justify-center flex-wrap gap-8 max-sm:mx-3">
          <p className="text-center text-xl mr-8">
            <img
              className="hover:animate-spin mb-6 max-sm:w-20"
              src={html}
              alt="html logo"
            />
            Html
          </p>
          <p className="text-center text-xl mr-8">
            <img
              className="hover:animate-spin mb-6 max-sm:w-20"
              src={css}
              alt="css logo"
            />
            CSS
          </p>
          <p className="text-center text-xl mr-8">
            <img
              className="hover:animate-spin mb-6 max-sm:w-20"
              src={javaScript}
              alt="javascript logo"
            />
            JavaScript
          </p>
          <p className="text-center text-xl mr-8">
            <img
              className="hover:animate-spin mb-6 max-sm:w-20"
              src={typescript}
              alt="typescript logo"
            />
            TypeScript
          </p>
          <p className="text-center text-xl mr-8">
            <img
              className="hover:animate-spin mb-6 max-sm:w-20"
              src={react}
              alt="react logo"
            />
            React
          </p>
          <p className="text-center text-xl mr-8">
            <img
              className="hover:animate-spin mb-6 max-sm:w-20"
              src={tailwind}
              alt="tailwind logo"
            />
            Tailwind CSS
          </p>
          <p className="text-center text-xl mr-8">
            <img
              className="hover:animate-spin mb-6 max-sm:w-20"
              src={api}
              alt="api logo"
            />
            RestAPI
          </p>
          <p className="text-center text-xl mr-8">
            <img
              className="hover:animate-spin mb-6 max-sm:w-20"
              src={github}
              alt="github logo"
            />
            Github
          </p>
          <p className="text-center text-xl mr-8">
            <img
              className="hover:animate-spin mb-6 max-sm:w-20"
              src={figma}
              alt="figma logo"
            />
            Figma
          </p>
          <p className="text-center text-xl mr-8">
            <img
              className="hover:animate-spin mb-6 max-sm:w-20"
              src={vscode}
              alt="vscode logo"
            />
            VSCode
          </p>
          <p className="text-center text-xl mr-8">
            <img
              className="hover:animate-spin mb-6 max-sm:w-20"
              src={git}
              alt="vscode logo"
            />
            Git
          </p>
          <p className="text-center text-xl mr-8">
            <img
              className="hover:animate-spin mb-6 max-sm:w-20"
              src={firebase}
              alt="firebase logo"
            />
            Firebase
          </p>
        </div>
      </section>
    </>
  );
}
