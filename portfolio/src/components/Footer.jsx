import { Download, Github, Linkedin } from "lucide-react"
import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <div className="bar border-t-3 bottom-0 left-0">
      <div className="flex gap-235">
        <div>
          <ul>
            <li className="flex gap-4">
              <Link className="w-auto">
                <Linkedin size={20} stroke="0" className="icon fill-background 
                hover:bg-p-blue hover:ring-3 hover:fill-body transition-all"/>
              </Link>
              <Link className="w-auto">
                <Github size={20} stroke="0" className="icon fill-background 
                hover:bg-p-green hover:ring-3 hover:fill-body transition-all"/>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <button className="button">
            <p className="font-bold">Download CV</p>
          </button>
        </div>
      </div>
    </div>
    )
}