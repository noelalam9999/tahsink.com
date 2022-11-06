import React from "react";
import Link from "next/link";

const Categories = () => {
  return (
    <>
      {/* <!-- Categories Area -->  */}
      <div  className="pb-3 pb-lg-9 bg-gradient-2">
        <div className="container">
          <hr className="pt-15 pt-lg-15" />
          {/* <!-- Section Top --> */}
          <div className="row align-items-center justify-content-center">
            {/* <!-- Section Title --> */}
            <div  className="col-12 col-xl-9 col-lg-7 col-md-9">
              <div className="text-center mb-12 mb-lg-7">
                <h1 className="font-size-8 font-weight-bold mb-3">
                Hello and welcome to my personal website!
                </h1>
             
                <p className="font-size-4 px-5 px-lg-7 px-xl-9 px-xxl-15 mb-3">
                My name is Tahsin Khan and I am a Teaching Associate at the School of Computer Science and a Doctoral Researcher in the Faculty of Engineer, at University of Nottingham. This site serves as a hub of resources related to my professional activities.

                </p>
                {/* <p className="font-size-4 mb-8">
                          <a target="_blank" href="https://ci-gsc.com/media/post_images/Research_Overview.pdf" className={`btn btn-primary text-uppercase font-size-3`}>
                  Research Overview</a>   
                  <a style={{marginLeft:"10px",marginRight:"10px"}}  target="_blank" href="https://ci-gsc.com/media/post_images/CV_Tahsinur_Khan.pdf" className={`btn btn-primary text-uppercase font-size-3`}>
                 Curriculum Vitae</a> 
               
             </p> */}
         
           
              </div>
            </div>
          </div>
          <div
            className="row justify-content-center "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-11 mb-9">
            
              <div className="pt-3 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3">
                <div className="media align-items-center">
                
                  <div>
             
                    <h3 className="font-size-6 mb-0">
                      <Link href="/about">
                        <a className="heading-default-color font-weight-semibold">
                     About me
                        </a>
                      </Link>
                    </h3>
                    <p className="font-size-3  ">
                    Professional summary & Curriculum Vitae
                </p>
                  </div>
                </div>
                <div className="d-flex pt-3">
                  <ul className="list-unstyled mb-1 d-flex flex-wrap">
                    <li>
                      <Link href="/about">
                        <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                      
                          Read More
                        
                        </a>
                      </Link>
                    </li>
          
                  </ul>
                
                </div>
              </div>
          
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-11 mb-9">
              {/* <!-- Single Featured Job --> */}
              <div className="pt-3 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3">
                <div className="media align-items-center">
                
                  <div>
                   
                    <h3 className="font-size-6 mb-0">
                      <Link href="teaching">
                        <a className="heading-default-color font-weight-semibold">
                    Teaching
                        </a>
                      </Link>
                    </h3>
                    <p className="font-size-3  ">
                    My teaching activities
                </p>
                  </div>
                </div>
                <div className="d-flex pt-3">
                  <ul className="list-unstyled mb-1 d-flex flex-wrap">
                    <li>
                      <Link href="/teaching">
                        <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                        
                          Read More
                        </a>
                      </Link>
                    </li>
          
                  </ul>
                
                </div>
              </div>
              {/* <!-- End Single Featured Job --> */}
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-11 mb-9">
              {/* <!-- Single Featured Job --> */}
              <div className="pt-3 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3">
                <div className="media align-items-center">
                
                  <div>
                  
                    <h3 className="font-size-6 mb-0">
                      <Link href="/education">
                        <a className="heading-default-color font-weight-semibold">
                     Education
                        </a>
                      </Link>
                    </h3>
                    <p className="font-size-3  ">
                    Academic Qualifications
                </p>                  </div>
                </div>
                <div className="d-flex pt-3">
                  <ul className="list-unstyled mb-1 d-flex flex-wrap">
                    <li>
                      <Link href="/education">
                        <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                       
                          Read More
                        </a>
                      </Link>
                    </li>
          
                  </ul>
                
                </div>
              </div>
              {/* <!-- End Single Featured Job --> */}
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-11 mb-9">
              {/* <!-- Single Featured Job --> */}
              <div className="pt-3 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3">
                <div className="media align-items-center">
                
                  <div>
             
                    <h3 className="font-size-6 mb-0">
                      <Link href="/research">
                        <a className="heading-default-color font-weight-semibold">
                     Research
                        </a>
                      </Link>
                    </h3>
                    <p className="font-size-3  ">
                    My Research work
                </p>
                  </div>
                </div>
                <div className="d-flex pt-3">
                  <ul className="list-unstyled mb-1 d-flex flex-wrap">
                    <li>
                      <Link href="/research">
                        <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                        
                          Read More
                        </a>
                      </Link>
                    </li>
          
                  </ul>
                
                </div>
              </div>
              {/* <!-- End Single Featured Job --> */}
            </div>

           
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-11 mb-9">
              {/* <!-- Single Featured Job --> */}
              <div className="pt-3 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3">
                <div className="media align-items-center">
                
                  <div>
               
                    <h3 className="font-size-6 mb-0">
                      <Link href="/technical">
                        <a className="heading-default-color font-weight-semibold">
                     Technical Skills and Projects
                        </a>
                      </Link>
                    </h3>
                    <p className="font-size-3  ">
                    List of my technical skills and portfolio of projects
                </p>
                  </div>
                </div>
                <div className="d-flex pt-3">
                  <ul className="list-unstyled mb-1 d-flex flex-wrap">
                    <li>
                      <Link href="/technical">
                        <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                      
                          Read More
                        </a>
                      </Link>
                    </li>
          
                  </ul>
                
                </div>
              </div>
              {/* <!-- End Single Featured Job --> */}
            </div>
            
           
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-11 mb-9">
              {/* <!-- Single Featured Job --> */}
              <div className="pt-3 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3">
                <div className="media align-items-center">
                
                  <div>
                
                    <h3 className="font-size-6 mb-0">
                      <Link href="/outreach-activities">
                        <a className="heading-default-color font-weight-semibold">
                     Outreach Activities
                        </a>
                      </Link>
                    </h3>
                    <p className="font-size-3">
                   Leadership & Volunteering
                </p>
                  </div>
                </div>
                <div className="d-flex pt-3">
                  <ul className="list-unstyled mb-1 d-flex flex-wrap">
                    <li>
                      <Link href="/outreach-activities">
                        <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                       
                          Read More
                        </a>
                      </Link>
                    </li>
          
                  </ul>
                
                </div>
              </div>
              {/* <!-- End Single Featured Job --> */}
            </div>
          </div>
    
        </div>
      </div>
    </>
  );
};

export default Categories;
