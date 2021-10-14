import React from "react";
// import "materialize-css";
// import { Parallax } from "react-materialize";
import "./style.css";
import BackgroundImage from "./images/background-image.jpeg";
import UnderConstruction from "./images/under-construction.jpeg";
import WebsiteUnderConstruction from "./images/website-under-construction.png";

function Main() {
  return (
    <body>
      {/* <div>
        <Parallax
          image={<img height="100%" src={UnderConstruction} alt="under-construction" />}
          // image={<img src={BackgroundImage} alt="background-img" />}
          options={{
            responsiveThreshold: 0,
          }}
        />
      </div> */}

      {/* Profile Image */}

      {/* the main profile image is being called in the CSS, this needs to change */}
      {/* <div id="bio-image" alt="profile-img"></div> */}
      <div id="website-under-construction" alt="under-construction"></div>

      {/* profile image container */}
      <figure className="container-fluid">
        <div className="row">
          <p className="quote">"Stop saying, I can't because...</p>
          <p className="quote">Start saying, I want to... How can I?"</p>
        </div>
      </figure>

      {/* bio info */}
      <div className="body-container">
        <div className="row">
          <div className="col m1"></div>
          <div id="main-bio" className="col m4">
            {/* <p>
              I was ready for a career change and made the decision to quit my
              job, sell my house, move back home to Au<p>
              I was ready for a career change and made the decision to quit my
              job, sell my house, move back home to Austin, Texas and earn
              certifications to become a Web Developer/Software Engineer. My
              interest in coding started a long time ago when I was much younger
              and looking for a career path to persue, but I had unfortunately
              chosen a different path, life got in the way, and I wasn't in the
              right position to make any career changes. Eventually, I decided
              to start learning what I could on my own as a hobby in my spare
              time, until I hit a wall. I figured, just do what I'm most
              interest in and learn as I go, but found that for me to do those
              things, I needed to code. I had reached a point where if I wanted
              to go any further, I needed to be in a place where I could pursue
              it as more than just a hobby interest.
            </p>
          </div>
          <div id="main-bio" className="col m4">
            <p className="hide-on-small-only">
              Working full time as I was, I probably would've reached that next
              step in about... 10 years? Too slow. I had to do something if I
              wanted to reach that next step sooner. I set myself up to make
              some good financial decisions and was quickly able to freely
              choose what I wanted to do next in life. Over the last several
              years, I had began learning to use several Linux Distro's,
              familiarize myelf with the Bash terminal and repair broken
              computers for me to use. I figured, if I wanted to be in this
              field, I should be able to troubleshoot and repair my own
              computers. Every computer I currently own was either broken when I
              got it, or I built it from scratch. Then I earned a Full Stack
              certification from The Austin Coding Bootcamp at UT Austin. Now
              finally looking to apply what I have learned in a professional
              setting.
            </p> that for me to do those
              things, I needed to code. I had reached a point where if I wanted
              to go any further, I needed to be in a place where I could pursue
              it as more than just a hobby interest.
            </p>
          </div>
          <div id="main-bio" className="col m4">
            <p className="hide-on-small-only">
              Working full time as I was, I probably would've reached that next
              step in about... 10 years? Too slow. I had to do something if I
              wanted to reach that next step sooner. I set myself up to make
              some good financial decisions and was quickly able to freely
              choose what I wanted to do next in life. Over the last several
              years, I had began learning to use several Linux Distro's,
              familiarize myelf with the Bash terminal and repair broken
              computers for me to use. I figured, if I wanted to be in this
              field, I should be able to troubleshoot and repair my own
              computers. Every computer I currently own was either broken when I
              got it, or I built it from scratch. Then I earned a Full Stack
              certification from The Austin Coding Bootcamp at UT Austin. Now
              finally looking to apply what I have learned in a professional
              setting.
            </p> */}
          </div>
        </div>
      </div>

      <div className="fa-linkedin"></div>
    </body>
  );
}

export default Main;
