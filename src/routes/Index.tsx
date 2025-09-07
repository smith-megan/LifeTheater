// import { useEffect, useRef } from "react"
import mainlogo from "../assets/images/Mainlogo.png"
// import videopic from "./assets/images/videohold.png"
import write from "../assets/images/write.jpg"
import rock from "../assets/images/bg.jpg"
// import lineTree from "../assets/images/lineTree.png"
import lineHands from "../assets/images/lineHands.png"
// import lineCouple from "../assets/images/lineCouple.png"
import downloadImage from "../assets/download.png"
import rightImage from "../assets/right.png"
import leftquote from "../assets/leftquote.png"
import rightquote from "../assets/rightquote.png"
import video from "../assets/video/sm.mp4"
import "../App.css"
import Contact from "../routes/Contact"

import { createFileRoute, Link } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: Index,
})

function Index() {
  // const testimonialRef = useRef<HTMLDivElement | null>(null)

  // const { section } = Route.useParams()
  // useEffect(() => {
  //   if (testimonialRef.current && section === "testimonials") {
  //     testimonialRef.current.scrollIntoView({ behavior: "smooth" })
  //   }
  // }, [section])

  return (
    <>
      <div
        className="grid md:grid-cols-2 bg-[#f4f0e2] place-content-center place-items-center p-5"
        id="intro"
      >
        <img
          className="align-middle justify-self-center"
          src={mainlogo}
          alt="LifeTheater Logo"
        />
        <video
          className="align-middle justify-self-center place-content-center p-2 rounded-3xl"
          controls
        >
          <source
            className="align-middle justify-self-center"
            src={video}
            type="video/mp4"
          />
        </video>
        {/* <img
          className="align-middle justify-self-center"
          src={videopic}
          alt="Lifetheater Logo"
        /> */}
      </div>
      <div className="bg-[#f4f0e2] pb-5">
        <a className="self-center" href="#contact">
          <button className="bg-[#583F25] text-white mt-4 rounded-2xl w-1/2 text-2xl pt-3 pb-3">
            Book Now
          </button>
        </a>
      </div>
      <div className="grid bg-[#fbf9f3] sm:grid-cols-2 sm:p-20" id="brochure">
        <div className="grid p-10 pb-2 sm:pb-10 sm:p-2 grid-cols-12 relative">
          <div className="row-start-1 col-overlap pt-10 sm:pt-12 z-10">
            <img src={write} />
          </div>
          <div className="row-start-1 col-underlap grid-rows-1;">
            <img src={rock} />
          </div>
        </div>
        <div className="p-1 sm:p-5 self-center">
          <p className="text-[583F25] text-lg">
            We create documentary films that preserve personal legacies and
            amplify voices to merge individual storytelling with community and
            cinematic elements.
          </p>
          <Link className="self-center" to="/Contact">
            <button className="bg-[#e2ddcc] text-[#583F25] mt-4 rounded-2xl w-11/12 text-xl pt-3 pb-3">
              Lets work together
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-[#583F25] grid md:grid-cols-2 justify-center items-center place-content-around p-4 w-full">
        <h1 className="text-[#f4f0e2] sm:p-2">Our Printable Brochure</h1>
        <div className="grid grid-cols-2 gap-3 sm:gap-5">
          <a
            href={"/LifeTheaterBrochure.pdf"}
            download
            className="bg-[#f4f0e2] rounded-2xl text-xl flex justify-center self-center items-center"
          >
            Download
            <img src={downloadImage} className="w-1/6 p01 pl-1 sm:p-2" />
          </a>
          <a
            href={"/Brochure.png"}
            className="bg-[#f4f0e2] rounded-2xl text-xl flex justify-center self-center items-center"
          >
            View Online
            <img src={rightImage} className="w-1/6 p01 pl-1 sm:p-2" />
          </a>
        </div>
      </div>
      <div className="grid p-5 gap-4 bg-[#f4f0e2] place-content-center">
        <h1 className="p-9 pb-2">Life in Three Acts</h1>
        <div className="grid md:grid-cols-3 gap-10 p-5">
          <div className="bg-[#fbf9f3] p-7">
            <h2 className="font-special p-4 text-lg">Act One: Character</h2>
            <p>
              Introducing you as the subject, your values, your origins, and the
              world you live in
            </p>
          </div>
          <div className="bg-[#fbf9f3] p-7">
            <h2 className="font-special p-4 text-lg">Act Two: Development</h2>
            <p>
              Exploring the challenges and obstacles you have overcome and what
              you have learned
            </p>
          </div>
          <div className="bg-[#fbf9f3] p-7">
            <h2 className="font-special p-4 text-lg">Act Three: Resolution</h2>
            <p>
              Uncovering the theme of your story, and bringing the arc to a
              satisfying and thoughtful conclusion
            </p>
          </div>
        </div>
        <a className="self-center pb-10" href="#contact">
          <button className="bg-[#e2ddcc] text-[#583F25] mt-4 rounded-2xl w-1/2 text-xl pt-3 pb-3">
            Tell Your Story Today
          </button>
        </a>
      </div>
      <div className="grid md:grid-cols-2" id="packages">
        <img src={rock} className="w-full" />
        <div className="grid">
          <h1 className="pt-10">Packages Available</h1>
          <p className="p-5">
            Different stories and needs, there are options for the beginner all
            the way to capturing the full story
          </p>
          <a className="self-center pb-10" href="#contact">
            <button className="text-[#e2ddcc] bg-[#583F25] mt-4 rounded-2xl w-1/2 text-xl pt-3 pb-3">
              More Details
            </button>
          </a>
        </div>
      </div>
      <div className="bg-[#fbf9f3]" id="testimonials">
        {/* <h1 className="pt-10">Testimonials</h1> */}
        <div className="grid md:grid-cols-3 gap-8 p-10 place-content-center justify-items-center place-items-center">
          <div className="bg-[#f4f0e2] p-4 rounded-3xl">
            <img
              src={lineHands}
              alt="Line drawing of hands"
              className="self-center justify-self-center w-full rounded-3xl p-3"
            />
          </div>
          <div className="md:col-span-2 grid grid-flow-row">
            <div className="grid grid-flow-col place-content-center text-center">
              <img
                src={leftquote}
                className="w-1/4 self-start justify-self-end"
              />
              <h2 className=" p-1 pt-4 pb-4">
                Carve your name on hearts, not tombstones. A legacy is etched
                into the minds of others and the stories they share about you.
              </h2>
              <img
                src={rightquote}
                className="w-1/4 self-end justify-self-start pb-2"
              />
            </div>
            <h2 className="font-special text-xl">-Shannon Alder</h2>
          </div>
          {/* <div>
            <div className="bg-[#f4f0e2] p-4 rounded-3xl">
              <img
                src={lineTree}
                alt="Line Drawing of a tree"
                className="self-center justify-self-center w-5/6 rounded-3xl p-3"
              />
              <div className="grid grid-flow-col place-content-center text-center">
                <img
                  src={leftquote}
                  className="w-1/4 self-start justify-self-end"
                />
                <h2 className=" p-1 pt-4 pb-4">
                  Something Different that is longer than just a few words and
                  will be filled in after a minute here
                </h2>
                <img
                  src={rightquote}
                  className="w-1/4 self-end justify-self-start pb-2"
                />
              </div>
              <h2 className="font-special text-xl">-Bob Johnson</h2>
            </div>
          </div>
          <div>
            <div className="bg-[#f4f0e2] p-4 rounded-3xl">
              <img
                src={lineCouple}
                alt="Line Drawing of a tree"
                className="self-center justify-self-center w-full rounded-3xl p-3"
              />
              <div className="grid grid-flow-col place-content-center text-center">
                <img
                  src={leftquote}
                  className="w-1/4 self-start justify-self-end"
                />
                <h2 className="p-1 pt-4 pb-4">
                  I will fill this in later with something great and it will be
                  inspiring
                </h2>
                <img
                  src={rightquote}
                  className="w-1/4 self-end justify-self-start pb-2"
                />
              </div>
              <h2 className="font-special text-xl">-Oprah Winfrey</h2>
            </div>
          </div> */}
        </div>
      </div>
      <div id="Contact">
        <Contact />
      </div>
      <div className="bg-[#e2ddcc] h-10"></div>
    </>
  )
}

export default Index
