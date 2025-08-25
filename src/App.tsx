import mainlogo from "./assets/images/Mainlogo.png"
import video from "./assets/images/videohold.png"
import write from "./assets/images/write.jpg"
import rock from "./assets/images/bg.jpg"
import lineTree from "./assets/images/lineTree.png"
import lineHands from "./assets/images/lineHands.png"
import lineCouple from "./assets/images/lineCouple.png"
import downloadImage from "./assets/download.png"
import rightImage from "./assets/right.png"
import leftquote from "./assets/leftquote.png"
import rightquote from "./assets/rightquote.png"
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
            href={"/LifeTheaterBrochure.pdf"}
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
        <h1 className="pt-10">Testimonials</h1>
        <div className="grid grid-cols-3 gap-8 p-10 place-content-center justify-items-center place-items-center">
          <div className="bg-[#f4f0e2] p-4 rounded-3xl">
            <img
              src={lineHands}
              alt="Line Drawing of a tree"
              className="self-center justify-self-center w-full rounded-3xl p-3"
            />
            <div className="grid grid-flow-col place-content-center text-center">
              <img
                src={leftquote}
                className="w-1/4 self-start justify-self-end"
              />
              <h2 className=" p-1 pt-4 pb-4">
                This is an amazing chance to capture a legacy like never before
              </h2>
              <img
                src={rightquote}
                className="w-1/4 self-end justify-self-start pb-2"
              />
            </div>
            <h2 className="font-special text-xl">-Megan Smith</h2>
          </div>
          <div>
            <div className="bg-[#f4f0e2] p-4 rounded-3xl">
              <img
                src={lineTree}
                alt="Line Drawing of a tree"
                className="self-center justify-self-center w-full rounded-3xl p-3"
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
          </div>
        </div>
      </div>
      <div id="Contact">
        <Contact />
      </div>
      <div className="bg-[#e2ddcc] h-10"></div>
    </>
  )
}

export default App
