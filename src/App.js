import React, { Component } from 'react'
import './App.css';

export default class App extends Component {

  state = {
    allImages: [],
  }

  getImages() {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(res => {
        
        var allImgs = [];

        for(let i = 50; i < 61; i++) 
        {
          allImgs.push(res.data.memes[i]);
        }
        
        this.setState({allImages: allImgs});


      });
  }

  renderFilter() {
    return (
        <div id="form">
          <div className="row">
            <div className="col s12">

                <div className="row">

                    <div className="input-field col s6 ">
                        <input id="people" type="text" className="validate" required></input>
                        <label htmlFor="name">People</label>
                        <button id="button" className="btn waves-effect waves-light" type="submit" name="action">ADD
                        </button>
                        
                    </div>

                    <div className="input-field col s6 ">
                        <input id="planets" type="text" className="validate" required></input>
                        <label htmlFor="name">Planets</label>
                        <button id="button" className="btn waves-effect waves-light" type="submit" name="action">SEARCH
                        </button>
                        
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

    return this.state.allImages.map((value, index, items) => {

      return ( 
        
        (items[index + 1]) ? (
          <div id="book-container" className="center-book">
            
              <div id="fragment">
                <img src={items[index].url} alt=""/>
                <h1>TITLE: {items[index].id}</h1>
                <div>
                  <p>WRITER: {items[index].name}</p>
                  <p>Genres: {items[index].name}</p>
                </div>
                <button onClick={this.deleteBook} id="button-delete" className="red btn waves-effect waves-light" type="submit" name="action">X</button>
              </div>
          

            </div>
        
      ) : (items[index + 1] === undefined && index % 2 === 0) ? (
         <div id="last-book">
          <div className="center-book" key={index}>
            <div id="fragment" key={items[index].id}>
              <img src={items[index].url} alt=""/>
              <h1>TITLE: {items[index].id}</h1>
              <div>
                <p>WRITER: {items[index].name}</p>
                <p>Genres: {items[index].name}</p>
              </div>
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
