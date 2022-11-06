import React from "react";
import { Nav, Tab } from "react-bootstrap";

import PageWrapper from "../components/PageWrapper";

const CandidateProfile = () => {
  return (
    <>
      <PageWrapper >
        <div className="bg-default-2 pt-22 pt-lg-25 pb-13 pb-xxl-32">
          <div className="container">
            {/* <!-- back Button --> */}

            {/* <!-- back Button End --> */}
            <div className="row">
              {/* <!-- Left Sidebar Start --> */}
              <div className="col-12 col-xxl-3 col-lg-4 col-md-5 mb-11 mb-lg-0">
          
              </div>
              {/* <!-- Left Sidebar End --> */}
              {/* <!-- Middle Content --> */}
              <div className="col-12 col-xxl-6 col-lg-8 col-md-7 order-2 order-xl-1">
                <Tab.Container id="left-tabs-example" defaultActiveKey="two">
                  <div className="bg-white rounded-4 shadow-9">
                    {/* <!-- Tab Section Start --> */}

                    <div className="pr-xl-0 pr-xxl-14 p-5 px-xs-12 pt-7 pb-5">
                          <h3 className="font-size-8 mb-7 mt-5 text-black-2 font-weight-semibold">
                            Teaching Activities
                          </h3>
                          <p className="font-size-4 mb-8">
                          I assist with the delivery of a number of undergraduate and postgraduate modules. The role combines delivering tutorial lectures, lab sessions, exam and coursework marking,  tutoring sessions for UG students and PGT project supervision. <br/> <br/>Please find below sample of my teaching activities. 

                          </p>
                         
                        </div>
                    <Nav
                      className="nav border-bottom border-mercury pl-12"
                      role="tablist"
                    >
                      <li className="tab-menu-items nav-item pr-12">
                        <Nav.Link
                          eventKey="one"
                          className=" font-size-3 font-weight-bold text-default-color py-3 px-0"
                        >
                          Modules supported
                        </Nav.Link>
                      </li>
                      <li className="tab-menu-items nav-item pr-12">
                        <Nav.Link
                          eventKey="two"
                          className=" font-size-3 font-weight-bold text-default-color py-3 px-0"
                        >
                          Teaching practices
                        </Nav.Link>
                      </li>
                      <li className="tab-menu-items nav-item pr-12">
                        <Nav.Link
                          eventKey="three"
                          className="font-size-3 font-weight-bold text-default-color py-3 px-0"
                        >
                          AFHEA certificate
                        </Nav.Link>
                      </li>
                    </Nav>
                    {/* <!-- Tab Content --> */}
                    <Tab.Content>
                      <Tab.Pane eventKey="one">
                        {/* <!-- Excerpt Start --> */}
                      
                        {/* <!-- Excerpt End --> */}
                        {/* <!-- Skills --> */}
                        <div className="border-top pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                          Autumn 2022/23
                          </h4>
                          <ul className="font-size-4 mb-7 mt-5 text-black">
                          <li>
                          Mathematics for Computer Science 1 (COMP1001)
                        </li>
                          <li>
                          Programming and Algorithms (COMP 1005)
                         </li>
                          <li>
                          Systems and Architecture (COMP1006)
                          </li>
                          <li>
                          Computer Fundamentals (COMP1007)
                          </li>
                          <li>
                          Autonomous Robotic Systems (COMP4034) 
                        </li>
                          <li>
                          Linear and Discrete Optimisation (COMP4041) *
                          </li>
                          <li>
                          Simulation and Optimisation for Decision Support (COMP4038) **
                          </li>
                          </ul>
                        </div>
                        {/* <!-- Skills End --> */}
                        {/* <!-- Card Section Start --> */}
                        <div className="border-top pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                          Spring 2021/22
                          </h4>
                          <ul className="font-size-4 mb-7 mt-5 text-black">
                          <li>
                          Mathematics for Computer Science 2 (COMP1043)
                          </li>
                          <li>
                          Programming Paradigms (COMP1009)
                          </li>
                          <li>
                          Languages and Computation (COMP2001)
                          </li>
                          <li>
                          Fuzzy Logic and Fuzzy Systems (COMP4033)
                         </li>
                          
                          </ul>
                        </div>
                        <div className="border-top pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                          Autumn 21/22
                          </h4>
                          <ul className="font-size-4 mb-7 mt-5 text-black">
                          <li>
                          Autonomous Robotic Systems (COMP4034)
                          </li>

                          </ul>
                        </div>
                        <div className="border-top pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                          Spring 2020/21
                          </h4>
                          <ul className="font-size-4 mb-7 mt-5 text-black">
                          <li>
                          Mathematics for Computer Science 2 (COMP1043)
                          </li>
                          <li>
                          Programming Paradigms (COMP1009)
                         </li>
                          <li>
                          Data Modelling and Analysis (COMP 4030)
                          </li>
                          </ul>
                        </div>
                        <div className="text-black border-top pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5">
                        
                          *Back-up <br/>
                          **For Spring 2023 term
                         
                          
                          
                        </div>
                        {/* <!-- Card Section End --> */}
                        {/* <!-- Card Section Start --> */}
                
                        {/* <!-- Card Section End --> */}
                      </Tab.Pane>
                      <Tab.Pane eventKey="two">
                        {/* <!-- Excerpt Start --> */}
                      
                        {/* <!-- Excerpt End --> */}
                        {/* <!-- Skills --> */}
                        <div className="border-top pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                          Tutorial Lecture on Vector Spaces
                          </h4>
                          <p className="font-size-4 mb-8">
                         <a target="_blank" href="https://www.youtube.com/watch?v=nPgQDy0gbA8"> Video Link</a>
                          </p>
                         
                        </div>
                        {/* <!-- Skills End --> */}
                        {/* <!-- Card Section Start --> */}
                        <div className="border-top pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                          Supplementary Lecture video covering various topics in Linear Algebra
                          </h4>
                          <p className="font-size-4 mb-8">
                           <a target="_blank" href="https://www.youtube.com/watch?v=jRKi0woQrFg"> Video Link </a>
                          </p>
                         
                         
                       
                        </div>
                        <div className="border-top pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                          Tutorial Lecture on Predicate Logic
                          </h4>
                          <p className="font-size-4 mb-8">
                          
                        <a target="_blank" href="https://ci-gsc.com/media/post_images/Sample_tutorial_lecture-Predicate_Logic.pdf"> Slides Link</a>
                          </p>
                         
                       
                        </div>
                        {/* <!-- Card Section End --> */}
                        {/* <!-- Card Section Start --> */}
                
                        {/* <!-- Card Section End --> */}
                      </Tab.Pane>
                      <Tab.Pane eventKey="three">
                        {/* <!-- Excerpt Start --> */}
                      
                        {/* <!-- Excerpt End --> */}
                        {/* <!-- Skills --> */}
                        <div className="border-top pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5">
                         
                          <p className="font-size-4 mb-8">
                          <a target="_blank" href="https://ci-gsc.com/media/post_images/AFHEA-Tahsinur_Khan.pdf" className={`btn btn-primary text-uppercase font-size-3`}>
                  AFHEA Certificate</a>   
                   
             </p>
                         
                        </div>
                        {/* <!-- Skills End --> */}
                        {/* <!-- Card Section Start --> */}
                       
                      
                        {/* <!-- Card Section End --> */}
                        {/* <!-- Card Section Start --> */}
                
                        {/* <!-- Card Section End --> */}
                      </Tab.Pane>
                    </Tab.Content>
                    {/* <!-- Tab Content End --> */}
                    {/* <!-- Tab Section End --> */}
                  </div>
                </Tab.Container>
              </div>
              {/* <!-- Middle Content --> */}
              {/* <!-- Right Sidebar Start --> */}
              <div className="col-12 col-xxl-3 col-md-4 offset-xxl-0 offset-lg-4 offset-md-5 order-3 order-xl-2 mt-xxl-0 mt-md-12">
                
                
              </div>
              {/* <!-- Right Sidebar End --> */}
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default CandidateProfile;
