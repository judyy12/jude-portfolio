import { ChevronLeft } from "lucide-react"
import { Link } from "react-router-dom"

import EDTR1 from "../assets/EDTR/EDTR1.png"
import EDTR2 from "../assets/EDTR/EDTR2.png"
import { useState } from "react"

export const EDTR = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: EDTR1, alt: "Landing Page" },
    { src: EDTR2, alt: "Records Page" },
  ];

  return (
    <div className="min-h-screen pt-25 pb-25 flex flex-col gap-5">
      <Link to='/projects' className="flex group">
        <ChevronLeft />
        <p>Back</p>
      </Link>
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="font-header text-5xl">Intern E-DTR</h1>
        <p className="w-200 text-center">
          I developed this application during my internship at the Development 
          Academy of the Philippines (DAP). It is designed to record the entry and exit 
          times of interns at DAP, providing a streamlined and efficient way to manage 
          attendance. This also includes features for tracking work hours and generating reports,
          ensuring accurate records of intern activities. I did this in collaboration with my 
          fellow interns, and it was a valuable experience in applying my skills in a real-world setting.
        </p>
        <div>
          <ul>
            <li className="flex gap-2">
              <p className="tag hover:bg-p-violet">Power Apps</p>
              <p className="tag hover:bg-p-blue">Power Automate</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10 w-auto mx-auto">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            className="image h-100 cursor-pointer hover:scale-105 transition-transform duration-200"
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