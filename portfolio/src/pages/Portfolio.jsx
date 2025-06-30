import { ChevronLeft } from "lucide-react"
import { Link } from "react-router-dom"

import Portfolio1 from "../assets/OldPortfolio/Portfolio1.png"
import Portfolio2 from "../assets/OldPortfolio/Portfolio2.png"
import Portfolio3 from "../assets/OldPortfolio/Portfolio3.png"
import Portfolio4 from "../assets/OldPortfolio/Portfolio4.png"
import { useState } from "react"

export const Portfolio = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: Portfolio1, alt: "Hero Section" },
    { src: Portfolio2, alt: "About Section" },
    { src: Portfolio3, alt: "Projects Section" },
    { src: Portfolio4, alt: "Contact Section" },
  ];

  return (
    <div className="h-screnn py-25 flex flex-col gap-5">
      <Link to='/projects' className="flex group">
        <ChevronLeft />
        <p>Back</p>
      </Link>
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="font-header text-5xl">Portfolio</h1>
        <p className="w-200 text-center">
          This website was created as part of my Web Development course. It showcases my 
          profile, skills, and the projects I worked on during my studies. I developed it 
          using Visual Studio Code, applying the HTML, CSS, and JavaScript techniques we 
          learned in class. This was actually my very first website, and I deployed it using 
          Netlify.
        </p>
        <div>
          <ul>
            <li className="flex gap-2">
              <p className="tag hover:bg-p-blue">HTML</p>
              <p className="tag hover:bg-p-orange">CSS</p>
              <p className="tag hover:bg-p-yellow">JavaScript</p>
              <p className="tag hover:bg-p-blue">ReactJS</p>
              <p className="tag hover:bg-p-indigo">VS Code</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            className="image cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 flex items-center justify-center z-100 bg-[rgba(0,0,0,0.6)]"
            onClick={() => setSelectedImage(null)}>
            <div
              className="relative max-w-6xl max-h-[90vh] border-3 rounded-3xl"
              onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="rounded-3xl max-w-full max-h-[85vh] object-contain"
              />
            </div>
          </div>
        )}

    </div>
  )
}