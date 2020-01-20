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
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent className="contact-text">
                    <i className="fa fa-envelope" aria-hidden="true" />
                    natalieegarate@hotmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent className="contact-text">
                    <i className="fa fa-linkedin" aria-hidden="true" />
                    linkedin.com/in/natalie-garate
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
