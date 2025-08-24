import { Link } from "react-router-dom"

import Portfolio from "../assets/OldPortfolio/OldPortfolio.png"
import Prototype from "../assets/Prototype/Prototype.png"
import EDTR from "../assets/EDTR/EDTR.png"
import Inventory from "../assets/Inventory/Inventory.png"
import Bearer from "../assets/Bearer/Bearer.png"
import Admin from "../assets/Admin/Admin.png"
import Koffee from "../assets/KoffeeDates/KD.png"

export const Projects = () => {
  return (
    <div className="min-h-screen grid grid-cols-3 justify-center align-middle mt-25 mb-25 gap-5 ">
      <Link to="/portfolio" className="proj group">
        <img src={Portfolio} alt="Portfolio" className="rounded-3xl border-3"/>
        <div className="proj-title font-body group-hover:bg-p-red">
          <h3 className="absolute group-hover:opacity-0 transition-all">Portfolio</h3>
          <p className="proj-description font-normal">
            An activity in Web Developement subject in University. 
            Made to showcase my profile, skills, and project at that time.
          </p>
        </div>
      </Link>
      <Link to="/mobile-app-prototype" className="proj group">
        <img src={Prototype} alt="Prototype" className="rounded-3xl border-3"/>
        <div className="proj-title font-body group-hover:bg-p-orange">
          <h3 className="absolute group-hover:opacity-0 transition-all">Mobile App Prototype</h3>
          <p className="proj-description font-normal">
            A project in Elective subject in University. First project
            tht I did in Figma.
          </p>
        </div>
      </Link>
      <Link to="/interns-edtr" className="proj group">
        <img src={EDTR} alt="Interns E-DTR" className="rounded-3xl border-3"/>
        <div className="proj-title font-body group-hover:bg-p-yellow">
          <h3 className="absolute group-hover:opacity-0 transition-all">Interns E-DTR</h3>
          <p className="proj-description font-normal">
            App that records the entry and exit time of the Interns in DAP
            where I did my internship.
          </p>
        </div>
      </Link>
      <Link to="/inventory-tracker" className="proj group">
        <img src={Inventory} alt="Inventory" className="rounded-3xl border-3"/>
        <div className="proj-title font-body group-hover:bg-p-green">
          <h3 className="absolute group-hover:opacity-0 transition-all">Inventory Tracker</h3>
          <p className="proj-description font-normal">
            App that manages the Inventory of the IT Division in DAP.
          </p>
        </div>
      </Link>
      <Link to="/gate-pass-user" className="proj group">
        <img src={Bearer} alt="Gate Pass - Bearer" className="rounded-3xl border-3"/>
        <div className="proj-title font-body group-hover:bg-p-blue">
          <h3 className="absolute group-hover:opacity-0 transition-all">Gate Pass System (User)</h3>
          <p className="proj-description font-normal">
            App that the users used to request and manage Gate Passes in DAP.
          </p>
        </div>
      </Link>
      <Link to="/gate-pass-admin" className="proj group">
        <img src={Admin} alt="Gate Pass - Admin" className="rounded-3xl border-3"/>
        <div className="proj-title font-body group-hover:bg-p-violet">
          <h3 className="absolute group-hover:opacity-0 transition-all">Gate Pass System (Admin)</h3>
          <p className="proj-description font-normal">
            App that manages the Gate Passes and requests in DAP.
          </p>
        </div>
      </Link>
      <Link to="/koffee-dates" className="proj group">
        <img src={Koffee} alt="Koffee Dates" className="rounded-3xl border-3"/>
        <div className="proj-title font-body group-hover:bg-p-red">
          <h3 className="absolute group-hover:opacity-0 transition-all">Koffee Dates</h3>
          <p className="proj-description font-normal">
            App for coffee lovers and fore someone that wants to find someone to have a koffee date with.
          </p>
        </div>
      </Link>

    </div>
  )
}