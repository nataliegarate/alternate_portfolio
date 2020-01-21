import React, { Component } from "react";
import { CardTitle, CardText, CardActions, Button, CardMenu } from "react-mdl";
let projects = [
  {
    name: "Best Cupcakes",
    description:
      "An E-Commerce that sells delicious cupcakes. It has a store inventory, shopping cart, and checkout feature.",
    technologies:
      "JavaScript, Node, React, Redux, Express, and Sequelize with PostgreSQL",
    imageUrl: "./BestCupcakes.png",
    imageAlt: "photo of cupcake website",
    link: "http://cupcake-shop-app.herokuapp.com/",
    github: "https://github.com/fantastic-four-grace-shopper/grace-shopper"
  },
  {
    name: "Music Mapper",
    description:
      "A data visualization website that displays a Spotify user’s musical preferences with various colorful graphs.",
    technologies:
      "Javascript, Node, d3, React, Redux, Express, Spotify API, and Musixmatch API",
    imageUrl: "./MusicMapper.png",
    imageAlt: "Photo of music website",
    link: "https://spotify-music-mapper.herokuapp.com",
    github: "https://github.com/music-mapper/music-mapper"
  },
  {
    name: "Name That Dog",
    description:
      "A drag and drop matching game for learning dog breeds. I had fun building this during a 4 day stackathon where the assignment was to experiment with a new technology.",
    technologies: "Javascript, Node, Vue, and Firebase",
    imageUrl: "./NameThatDog.png",
    imageAlt: "Photo of dog website",
    link: "http://dogapp.nataliegarate.com/#/",
    github: "https://github.com/nataliegarate/name-that-dog"
  },
  {
    name: "Gratitude Master",
    description:
      "A website that encourages users to track what makes them happy by providing an online journal space.",
    technologies:
      "JavaScript, Node, React, Redux, Express, and Sequelize with PostgreSQL",
    imageUrl: "./GratitudeMaster.png",
    imageAlt: "Photo of Gratitude Master website",
    link: "https://github.com/nataliegarate/gratitude-tracker",
    github: "https://github.com/nataliegarate/gratitude-master"
  }
];
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  render() {
    return (
      <div className='projects-page'>
      <center><h2>My Projects</h2></center>
      <div className="projects-container">
        {projects.map(project => (
          <div className="single-card">
            <img
              src={project.imageUrl}
              alt={project.imageAlt}
              style={{
                color: "#fff",
                height: "176px",
                boxSizing: "content-box"
              }}
            />
            <CardText>
              <center>{project.name} </center>
              <br />
              {project.description}
              <br />
              {project.technologies}
            </CardText>
            <CardActions>
              <Button colored>
                {" "}
                <a href={project.github}>Github</a>{" "}
              </Button>
              <Button colored>
                {" "}
                <a href={project.link}>Website</a>{" "}
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
          </div>
        ))}
      </div>
      </div>
    );
  }
}

{
  /* <CardTitle style={{color: "#fff", height: '176px', boxSizing: 'content-box', background: `url(${project.imageUrl})`}}></CardTitle> */
}

export default Projects;
