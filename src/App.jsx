import Navbar from "./Navbar";
import Card from "./Card";
import roundedimg from "../public/photo/Nayeem.png";
import wave from "../public/photo/shape-removebg-preview.png";
import Services from "./Services";
import Pagination from "./Pagination";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <div className="bg-[url('../public/photo/bgimg.jpg')] bg-center bg-cover h-screen">
        <Navbar />
        {/* header ends  */}
        {/* rounded image ssection start */}
        <div className="absolute top-14 left-1/2 transform -translate-x-1/2">
          <img
            src={roundedimg}
            alt=""
            className="h-14 w-14 sm:h-44 sm:w-44 rounded-full"
          />
        </div>

        {/* rounded image ssection ends */}
        <div className="flex flex-col items-center mt-14">
          <div className="text-white text-xl md:text-xl lg:text-4xl pl-4 lg:mt-36 md:pl-28 tracking-wide font-bold text-center">
            Hey, I'm Nayem Sarkar
          </div>
          <div className="text-xs md:text-2xl text-white text-center font-semibold mt-5 px-4 md:px-0">
            I write codes, travel the world. This is my journal where I log
            everything.
            <br />
            Subscribe to my newsletter to journey along with me right from your
            inbox.
          </div>
          <div className="pl-6 w-3/5 md:pl-12 lg:mt-8">
            <input
              type="text"
              placeholder="Your Email Address"
              className="bg-gray-900 w-11/12 md:w-4/5 h-12 md:h-14 rounded-lg mt-4 px-4 text-white text-sm lg:text-lg"
              required
            />
          </div>
          <button
            type="button"
            className="text-white bg-orange-600 w-24 h-10 text-sm absolute top-[212px] left-[322px] lg:w-44 lg:h-12  rounded-lg lg:absolute lg:top-[408px] lg:left-[710px] lg:text-xl mt-4 lg:mt-8 font-medium focus:outline-none hover:bg-gradient-to-br from-orange-500 via-red-500 to-orange-300 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800"
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* container ends here  */}
      <div className="absolute top-3/4 w-full mt-12">
        <img src={wave} alt="" className="w-full" />
      </div>
      <div className="bg-black h-44"></div>
      {/* secound container  */}
      <div className=" bg-black">
        <h1 class="text-center mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Our services
          </span>
        </h1>
        <Services />
        <div className="text-center h-20 lg:mt-5">
          <Pagination />
        </div>
      </div>
      {/* secound container ends here  */}
      {/* footer section starts here  */}
      <div>
      <Footer/>
      </div>
    </>
  );
};
export default App;
