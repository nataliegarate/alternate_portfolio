import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              className="avatar-img"
              src="https://cdn.pixabay.com/photo/2014/04/02/17/07/user-307993_1280.png"
            />
            <div className="banner-text">
              <h1>Fullstack Developer</h1>
              <hr />
              <p>
                HTML/CSS | Javascript | React | Redux | Node.js | Express |
                Sequelize | PostgreSQL | Learning Java
              </p>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/natalie-garate/"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-linkedin-square"
                    rel="noopener noreferrer"
                    aria-hidden="true"
                  />{" "}
                </a>
                <a
                  href="mailto:natalieegarate@hotmail.com?Subject=Hello%20again"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-envelope"
                    rel="noopener noreferrer"
                    aria-hidden="true"
                  />{" "}
                </a>
                <a href="https://github.com/nataliegarate" target="_blank">
                  {" "}
                  <i
                    className="fa fa-github-square"
                    rel="noopener noreferrer"
                    aria-hidden="true"
                  />{" "}
                </a>

               

              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
