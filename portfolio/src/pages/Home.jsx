import { ChevronsDown } from "lucide-react"

import HTML from "../assets/html.svg"
import CSS from "../assets/css.svg"
import JS from "../assets/js.svg"
import ReactJS from "../assets/reactjs.svg"
import Python from "../assets/python.svg"
import TW from "../assets/tailwind.svg"

import VSC from "../assets/vsc.svg"
import Figma from "../assets/figma.svg"
import Canva from "../assets/canva.svg"
import PowerApps from "../assets/powerapps.svg"
import Automate from "../assets/automate.svg"
import Capcut from "../assets/capcut.svg"

export const Home = () => {
  return (
    <div>
      <section className="h-screen flex justify-center align-middle">
        <div className="group flex flex-col justify-center align-middle">
          <div className="font-header text-9xl text-center">
            <span className="group-hover:text-p-red group-hover:stroke transition-all">J</span>
            <span className="group-hover:text-p-orange transition-all">U</span>
            <span className="group-hover:text-p-yellow transition-all">D</span>
            <span className="group-hover:text-p-green transition-all">E</span>
          </div>
          <div className="font-header text-9xl text-center">
            <span className="group-hover:text-p-blue transition-all">B</span>
            <span className="group-hover:text-p-indigo transition-all">A</span>
            <span className="group-hover:text-p-violet transition-all">N</span>
            <span className="group-hover:text-p-red transition-all">A</span>
            <span className="group-hover:text-p-orange transition-all">R</span>
          </div>
          <div className="text-center">
            A <strong>UI/UX Designer</strong> and <strong>Frontend Web Developer</strong>
          </div>
          <div className="flex justify-center mt-10">
            <ChevronsDown size={35} />
          </div>
        </div>
      </section>
      <section className="h-fit pb-35 px-20 flex justify-between">
        <div>
          <h1 className="text-center mb-5 font-header text-3xl">Tech Stack</h1>
          <div className="grid grid-cols-3 gap-10">
            <div className="tile hover:bg-p-blue transition-all">
              <img src={HTML} className="h-15"></img>
              <p className="text-center">HTML</p>
            </div>
            <div className="tile hover:bg-p-orange transition-all">
              <img src={CSS} className="h-15"></img>
              <p className="text-center">CSS</p>
            </div>
            <div className="tile hover:bg-p-yellow transition-all">
              <img src={JS} className="h-15"></img>
              <p className="text-center">JavaScript</p>
            </div>
            <div className="tile hover:bg-p-blue transition-all">
              <img src={ReactJS} className="h-15"></img>
              <p className="text-center">ReactJS</p>
            </div>
            <div className="tile hover:bg-p-yellow transition-all">
              <img src={Python} className="h-15"></img>
              <p className="text-center">Python</p>
            </div>
            <div className="tile hover:bg-p-blue transition-all">
              <img src={TW} className="h-15"></img>
              <p className="text-center">TailwindCSS</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-center mb-5 font-header text-3xl">Tools</h1>
          <div className="grid grid-cols-3 gap-10">
            <div className="tile hover:bg-p-blue transition-all">
              <img src={VSC} className="h-15"></img>
              <p className="text-center">VS Code</p>
            </div>
            <div className="tile hover:bg-p-green transition-all">
              <img src={Figma} className="h-15"></img>
              <p className="text-center">Figma</p>
            </div>
            <div className="tile hover:bg-p-blue transition-all">
              <img src={Canva} className="h-15"></img>
              <p className="text-center">Canva</p>
            </div>
            <div className="tile hover:bg-p-violet transition-all">
              <img src={PowerApps} className="h-15"></img>
              <p className="text-center">PowerApps</p>
            </div>
            <div className="tile hover:bg-p-blue transition-all">
              <img src={Automate} className="h-15"></img>
              <p className="text-center">Automate</p>
            </div>
            <div className="tile hover:bg-p-violet transition-all">
              <img src={Capcut} className="h-15"></img>
              <p className="text-center">Capcut</p>
            </div>
          </div>
        </div>
        
      </section>
    </div>
  )
}