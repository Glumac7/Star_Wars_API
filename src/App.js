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

    this.setState({searchPlanet: planet});
    this.setState({searchPerson: name});
    
  }

  renderFilter() {
    return (
        <div id="form">
          <div className="row">
            <div className="col s12">

                <div className="row">

                    <div className="input-field col s6">
                        <input onChange={this.handleSearch} id="name" type="text" className="validate"></input>
                        <label htmlFor="name">Person's name</label>
                    </div>

                    <div className="input-field col s6">
                        <input onChange={this.handleSearch} id="planet" type="text" className="validate"></input>
                        <label htmlFor="name">Planet's name</label>
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
    var {searchPerson, searchPlanet} = this.state;

    var filterAll = [];

    this.state.api_data.filter((item) => {

      var person_true = item[0].name.toLowerCase().indexOf(searchPerson.toLowerCase()) !== -1;
      var planet_true = item[1].name.toLowerCase().indexOf(searchPlanet.toLowerCase()) !== -1;
      

      if(this.state.searchPerson === "" && this.state.searchPlanet === "")
      {
        filterAll.push(item);
      }

      else if(this.state.searchPlanet === "")
      {
        if(person_true)
        {
          filterAll.push(item);
        }
      }

      else if(this.state.searchPerson === "")
      {
        if(planet_true)
        {
          filterAll.push(item);
        }
      }
     
      else if(planet_true && person_true)
      {
        filterAll.push(item);
      }
      
      return 0;
    })
    
    return filterAll.map((item, index) => {
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
      <div id="Card-component">
        <div className="container text-center" id="cards-container">
            
            <div className="row" id="filter">{this.renderFilter()}</div>
            <div id="cards">{this.renderCards()}</div>

        </div>
      </div>
    )
  }
}

export default App;