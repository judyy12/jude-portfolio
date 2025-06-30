import { Link } from "react-router-dom"
import Pic from "../assets/AboutPic.jpg"

export const About = () => {
  return (
    <div className="min-h-screen flex overflow-hidden">
      <div className="w-[40%] flex items-center justify-center h-auto">
        <img src={Pic} alt="My Pic" className="image h-auto w-auto object-contain"/>
      </div>
      <div className="w-[60%] h-screen overflow-y-auto px-10 pt-35 pb-30 space-y-5">
        <p>Hi! My name is</p>
        <h1 className="text-8xl font-header">JUDE BANAR</h1>
        <p>
          A UI/UX Designer & Frontend Developer Ready to Build!
        </p>
        <p>
          My journey into the world of digital creation began at the Technological 
          University of the Philippines - Manila, where I'm set to graduate Cum Laude 
          in August 2025 with a Bachelor of Science in Information Systems. It was there 
          that I discovered my passion for UI/UX Design and Frontend Development. This 
          dual path truly allows me to express my creativity and ideas, transforming 
          abstract visions into tangible, interactive user interfaces.
        </p>
        <p>
          As a fresh graduate, I've diligently honed my skills through various academic 
          projects and a valuable internship. I'm not only eager but also ready to dive 
          into the professional landscape, committed to continuous learning and gaining 
          hands-on experience.
        </p>
        <p>
          I'm currently seeking entry-level opportunities where I can apply my knowledge, 
          contribute to meaningful projects, and grow as a UI/UX Designer and Frontend 
          Developer. Beyond full-time roles, I'm also taking on freelance projects, actively 
          seeking clients to collaborate with and deliver the best of my design and 
          development capabilities. My goal is to learn from experienced professionals and 
          contribute to a passionate team dedicated to creating impactful digital products.
        </p>
        <p>
          I'm always excited to discuss new opportunities, collaborate on interesting 
          projects, or simply share insights about design and development. Feel free to 
          reach out!
        </p>
        <Link to='/contacts' className="button text-[16px]">
          Contact me!
        </Link>
      </div>
    </div>
  )
}