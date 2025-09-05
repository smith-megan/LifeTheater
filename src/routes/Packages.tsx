import lineTree from "../assets/images/lineTree.png"
import lineCouple from "../assets/images/lineCouple.png"

import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/Packages")({
  component: packages,
})

function packages() {
  return (
    <div className="bg-[#fbf9f3]" id="testimonials">
      <h1 className="pt-10">Our Packages</h1>
      <div className="grid md:grid-cols-3 gap-8 p-10 place-content-center justify-items-center place-items-center">
        <div>
          <div className="bg-[#f4f0e2] p-4 rounded-3xl">
            <img
              src={lineTree}
              alt="Line Drawing of a tree"
              className="self-center justify-self-center w-5/6 rounded-3xl p-3"
            />
            <h2 className="font-special text-xl">Preservation</h2>
            <div className="grid grid-flow-col place-content-center text-center">
              <h2 className=" p-1">
                Whether as a gift to a significant person in your life or as a
                way to document your own experiences, Preservation Packages are
                designed to capture stories at the source.
              </h2>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-[#f4f0e2] p-4 rounded-3xl">
            <img
              src={lineCouple}
              alt="Line Drawing of a tree"
              className="self-center justify-self-center w-full rounded-3xl p-3"
            />
            <h2 className="font-special text-xl">Legacy 360</h2>
            <div className="grid grid-flow-col place-content-center text-center">
              <h2 className="p-1 pt-4 pb-4">
                Legacy360 is collaborative storytelling from multi-generational
                perspectives and memories. This package is intended to document
                stories for milestone celebrations like: Milestone Birthdays
                Anniversaries Reunions Celebrations of Life
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default packages
