import React, { Component } from 'react'
import './App.css';

class App extends Component {
  
  state = {
    api_data: [],
    searchPerson: "",
    searchPlanet: ""
  }

  async getImages() {
    
    var finale_push = [];

    for(var i = 1; i <= 88; i++)
    {
    await fetch("https://swapi.co/api/people/" + i + "/?format=json")
      .then(res_rest => res_rest.json())
      .then(async (res_rest) => {
        if(res_rest.detail !== "Not found")
        {
          
          var person_and_planet = [];
          person_and_planet.push(res_rest);

          var fetch_planet = res_rest.homeworld + "?format=json";

          await fetch(fetch_planet)
            .then(res_planet => res_planet.json())
            .then(res_planet => {

              person_and_planet.push(res_planet);
              finale_push.push(person_and_planet);

            })
        }
          
      }).then(() => {
        this.setState({api_data: finale_push})
      });
    }
  }
  
  handleSearch = () => {
    var name = document.getElementById("name").value;
    var planet = document.getElementById("planet").value;

    if(name === "" && planet === "")
    {
      alert("Name and Planet are empty!");
    }

    else if(name === "")
    {
      this.setState({searchPlanet: document.getElementById("planet").value});
    }
    else if(planet === "")
    {
      this.setState({searchPerson: document.getElementById("name").value});
    }
  }

  renderFilter() {
    return (
        <div id="form">
          <div className="row">
            <div className="col s12">

                <div className="row">

                    <div className="input-field col s6">
                        <input id="name" type="text" className="validate"></input>
                        <label htmlFor="name">Person's name</label>
                    </div>

                    <div className="input-field col s6">
                        <input id="planet" type="text" className="validate"></input>
                        <label htmlFor="name">Planet's name</label>
                    </div>
                    
                </div>

                <button onClick={this.handleSearch} id="button" className="btn waves-effect waves-light" type="submit" name="action"><b>SEARCH</b></button>
            </div>
        </div>
        </div>
    )
  }

  deleteBook(e) {
    e.target.parentNode.parentNode.style.display = "none";
  }

  renderCards() {

    var {searchPerson, searchPlanet} = this.state;

    var filterAll = [];

    var filterName = this.state.api_data.filter((item) => {
      
      if(item[0].name.toLowerCase().indexOf(searchPerson.toLowerCase()) !== -1)
      {
        console.log(item[0].name + "---" + searchPerson);
        filterAll.push(item);
        
       
      }
        
    })
    console.log(filterAll);
    
    return filterAll.map((item, index) => {
console.log("ASDASDAS " + index);
      return ( 
        
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
                    <td>Name: <p>{item[0].name}</p></td>
                    <td>Name: <p>{item[1].name}</p></td>
                    
                  </tr>
                  <tr>
                    <td>Height: <p>{item[0].height}</p></td>
                    <td>Rotation period: <p>{item[1].rotation_period}</p></td>
                    
                  </tr>
                  <tr>
                    <td>Mass: <p>{item[0].mass}</p></td>
                    <td>Orbital period: <p>{item[1].orbital_period}</p></td>
                    
                  </tr>
                  <tr>
                    <td>Hair color: <p>{item[0].hair_color}</p></td>
                    <td>Diameter: <p>{item[1].diameter}</p></td>
                    
                  </tr>
                  <tr>
                    <td>Skin color: <p>{item[0].skin_color}</p></td>
                    <td>Climate: <p>{item[1].climate}</p></td>
                    
                  </tr>
                  <tr>
                    <td>Eye color: <p>{item[0].eye_color}</p></td>
                    <td>Gravity: <p>{item[1].gravity}</p></td>
                    
                  </tr>
                  <tr>
                    <td>Birth year: <p>{item[0].birth_year}</p></td>
                    <td>Terrain: <p>{item[1].terrain}</p></td>
                    
                  </tr>
                  <tr>
                    <td>Gender: <p>{item[0].gender}</p></td>
                    <td>Surface water: <p>{item[1].surface_water}</p></td>
                    
                  </tr>
                  <tr>
                    <td>Homeworld: <p>{item[1].name}</p></td>
                    <td>Population: <p>{item[1].population}</p></td>
                    
                  </tr>
                  
                </tbody>

              </table>

              <button onClick={this.deleteBook} id="button-delete" className="red btn waves-effect waves-light" type="submit" name="action">X</button>
            </div>
          

          </div>
        
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

export default App;