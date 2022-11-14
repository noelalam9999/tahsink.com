import React, { useContext,  useState, useEffect } from "react";
import Link from "next/link";
import GlobalContext from "../../context/GlobalContext";
import Logo from "../Logo";
import imgM from "../../assets/image/l1/png/message.png";
import { useRouter } from 'next/router';
import { IoIosArrowRoundUp } from "react-icons/io";
import { animateScroll } from "react-scroll";

const Footer = () => {
  const gContext = useContext(GlobalContext);
  const router = useRouter();
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  
  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <>
      <footer  className="footer bg-ebony-clay dark-mode-texts">
        <div className="container">
          {/* <!-- Cta section --> */}
          <div className="pt-6 pt-lg-5 pb-2 pb-lg-7 border-bottom border-width-1 border-default-color-2">
            <div className="row justify-content-center ">
              <div
                className="col-xl-2 col-lg-12"
             
              >
                {/* <!-- cta-content start --> */}
                <div className="pb-xl-0 pb-2 text-xl-left text-center">
                  <h2 className="text-white font-size-3 mb-4">
                  ©  Copyright Tahsin Khan
                  </h2>
                  <p className="text-hit-gray font-size-5 mb-0">
                   
                  </p>
                </div>
                {/* <!-- cta-content end --> */}
              </div>
         
            </div>
          </div>
        </div>
        
        <button
        className={`scroll-top ${scroll > top ? "show" : ""}`}
        onClick={() => scrollToTop()}
      >
        <IoIosArrowRoundUp />
      </button>
      </footer>
    </>
  );
};

export default Footer;