import React, { Component } from 'react'
import './App.css';

export default class App extends Component {

  state = {
    api_data: [],
  }

  async getImages() {
    
    var finale_push = [];
    for(var i = 1; i < 9; ++i)
    {

      await fetch("https://swapi.co/api/people/" + i + "?format=json")
        .then(res_rest => res_rest.json())
        .then(async (res_rest) => {
          
          var person_and_planet = [];
          person_and_planet.push(res_rest);

          var fetch_planet = res_rest.homeworld + "?format=json";

           await fetch(fetch_planet)
            .then(res_planet => res_planet.json())
            .then(res_planet => {

              person_and_planet.push(res_planet);
              finale_push.push(person_and_planet);

            })
            
            
        }).then(rss => {
          this.setState({api_data: finale_push})
          console.log(this.state)
        });
        
    }
  }
  
  handleAdd() {
    var name = document.getElementById("name").value;
    var planet = document.getElementById("planet").value;

    if(name === "")
    {
      console.log("name is empty");

      if(planet === "")
      {
        console.log("Planet is empty");
      }
    }
    
    else if(planet === "")
    {
      console.log("Planet is empty");
    }

  }

  renderFilter() {
    return (
        <div id="form">
          <div className="row">
            <div className="col s12">

                <div className="row">

                    <div className="input-field col s6 ">
                        <input id="name" type="text" className="validate"></input>
                        <label htmlFor="name">Name</label>
                        <button onClick={this.handleAdd} id="button" className="btn waves-effect waves-light" type="submit" name="action">ADD</button>
                        
                    </div>

                    <div className="input-field col s6 ">
                        <input id="planet" type="text" className="validate"></input>
                        <label htmlFor="name">Planet</label>
                        <button id="button" className="btn waves-effect waves-light" type="submit" name="action">SEARCH</button>
                        
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
    )
  }

  deleteBook(e) {
    e.target.parentNode.parentNode.style.display = "none";
  }

  renderCards() {

    return this.state.api_data.map((value, index, items) => {

      return ( 
        
        (items[index + 1]) ? (
          <div id="book-container" key={index} className="center-book">
            
            <div id="fragment">
              <table id="table-container" className="striped">
              <thead>
                  <tr>
                      <th>Person</th>
                      <th>Planet</th>
                      
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Name: <p>{this.state.api_data[index][0].name}</p></td>
                    <td>Name: <p>{this.state.api_data[index][1].name}</p></td>
                    
                  </tr>
                  <tr>
                    <td>Height: <p>{this.state.api_data[index][0].height}</p></td>
                    <td>Rotation period: <p>{this.state.api_data[index][1].rotation_period}</p></td>
                    
                  </tr>
                  <tr>
                    <td>Mass: <p>{this.state.api_data[index][0].mass}</p></td>
                    <td>Orbital period: <p>{this.state.api_data[index][1].orbital_period}</p></td>
                    
                  </tr>
                  <tr>
                    <td>Hair color: <p>{this.state.api_data[index][0].hair_color}</p></td>
                    <td>Diameter: <p>{this.state.api_data[index][1].diameter}</p></td>
                    
                  </tr>
                  <tr>
                    <td>Skin color: <p>{this.state.api_data[index][0].skin_color}</p></td>
                    <td>Climate: <p>{this.state.api_data[index][1].climate}</p></td>
                    
                  </tr>
                  <tr>
                    <td>Eye color: <p>{this.state.api_data[index][0].eye_color}</p></td>
                    <td>Gravity: <p>{this.state.api_data[index][1].gravity}</p></td>
                    
                  </tr>
                  <tr>
                    <td>Birth year: <p>{this.state.api_data[index][0].birth_year}</p></td>
                    <td>Terrain: <p>{this.state.api_data[index][1].terrain}</p></td>
                    
                  </tr>
                  <tr>
                    <td>Gender: <p>{this.state.api_data[index][0].gender}</p></td>
                    <td>Surface water: <p>{this.state.api_data[index][1].surface_water}</p></td>
                    
                  </tr>
                  <tr>
                    <td>Homeworld: <p>{this.state.api_data[index][1].name}</p></td>
                    <td>Population: <p>{this.state.api_data[index][1].population}</p></td>
                    
                  </tr>
                  
                </tbody>

              </table>

              <button onClick={this.deleteBook} id="button-delete" className="red btn waves-effect waves-light" type="submit" name="action">X</button>
            </div>
          

          </div>
        
      ) : (items[index + 1] === undefined && index % 2 === 0) ? (
         <div key={index} id="last-book">
          <div className="center-book" key={index}>
            <div id="fragment" key={items[index].id}>
              
              <table id="table-container" className="striped">
                <thead>
                  <tr>
                      <th>Person</th>
                      <th>Planet</th>
                      
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Name: <p>{this.state.api_data[index][0].name}</p></td>
                    <td>Name: <p>{this.state.api_data[index][1].name}</p></td>
                    
                  </tr>
                  <tr>
                    <td>Height: <p>{this.state.api_data[index][0].height}</p></td>
                    <td>Rotation period: <p>{this.state.api_data[index][1].rotation_period}</p></td>
                    
                  </tr>
                  <tr>
                    <td>Mass: <p>{this.state.api_data[index][0].mass}</p></td>
                    <td>Orbital period: <p>{this.state.api_data[index][1].orbital_period}</p></td>
                    
                  </tr>
                  <tr>
                    <td>Hair color: <p>{this.state.api_data[index][0].hair_color}</p></td>
                    <td>Diameter: <p>{this.state.api_data[index][1].diameter}</p></td>
                    
                  </tr>
                  <tr>
                    <td>Skin color: <p>{this.state.api_data[index][0].skin_color}</p></td>
                    <td>Climate: <p>{this.state.api_data[index][1].climate}</p></td>
                    
                  </tr>
                  <tr>
                    <td>Eye color: <p>{this.state.api_data[index][0].eye_color}</p></td>
                    <td>Gravity: <p>{this.state.api_data[index][1].gravity}</p></td>
                    
                  </tr>
                  <tr>
                    <td>Birth year: <p>{this.state.api_data[index][0].birth_year}</p></td>
                    <td>Terrain: <p>{this.state.api_data[index][1].terrain}</p></td>
                    
                  </tr>
                  <tr>
                    <td>Gender: <p>{this.state.api_data[index][0].gender}</p></td>
                    <td>Surface water: <p>{this.state.api_data[index][1].surface_water}</p></td>
                    
                  </tr>
                  <tr>
                    <td>Homeworld: <p>{this.state.api_data[index][1].name}</p></td>
                    <td>Population: <p>{this.state.api_data[index][1].population}</p></td>
                    
                  </tr>
                  
                </tbody>

              </table>

              <button onClick={this.deleteBook} id="button-delete" className="red btn waves-effect waves-light" type="submit" name="action">X</button>
              
            </div>
          </div>
          </div>
      ) : null
      
      )
      
    });
    
  }

  componentDidMount() {
    this.getImages();
  }

  render() {
    return (
      <div id="Have-component">
        <div className="container text-center" id="books-container">
            
            <div className="row" id="filter">{this.renderFilter()}</div>
            <div id="books">{this.renderCards()}</div>

        </div>
      </div>
    )
  }
}
