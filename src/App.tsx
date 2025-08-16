import mainlogo from "./assets/images/Mainlogo.png"
import video from "./assets/images/videohold.png"
import write from "./assets/images/write.jpg"
import rock from "./assets/images/bg.jpg"
import downloadImage from "./assets/download.png"
import rightImage from "./assets/right.png"
import "./App.css"
import Nav from "./Nav"
import Contact from "./Contact"
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <Analytics />
      <Nav />
      <div className="grid grid-cols-2 bg-[#f4f0e2] place-content-center p-5">
        <img
          className="align-middle justify-self-center"
          src={mainlogo}
          alt="LifeTheater Logo"
        />
        <img
          className="align-middle justify-self-center"
          src={video}
          alt="Lifetheater Logo"
        />
      </div>
      <div className="bg-[#f4f0e2] pb-5">
        <a className="self-center" href="#Intro">
          <button className="bg-[#583F25] text-white mt-4 rounded-2xl w-1/2 text-2xl pt-3 pb-3">
            Book Now
          </button>
        </a>
      </div>
      <div className="grid bg-[#fbf9f3] sm:grid-cols-2 sm:p-20" id="Intro">
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
          <a className="self-center" href="#Resume">
            <button className="bg-[#e2ddcc] text-[#583F25] mt-4 rounded-2xl w-1/2 text-xl pt-3 pb-3">
              View our Packages
            </button>
          </a>
        </div>
      </div>
      <div
        className="bg-[#583F25] grid grid-cols-2 justify-center items-center place-content-around p-4 w-full"
        id="Resume"
      >
        <h1 className="text-[#f4f0e2] sm:p-2">Our Printable Brochure</h1>
        <div className="grid grid-cols-2 gap-3 sm:gap-5">
          <a
            href={"/Brochure.png"}
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
        <div className="grid grid-cols-3 gap-10 p-5">
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
        <a className="self-center pb-10" href="#Resume">
          <button className="bg-[#e2ddcc] text-[#583F25] mt-4 rounded-2xl w-1/2 text-xl pt-3 pb-3">
            Tell Your Story Today
          </button>
        </a>
      </div>
      <div className="bg-[#fbf9f3]">
        <h1>Testimonials</h1>
      </div>
      <div id="Contact">
        <Contact />
      </div>
      <div className="bg-dark h-10"></div>
    </>
  )
}

export default App
