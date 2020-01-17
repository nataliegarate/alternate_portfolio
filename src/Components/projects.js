import React, { Component } from "react";
import { CardTitle, CardText, CardActions, Button, CardMenu } from 'react-mdl'
let projects = [ {name: 'Best Cupcakes', description:'An E-Commerce that sells delicious cupcakes. It has a store inventory, shopping cart, and checkout feature.', technologies: 'JavaScript, Node, React, Redux, Express, and Sequelize with PostgreSQL', imageUrl:"./BestCupcakes.png", imageAlt: 'photo of cupcake website', link: 'http://cupcake-shop-app.herokuapp.com/'},
  {name: 'Music Mapper', description: 'A data visualization website that displays a Spotify user’s musical preferences with various colorful graphs.', technologies: 'Javascript, Node, d3, React, Redux, Express, Spotify API, and Musixmatch API', imageUrl: './MusicMapper.png', imageAlt: 'Photo of music website', link: 'https://spotify-music-mapper.herokuapp.com'},
  {name: 'Name That Dog', description: 'A drag and drop matching game for learning dog breeds. I had fun building this during a 4 day stackathon where the assignment was to experiment with a new technology.', technologies: 'Javascript, Node, Vue, and Firebase', imageUrl: './NameThatDog.png', imageAlt: 'Photo of dog website', link: 'http://dogapp.nataliegarate.com/#/'},
  {name: 'Gratitude Master', description: 'A website that encourages users to track what makes them happy by providing an online journal space.', technologies: 'JavaScript, Node, React, Redux, Express, and Sequelize with PostgreSQL', imageUrl:"./GratitudeMaster.png", imageAlt: 'Photo of Gratitude Master website', link: 'https://github.com/nataliegarate/gratitude-tracker'}
 ]
class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {activeTab : 0}
  }
  render() {
    return <div className="projects-container">
      {projects.map( project => (
      <div className ='single-card'>
        <CardTitle style={{color: "#fff", height: '176px', boxSizing: 'content-box', background: `url(${project.imageUrl})`}}></CardTitle>
      <CardText>{project.description}<br/>{project.technologies}</CardText>
        <CardActions>
          <Button colored> GitHub</Button>
          <Button colored> Website</Button>
        </CardActions>
        <CardMenu style = {{color: '#fff'}}>
        </CardMenu>
      </div>     
      ))}
    </div>;
  }
}

export default Projects;
