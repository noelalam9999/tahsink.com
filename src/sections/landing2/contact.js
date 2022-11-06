import React from "react";
import Link from "next/link";

const Categories = () => {
  return (
    <>
      {/* <!-- Categories Area -->  */}
      <div  className="pb-7 pb-lg-9 bg-gradient-2">
        <div className="container">
          <hr className="pt-15 pt-lg-15" />
          {/* <!-- Section Top --> */}
          <div className="row align-items-center justify-content-center">
            {/* <!-- Section Title --> */}
            <div  className="col-12 col-xl-9 col-lg-7 col-md-9">
              <div className="text-center mb-12 mb-lg-7">
                <h2 className="font-size-6 font-weight-bold mb-3">
                Contact Me
                </h2>
             
                <p className="font-size-3 px-5 px-lg-7 px-xl-9 px-xxl-15 mb-3">
                I'm more than happy to discuss roles in HE teaching and mentorship. Please find my contact information below 
                </p>
              </div>
              <div className="text-center mb-12 mb-lg-7">
                <h3 className="font-size-6 font-weight-bold mb-3">
                Email
                </h3>
             
                <p className="font-size-3 px-5 px-lg-7 px-xl-9 px-xxl-15 mb-3">
               <a href="mailto:me@tahsink.com">tahsinur.khan1 (at) nottingham (dot) ac (dot) uk</a>
                </p>
                {/* <p className="font-size-3 px-5 px-lg-7 px-xl-9 px-xxl-15 mb-3">
            <a href="mailto:psxtrk@nottingham.ac.uk">    psxtrk@nottingham.ac.uk (Academic) </a>
                </p> */}
              </div>
              <div className="text-center mb-12 mb-lg-7">
                <h3 className="font-size-6 font-weight-bold mb-3">
                Office
                </h3>
             
                <p className="font-size-3 px-5 px-lg-7 px-xl-9 px-xxl-15 mb-6">
                {/* <a className=".icon-pin-3" href="https://www.openstreetmap.org/?mlat=52.95352756977081&mlon=-1.1871886253356934#map=17/52.95353/-1.18719">A06 of the Computer Science building.</a> */}
                </p>
                <div className="text-center mb-12 mb-lg-7">
                <p className="font-size-3 px-5 px-lg-7 px-xl-9 px-xxl-15 mb-3">
                <a className=".icon-pin-3" href="https://www.openstreetmap.org/?mlat=52.95352756977081&mlon=-1.1871886253356934#map=17/52.95353/-1.18719"> Room A06, School of Computer Science, Jubilee Campus </a>
                </p>
                <p className="font-size-3 px-5 px-lg-7 px-xl-9 px-xxl-15 mb-3">
                <a className=".icon-pin-3" href="https://www.openstreetmap.org/?mlat=52.95352756977081&mlon=-1.1871886253356934#map=17/52.95353/-1.18719"> University of Nottingham, Nottingham, NG8 1BB, UK </a>
                </p>
                <p className="font-size-3 px-5 px-lg-7 px-xl-9 px-xxl-15 mb-3">
                
                </p>
                <p className="font-size-3 px-5 px-lg-7 px-xl-9 px-xxl-15 mb-3">
                
                </p>
                <p className="font-size-3 px-5 px-lg-7 px-xl-9 px-xxl-15 mb-3">
                
                </p>
                <p className="font-size-3 px-5 px-lg-7 px-xl-9 px-xxl-15 mb-3">
                
                </p>
                <p className="font-size-3 px-5 px-lg-7 px-xl-9 px-xxl-15 mb-3">
                
                </p>
                </div>
              </div>
            </div>
          </div>
          
    
        </div>
      </div>
    </>
  );
};

export default Categories;
