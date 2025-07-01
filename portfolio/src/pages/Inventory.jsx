import { ChevronLeft } from "lucide-react"
import { Link } from "react-router-dom"

import Inventory1 from "../assets/Inventory/Inventory1.png"
import Inventory2 from "../assets/Inventory/Inventory2.png"
import Inventory3 from "../assets/Inventory/Inventory3.png"
import Inventory4 from "../assets/Inventory/Inventory4.png"
import { useState } from "react"

export const Inventory = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: Inventory1, alt: "Dashboard" },
    { src: Inventory2, alt: "Inventory Page" },
    { src: Inventory3, alt: "Edit Item Page" },
    { src: Inventory4, alt: "Request Page" },
  ];

  return (
    <div className="min-h-screen pt-25 pb-25 flex flex-col gap-5">
      <Link to='/projects' className="flex group">
        <ChevronLeft />
        <p>Back</p>
      </Link>
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="font-header text-5xl">Inventory Tracker</h1>
        <p className="w-200 text-center">
          This app was developed to manage the inventory of the IT Division in DAP. 
          It allows users to track and manage IT assets efficiently, ensuring that 
          all items are accounted for and easily accessible.
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