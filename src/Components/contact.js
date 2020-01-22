import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Natalie Garate</h2>

            <img
              className="avatar-img"
              src="https://cdn.pixabay.com/photo/2014/04/02/17/07/user-307993_1280.png"
              alt="avatar"
            />

            <p>
              Contact me if you would like to collaborate on a project, talk
              about coding bootcamp life, or if you have an opportunity you
              think I would be a good fit for!
            </p>
          </Cell>

          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div>
              <List className="contact-list">
                <center>
                  <ListItem>
                    <ListItemContent className="contact-text">
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href="mailto:natalieegarate@hotmail.com?Subject=Hello%20again"
                        target="_blank"
                      >
                        <i className="fa fa-envelope" aria-hidden="true" />
                        <span className="contact-detail">
                          natalieegarate@hotmail.com
                        </span>
                      </a>
                    </ListItemContent>
                  </ListItem>

                  <ListItem>
                    <ListItemContent className="contact-text">
                      <a
                        href="https:/www.linkedin.com/in/natalie-garate"
                        style={{ textDecoration: "none", color: "black" }}
                        target="_blank"
                      >
                        <i
                          className="fa fa-linkedin"
                          aria-hidden="true"
                          rel="noopener noreferrer"
                        />
                        <span className="contact-detail">
                          linkedin.com/in/natalie-garate
                        </span>
                      </a>
                    </ListItemContent>
                  </ListItem>
                </center>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
