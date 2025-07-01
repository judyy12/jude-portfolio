import { ChevronLeft } from "lucide-react"
import { Link } from "react-router-dom"

import Bearer1 from "../assets/Bearer/Bearer1.png"
import Bearer2 from "../assets/Bearer/Bearer2.png"
import Bearer3 from "../assets/Bearer/Bearer3.png"
import Bearer4 from "../assets/Bearer/Bearer4.png"
import Bearer5 from "../assets/Bearer/Bearer5.png"
import Bearer6 from "../assets/Bearer/Bearer6.png"
import { useState } from "react"

export const Bearer = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: Bearer1, alt: "Landing Page" },
    { src: Bearer2, alt: "Request Page" },
    { src: Bearer3, alt: "Gate Passes List" },
    { src: Bearer4, alt: "Gate Pass Page" },
    { src: Bearer5, alt: "Device List" },
    { src: Bearer6, alt: "Add Device Page" },
  ];

  return (
    <div className="min-h-screen pt-25 pb-25 flex flex-col gap-5">
      <Link to='/projects' className="flex group">
        <ChevronLeft />
        <p>Back</p>
      </Link>
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="font-header text-5xl">Gate Pass System (User)</h1>
        <p className="w-200 text-center">
            This application was developed to manage gate passes at the Development 
            Academy of the Philippines (DAP). It allows users to request and manage gate 
            passes efficiently, ensuring that all entries and exits are properly documented.
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
      <div className="grid grid-cols-3 gap-10 w-auto mx-auto">
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