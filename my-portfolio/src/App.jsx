import React from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  MapPin,
} from "lucide-react";
import "../src/App.css";
import GitButton from "../components/ButtonGithub";
import { useState } from "react";
export default function App() {
  const [active, setActive] = useState("work");

  return (
    <div className="min-h-screen bg-[#101010] text-white ">
      {/* SVG Filter (Hidden) */}
      <svg style={{ display: "none" }}>
        <filter id="glass-distortion">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.008"
            numOctaves="2"
            result="noise"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="77" />
        </filter>
      </svg>

      {/* Header/Navigation */}
      <header className="fixed top-5 w-full z-50 backdrop-blur-sm border-gray-800 ">
        <nav className="w-full px-2 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 w-full">
            {/* Left Section - Logo/Name */}
            <div className="flex items-center space-x-3 ">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">DS</span>
              </div>
              <div>
                <h1
                  style={{ fontFamily: "Neue Montreal", fontWeight: 500 }}
                  className="font-semibold text-lg sm:text-xsm md:text-lg lg:text-[20px]"
                >
                  David Santiago
                </h1>
                <p
                  style={{ fontFamily: "Neue Montreal", fontWeight: 400 }}
                  className="text-gray-400 text-sm lg:text-[12px]"
                >
                  Software Developer
                </p>
              </div>
            </div>

            {/* Center Section - Toggle Button */}
            <div className="flex justify-center flex-1">
              <div className="relative flex rounded-full bg-[#323232] p-1.5 ">
                {/* Slider animado */}
                <div
                  className={`absolute h-[80%] w-1/2 rounded-full bg-[#3E3E3E] transition-transform duration-300 ease-in-out ${
                    active === "info" ? "translate-x-full" : "translate-x-2"
                  }`}
                  style={{ top: "10%", left: "-2%" }}
                />

                {/* Botón Work */}
                <button
                  onClick={() => setActive("work")}
                  className={`relative z-10 flex-1 px-6 py-2 text-sm font-medium transition-colors ${
                    active === "work"
                      ? "text-white"
                      : "text-gray-400 hover:text-white cursor-pointer"
                  }`}
                >
                  Work
                </button>

                {/* Botón Info */}
                <button
                  onClick={() => setActive("info")}
                  className={`relative z-10 flex-1 px-6 py-2 text-sm font-medium transition-colors ${
                    active === "info"
                      ? "text-white"
                      : "text-gray-400 hover:text-white cursor-pointer"
                  }`}
                >
                  Info
                </button>
              </div>
            </div>

            {/* Right Section - Links */}
            <div className="flex items-center justify-end space-x-6 pr-6 ">
              <a
                style={{ fontFamily: "Neue Montreal", fontWeight: 550 }}
                href="#"
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors  "
              >
                <span className="text-sm lg:text-[14px] ">LinkedIn</span>
                <ExternalLink size={12} />
              </a>
              <a
                style={{ fontFamily: "Neue Montreal", fontWeight: 500 }}
                href="#"
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
              >
                <span className="text-sm lg:text-[14px]">Resume</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content Area */}
      <div className="pt-24 px-6 items-center justify-center flex flex-col">
        <h1
          style={{
            fontFamily: "Neue Montreal",
            fontWeight: "900",
            fontSize: 40,
          }}
          className="pt-20 text-glow"
        >
          This is is under construction right now 😉
        </h1>

        <img
          src="https://media1.tenor.com/m/N1Hgl4qMR30AAAAd/mxstery.gif"
          className="w-96 h-96 pt-6"
        />
      </div>
    </div>
  );
}
