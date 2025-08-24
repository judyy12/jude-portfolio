import { ChevronLeft } from "lucide-react"
import { Link } from "react-router-dom"

import KD2 from "../assets/KoffeeDates/KD2.png"
import KD3 from "../assets/KoffeeDates/KD3.png"
import KD4 from "../assets/KoffeeDates/KD4.png"
import KD5 from "../assets/KoffeeDates/KD5.png"
import KD6 from "../assets/KoffeeDates/KD6.png"
import KD7 from "../assets/KoffeeDates/KD7.png"
import { useState } from "react"

export const Koffee = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: KD2, alt: "Login Page" },
    { src: KD3, alt: "Map Page" },
    { src: KD4, alt: "Menu Modal" },
    { src: KD5, alt: "Add to Cart Modal" },
    { src: KD6, alt: "Checkout Page" },
    { src: KD7, alt: "Order Confirmation Modal" },
  ];

  return (
    <div className="min-h-screen pt-25 pb-25 flex flex-col gap-5">
      <Link to='/projects' className="flex group">
        <ChevronLeft />
        <p>Back</p>
      </Link>
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="font-header text-5xl">Koffee Dates User Interface</h1>
        <p className="w-200 text-center">
            This project is a mobile app prototype designed for coffee lovers who want to find someone to have a coffee date with.
            The app features a user-friendly interface that allows users to easily navigate through different sections, including 
            a map view to locate nearby coffee shops, a menu modal to browse available drinks and snacks, an 
            add-to-cart modal for selecting items, a checkout page for completing orders, and an order confirmation 
            modal to finalize the transaction.
        </p>
        <div>
          <ul>
            <li className="flex gap-2">
              <p className="tag hover:bg-p-green">Figma</p>
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