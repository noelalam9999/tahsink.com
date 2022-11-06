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
                About Me
                </h2>
             
                <p className="font-size-3 px-5 px-lg-7 px-xl-9 px-xxl-15 mb-3">
                An accomplished and dependable Doctoral Researcher and Computer Science Teaching Assistant looking to join the technology industry as a Software Engineer. As an analytical scientific investigator, with a track record of efficient project management and exposure to various technology stacks and research methodologies, I am looking to utilize my skillsets to deliver effective technical solutions through collaborating with an active and dynamic team. 

                </p>
                <p className="font-size-3 px-5 px-lg-7 px-xl-9 px-xxl-15 mb-3">
                Prior to commencing PhD, I obtained an MRes in Geospatial Data Science, an MSc in Computer Science both from University of Nottingham and BSc in Electrical Engineering from Iowa State University, Ames, Iowa, US.

                </p>
                <p className="font-size-3 px-5 px-lg-7 px-xl-9 px-xxl-15 mb-3">Please find attached an outline of my doctoral research.
</p>
<a target="_blank" href="https://ci-gsc.com/media/post_images/Research_Overview.pdf" className={`btn btn-primary text-uppercase font-size-3`}>
                  Research Overview</a> 
              </div>
            </div>
          </div>
          
    
        </div>
      </div>
    </>
  );
};

export default Categories;
