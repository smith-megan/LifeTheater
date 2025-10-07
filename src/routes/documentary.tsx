import pamphlet from "../assets/images/pamphlet_sm.jpg"
import building from "../assets/images/building.jpg"
import silo from "../assets/images/silo.jpg"
import church from "../assets/images/church.jpg"
import books from "../assets/images/books.jpg"

import { createFileRoute, Link } from "@tanstack/react-router"

export const Route = createFileRoute("/documentary")({
  component: documentary,
})

function documentary() {
  return (
    <div className="bg-[#fbf9f3] p-6" id="testimonials">
      <h1 className="pt-5">Documentary</h1>
      <p className="pb-5">
        Tell your organization's story and capture the rich history
      </p>

      <div className="bg-[#f4f0e2] p-6 rounded-3xl grid md:gap-10 md:grid-cols-4">
        <img className="w-full place-self-center" src={building} />
        <img className="w-full place-self-center" src={church} />
        <p className="place-self-center">
          Community projects and organization's impacts through time are
          critical to document and preserve both to share as well as to
          communicate their origins, impact, and importance.
        </p>
        <img className="w-full place-self-center" src={silo} />
      </div>
      <div className="grid md:grid-flow-row gap-7 p-2 place-content-center justify-items-center place-items-center">
        <h1>Current Examples</h1>
        <div className="bg-[#f4f0e2] p-4 rounded-3xl grid md:gap-10 md:grid-cols-6">
          <div className="md:col-span-2 md:col-start-2 grid place-self-center">
            <img className="w-full place-self-center" src={pamphlet} />
          </div>
          <div className="grid gap-2 md:col-span-3 grid-flow-row place-content-center text-left p-3">
            <h2 className="font-special text-3xl">Safe Keeping</h2>
            <h2 className="">The Errand of Women in Law Enforcement </h2>
            <p className="pt-5 pb-5 pr-5">
              More detailed text description of this project here
            </p>
          </div>
        </div>
        <div className="bg-[#f4f0e2] p-4 rounded-3xl grid md:gap-10 md:grid-cols-6">
          <div className="grid gap-2 md:col-span-2 md:col-start-2 grid-flow-row place-content-center text-left p-3">
            <h2 className="font-special text-3xl">Biography</h2>
            <h2 className="">A published sample of impactful history</h2>
            <p className="pt-5 pb-5 pr-5">
              Visit the link below for the journal where this piece of history
              has been highlighted
            </p>
            <Link
              className="bg-[#583F25] p-2 text-white rounded-2xl text-xl text-center"
              to="/Contact"
            >
              Visit Journal Name Article
            </Link>
          </div>
          <div className="md:col-span-2 grid place-self-center">
            <img className="w-full place-self-center" src={books} />
          </div>
        </div>
        <div className="pb-8">
          <h1 className="p-4 pb-7">Let's Tell Your Story</h1>
          <Link
            className="bg-[#583F25] p-2 text-white rounded-2xl text-xl text-center"
            to="/Contact"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  )
}

export default documentary
