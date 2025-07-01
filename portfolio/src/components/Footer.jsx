import { Download, Github, Linkedin } from "lucide-react"
import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <div className="bar border-t-3 bottom-0 left-0">
      <div className="flex gap-235">
        <div>
          <ul>
            <li className="flex gap-4">
              <Link
                to="https://www.linkedin.com/in/jude-michael-ba%C3%B1ar-590679291/"
                className="w-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} stroke="0" className="icon fill-background 
                hover:bg-p-blue hover:ring-3 hover:fill-body transition-all"/>
              </Link>
              <Link
                to="https://github.com/judyy12"
                className="w-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} stroke="0" className="icon fill-background 
                hover:bg-p-green hover:ring-3 hover:fill-body transition-all"/>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <a
            href="/JudeBanarCV.pdf"
            download
            className="button flex items-center gap-2"
          >
            <p className="font-bold">Download CV</p>
          </a>
        </div>
      </div>
    </div>
  )
}