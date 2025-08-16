import logo from "./assets/logo.png"
import logo2 from "./assets/logo2.png"
function Nav() {
  return (
    <>
      <div className="font-special font-medium text-lg bg-[#f4f0e2] grid grid-flow-col align-middle sticky top-0 z-20 p-2 shadow-md">
        <div className="flex justify-center items-center">
          <img src={logo} className="self-center w-1/6 pl-4"></img>
          {/* <h2 className="font-special">Life Theater</h2> */}
          <img src={logo2} className="self-center w-1/2 p-1"></img>
        </div>
        <a className="self-center" href="#Contact">
          <h2>Packages</h2>
        </a>
        <a className="self-center" href="#Resume">
          <h2>Brochure</h2>
        </a>
        <a className="self-center" href="#Portfolio">
          <h2>Testimonials</h2>
        </a>
        <a className="self-center" href="#Contact">
          <h2>Contact</h2>
        </a>
      </div>
    </>
  )
}
export default Nav
