import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-green-950 p-8 text-white">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-bold mb-2">About Us</h4>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum eleifend nulla eget diam ultrices, et fermentum ipsum
              malesuada.
            </p>
          </div>

          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-bold mb-2">Categories</h4>
            <ul className="text-sm">
              <li>About Us</li>
              <li>Services</li>
              <li>Case</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-bold mb-2">Contact Us</h4>
            <p className="text-sm">
              123 Main Street
              <br />
              City, State ZIP
              <br />
              Phone: (123) 456-7890
              <br />
              Email: info@example.com
            </p>
          </div>

          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-bold mb-2">Follow Us</h4>
            <ul className="text-sm flex">
              <li className="mr-2">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="mr-2">
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="mr-2">
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="mr-2">
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            &copy; 2023 Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
