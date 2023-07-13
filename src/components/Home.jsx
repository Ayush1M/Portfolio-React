import React from "react";
import AvatarImg from "../images/my-image.jpg";
import Typewriter from "typewriter-effect";
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
import efficiencyimg from "../images/efficiency.png"
import goalsimg from "../images/goals.png"
import flexibilityimg from "../images/flexibility.png"
import html from "../images/icons/html-icon.png"
import css from "../images/icons/css-icon.png"
import javaScript from "../images/icons/javascript-icon.png"
import react from "../images/icons/react-icon.png"
import tailwind from "../images/icons/tailwindcss-icon.png"
import api from "../images/icons/restapi-icon.png"
import github from "../images/icons/github-icon.png"
import figma from "../images/icons/figma-icon.png"
import vscode from "../images/icons/vscode-icon.png"
import firebase from "../images/icons/firebase-icon.png"
import responsivedesign from "../images/icons/responsivedesign-icon.png"

export default function Home() {
  return (
    <>
      <section className="text-white flex justify-evenly mt-24 max-md:flex max-md:flex-col max-md:items-center max-mdp:flex-col max-mdp:items-center">
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
              <a className="bg-orange-500 text-black px-16 py-4 rounded-lg flex items-center text-2xl mr-6 relative z-10 before:absolute before:inset-0 before:bg-black before:-z-10 before:border-2 before:border-orange-500 before:border-solid before:rounded-lg before:origin-left before:scale-x-0 before:transition-transform before:hover:scale-x-100 hover:text-orange-500 max-sm:mb-8 max-sm:mr-0 max-sm:text-xl max-sm:px-10" href="https://github.com/Ayush1M" target="_blank" rel="noopener noreferrer"><DiGithubBadge className="text-4xl mr-2" />Github</a>

              <a className="bg-orange-500 text-black px-16 py-4 rounded-lg flex items-center text-2xl mr-6 relative z-10 before:absolute before:inset-0 before:bg-black before:-z-10 before:border-2 before:border-orange-500 before:border-solid before:rounded-lg before:origin-left before:scale-x-0 before:transition-transform before:hover:scale-x-100 hover:text-orange-500 max-sm:mr-0 max-sm:text-xl max-sm:px-8" href="https://www.linkedin.com/in/ayush-mahajan10" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-4xl mr-2" />Linkedin</a>
            </div>
          </div>
        </div>
        <img className="w-96 max-md:order-first max-md:mb-12 max-mdp:mb-12 max-mdp:order-first max-sm:w-60 max-lg:w-72 max-xl:w-80" src={AvatarImg} />
      </section>
      
      <div className="mx-2">
        <h2 className="text-white mt-64 text-center text-5xl max-md:mt-52 max-sm:mt-28 max-sm:text-4xl">Why Should you Hire Me?</h2>
        <section className="text-white grid grid-cols-3 text-3xl mt-24 max-md:flex flex-col">
        <div className="text-center mx-4">
            <h3 className="mb-8 text-orange-500">Efficiency</h3>
            <img src={efficiencyimg} alt="Efficiency" class="m-auto w-44 mb-8 max-sm:w-32" />
            <p class="w-[60%] m-auto max-lg:w-full max-sm:text-2xl">I believe having a proper planning and a end goal helps in achieving task more efficiently and takes less amout of time.</p>
          </div>
          <div className="text-center mx-4">
            <h3 className="mb-8 text-orange-500 max-md:mt-16">Goal Orientation</h3>
            <img src={goalsimg} alt="goal Orientation" class="m-auto w-44 mb-8 max-sm:w-32" />
            <p class="w-[60%] m-auto max-lg:w-full max-sm:text-2xl">I always try to break bigger goals into smaller tasks which makes it easy to achieve them.</p>
          </div>
          <div className="text-center mx-4">
            <h3 className="mb-8 text-orange-500 max-md:mt-16">Flexibilty</h3>
            <img src={flexibilityimg} alt="flexibility" class="m-auto w-44 mb-8 max-sm:w-32" />
            <p class="w-[60%] m-auto max-lg:w-full max-sm:text-2xl">I am flexible in working in any environment wheather its in a team or as a individual.</p>
          </div>
        </section>
      </div>
      <section className="mb-24 mt-48">
        <h2 className="text-white mb-16 text-6xl text-center tracking-wide max-sm:text-4xl">Technolgies I Use</h2>
        <div className="text-white flex justify-center flex-wrap gap-8 max-sm:mx-3">
        <p className="text-center text-xl mr-8"><img className="hover:animate-spin mb-6 max-sm:w-20" src={html} alt="" />Html</p>
        <p className="text-center text-xl mr-8"><img className="hover:animate-spin mb-6 max-sm:w-20" src={css} alt="" />CSS</p>
        <p className="text-center text-xl mr-8"><img className="hover:animate-spin mb-6 max-sm:w-20" src={javaScript} alt="" />JavaScript</p>
        <p className="text-center text-xl mr-8"><img className="hover:animate-spin mb-6 max-sm:w-20" src={react} alt="" />React</p>
        <p className="text-center text-xl mr-8"><img className="hover:animate-spin mb-6 max-sm:w-20" src={tailwind} alt="" />Tailwind CSS</p>
        <p className="text-center text-xl mr-8"><img className="hover:animate-spin mb-6 max-sm:w-20" src={api} alt="" />RestAPI</p>
        <p className="text-center text-xl mr-8"><img className="hover:animate-spin mb-6 max-sm:w-20" src={github} alt="" />Github</p>
        <p className="text-center text-xl mr-8"><img className="hover:animate-spin mb-6 max-sm:w-20" src={figma} alt="" />Figma</p>
        <p className="text-center text-xl mr-8"><img className="hover:animate-spin mb-6 max-sm:w-20" src={vscode} alt="" />VSCode</p>
        <p className="text-center text-xl mr-8"><img className="hover:animate-spin mb-6 max-sm:w-20" src={firebase} alt="" />Firebase</p>
        <p className="text-xl"><img className="m-auto w-28 hover:animate-spin mb-2 max-sm:w-20" src={responsivedesign} alt="" />Responsive Design</p>
        </div>
      </section>
    </>
  );
}
