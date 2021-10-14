import React from "react";
import SpacePortalImage from "./images/Space Portal _ Main.gif";
// import ProjectTwoImage from "./images/Screenshot from 2020-08-10 17-54-50.png";
import QuizImage from "./images/Quiz.gif";
import RockPaperScissorsImage from "./images/Rock Paper Scissors.gif";
import PasswordGeneratorImage from "./images/Password Generator.gif";
import WorkDayScheduler from "./images/Work Day Scheduler.gif";
import WeatherDashboardImage from "./images/Weather Dashboard.gif";

function Project() {
  return (
    <section>
      <div class="container-fluid">
        <div class="row">
          {/* <!-- Space Portal --> */}
          <div class="col s12 m6">
            <div class="card">
              <div class="card-image">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://letsgitthis.github.io/totallyNotTheDarkSide/"
                >
                  <img
                    class="card-video"
                    src={SpacePortalImage}
                    alt="space-portal-img"
                  />
                </a>
                <span class="card-title"></span>
              </div>
              <div class="card-content">
                <h4>Space Portal</h4>
                <p>
                  A site that brings multiple API's together in to one place for
                  all your necessary space information needs.
                </p>
              </div>
              <div class="card-action">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://letsgitthis.github.io/totallyNotTheDarkSide/"
                >
                  Link
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Weather Dashboard --> */}
          <div class="col s12 m6">
            <div class="card">
              <div class="card-image">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://letsgitthis.github.io/homework-week-6/"
                >
                  <img
                    class="card-video"
                    src={WeatherDashboardImage}
                    alt="weather-dashboard-img"
                  />
                </a>
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <h4>Weather Dashboard</h4>
                <p>
                  A site that displays the weather forecast for cities you
                  search for and saves the city in a list where you can click to
                  search again without having to use the search bar each time.
                </p>
              </div>
              <div class="card-action">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://letsgitthis.github.io/homework-week-6/"
                >
                  Link
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          {/* <!-- Timed Quiz --> */}
          <div class="col s12 m6">
            <div class="card">
              <div class="card-image">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://letsgitthis.github.io/homework-week-4/"
                >
                  <img class="card-video" src={QuizImage} alt="quiz-img" />
                </a>
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <h4>Timed Quiz</h4>
                <p>
                  A timed quiz with questions relating to Javascript. Wrong
                  answers will deduct time.
                </p>
              </div>
              <div class="card-action">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://letsgitthis.github.io/homework-week-4/"
                >
                  Link
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Rock Paper Scissors --> */}
          <div class="col s12 m6">
            <div class="card">
              <div class="card-image">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://letsgitthis.github.io/rock-paper-scissors/"
                >
                  <img
                    class="card-video"
                    src={RockPaperScissorsImage}
                    alt="rock-paper-scissors-img"
                  />
                </a>
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <h4>Rock, Paper, Scissors</h4>
                <p>
                  A simple game of Rock, Paper, Scissors. Your score goes up if
                  you win a round. The computers score goes up if it wins the
                  round. No scores go up if it is a tie.
                </p>
              </div>
              <div class="card-action">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://letsgitthis.github.io/rock-paper-scissors/"
                >
                  Link
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          {/* <!-- Password Generator --> */}
          <div class="col s12 m6">
            <div class="card">
              <div class="card-image">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://letsgitthis.github.io/homework-week-3/"
                >
                  <img
                    class="card-video"
                    src={PasswordGeneratorImage}
                    alt="password-generator-img"
                  />
                </a>
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <h4>Password Generator</h4>
                <p>
                  A site that generates a password at random. The length can be
                  between 8 and 128 characters long and include Numbers,
                  Uppercase, Lowercase, and Special Characters as options.
                </p>
              </div>
              <div class="card-action">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://letsgitthis.github.io/homework-week-3/"
                >
                  Link
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Work Day Scheduler --> */}
          <div class="col s12 m6">
            <div class="card">
              <div class="card-image">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://letsgitthis.github.io/homework-week-5/"
                >
                  <img
                    class="card-video"
                    src={WorkDayScheduler}
                    alt="work-day-scheduler-img"
                  />
                </a>
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <h4>Work Day Schedular</h4>
                <p>
                  A site that displays saved content in designated time cards
                  for the work day. The current hour will be displayed as red.
                  Passed hours will display as gray. Future hours will display
                  green. Time and color update should function live without
                  refresh.
                </p>
              </div>
              <div class="card-action">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://letsgitthis.github.io/homework-week-5/"
                >
                  Link
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          {/* <!-- placeholder --> */}
          {/* <div class="col s12 m6">
          <div class="card">
            <div class="card-image">
              <a target="_blank" href="">
                <img class="card-video" src="" />
              </a>
              <span class="card-title"></span>
            </div>
            <div class="card-content">
              <h4>Placeholder</h4>
              <p>
                Waiting for content. This field is empty because every 2 cards
                is a row. It's better to fill card with new content when
                available than shift everything up.
              </p>
            </div>
            <div class="card-action">
              <a target="_blank" href="!#">Link</a>
            </div>
          </div>
        </div> */}
          {/* <!-- TradeUp --> */}
          {/* <div class="col s12 m6">
            <div class="card">
              <div class="card-image">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://letsgitthis.github.io/homework-week-6/"
                >
                  <img
                    class="card-video"
                    src={ProjectTwoImage}
                    alt="project-two-img"
                  />
                </a>
                <span class="card-title"></span>
              </div>
              <div class="card-content">
                <h4>TradeUp</h4>
                <p>
                  A site that allows users to input items that are stored in a
                  database and rendered onto another page to view. Items can be
                  updated and deleted. (Please note that we are currently
                  updating the main repo, so this specific field may not be
                  completed. Link will only take you to Github until Heroku
                  launch.)
                </p>
              </div>
              <div class="card-action">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/markmcdnyu/TheNomads"
                >
                  Link
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Project;
