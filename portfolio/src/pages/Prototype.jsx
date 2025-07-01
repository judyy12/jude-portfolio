import { ChevronLeft } from "lucide-react"
import { Link } from "react-router-dom"

import Proto1 from "../assets/Prototype/Proto1.png"
import Proto2 from "../assets/Prototype/Proto2.png"
import Proto3 from "../assets/Prototype/Proto3.png"
import Proto4 from "../assets/Prototype/Proto4.png"
import { useState } from "react"

export const Prototype = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: Proto1, alt: "Landing Page" },
    { src: Proto2, alt: "Home Page" },
    { src: Proto3, alt: "Projects Page" },
    { src: Proto4, alt: "Contact Page" },
  ];

  return (
    <div className="min-h-screen pt-25 pb-25 flex flex-col gap-5">
      <Link to='/projects' className="flex group">
        <ChevronLeft />
        <p>Back</p>
      </Link>
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="font-header text-5xl">Mobile App Prototype</h1>
        <p className="w-200 text-center">
          This project was created as part of an elective subject in university. 
          It was my first project using Figma, where I designed a mobile app prototype 
          that showcases a user-friendly interface and intuitive navigation.
          The design focuses on simplicity and functionality, making it easy for users to 
          interact with the app.
        </p>
        <div>
          <ul>
            <li className="flex gap-2">
              <p className="tag hover:bg-p-green">Figma</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-10 w-auto mx-auto">
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