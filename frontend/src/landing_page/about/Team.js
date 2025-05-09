import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5 border-top">
        <h1 className="fs-4 text-center"> People</h1>
      </div>
      <div className="row p-5 mt-5  text-center fs-6">
        <div className="col-6">
          <img src="media/images/Divyanshu.jpg" style={{ borderRadius: "100%", width: "80"  }} />
          <h4 className="mt-5">Divyanshu</h4>
            <h6>Full Stack Developer</h6>
        </div>
        <div className="col-6 mt-5">
        I am a passionate and results-driven software developer with hands-on experience in web and mobile application development, data analysis, and project management.<p>I thrive in collaborative environments and excel at solving complex problems under tight deadlines. My goal is to leverage my technical skills and creativity to build impactful digital solutions.</p>
        <p>Contact me <a href="https://www.linkedin.com/in/divyanshu-kumar-86736a257/">Linkedin</a> / <a href="https://github.com/divyanshu98163">Github</a></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
