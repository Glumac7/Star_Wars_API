import React, { Component } from 'react'
import './App.css';

export default class App extends Component {

  state = {
    api_data: [],
  }

  getImages() {
    fetch("https://swapi.co/api/people/1/?format=json")
      .then(res => res.json())
      .then(res => {
        
        

       

        /*for(let i = 50; i < 61; i++) 
        {
          allImgs.push(res.data.memes[i]);
        }*/
        
        this.setState({api_data: res});
console.log(this.state.api_data);

      });
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

  renderBooks() {

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
                    <td>Name: {this.state.api_data[0].name}</td>
                    <td>Name: {}</td>
                    
                  </tr>
                  <tr>
                    <td>Height: {this.state.api_data.height}</td>
                    <td>Rotation period: {}</td>
                    
                  </tr>
                  <tr>
                    <td>Mass: {}</td>
                    <td>Orbital period: {}</td>
                    
                  </tr>
                  <tr>
                    <td>Hair color: {}</td>
                    <td>Diameter: {}</td>
                    
                  </tr>
                  <tr>
                    <td>Skin color: {}</td>
                    <td>Climate: {}</td>
                    
                  </tr>
                  <tr>
                    <td>Eye color: {}</td>
                    <td>Gravity: {}</td>
                    
                  </tr>
                  <tr>
                    <td>Birth year: {}</td>
                    <td>Terrain: {}</td>
                    
                  </tr>
                  <tr>
                    <td>Gender</td>
                    <td>Surface water</td>
                    
                  </tr>
                  <tr>
                    <td>Homeworld</td>
                    <td>Population</td>
                    
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
                    <td>Name: {}</td>
                    <td>Name: {}</td>
                    
                  </tr>
                  <tr>
                    <td>Height: {this.state.api_data.height}</td>
                    <td>Rotation period: {}</td>
                    
                  </tr>
                  <tr>
                    <td>Mass: {}</td>
                    <td>Orbital period: {}</td>
                    
                  </tr>
                  <tr>
                    <td>Hair color: {}</td>
                    <td>Diameter: {}</td>
                    
                  </tr>
                  <tr>
                    <td>Skin color: {}</td>
                    <td>Climate: {}</td>
                    
                  </tr>
                  <tr>
                    <td>Eye color: {}</td>
                    <td>Gravity: {}</td>
                    
                  </tr>
                  <tr>
                    <td>Birth year: {}</td>
                    <td>Terrain: {}</td>
                    
                  </tr>
                  <tr>
                    <td>Gender</td>
                    <td>Surface water</td>
                    
                  </tr>
                  <tr>
                    <td>Homeworld</td>
                    <td>Population</td>
                    
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
            <div id="books">{this.renderBooks()}</div>

        </div>
      </div>
    )
  }
}
