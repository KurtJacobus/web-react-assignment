import React, { Component } from "react";
import "../index.css";
import { v4 as uuidv4 } from "uuid";
const axios = require("axios").default;
const API_URL = "http://localhost:8080";

export default class Recipes extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeBeanType = this.onChangeBeanType.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeBrewMethod = this.onChangeBrewMethod.bind(this);
    this.onChangeBrewTime = this.onChangeBrewTime.bind(this);
    this.onChangeTasteNotes = this.onChangeTasteNotes.bind(this);
    this.onChangeTags = this.onChangeTags.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      id: uuidv4(),
      title: "",
      bean_type: "",
      description: "",
      brew_method: "",
      brew_time: 0,
      taste_notes: "",
      tags: "",
      views: 0,
      brewer_id: uuidv4(),
      name: "",
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeBeanType(e) {
    this.setState({
      bean_type: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeBrewMethod(e) {
    this.setState({
      brew_method: e.target.value,
    });
  }

  onChangeBrewTime(e) {
    this.setState({
      brew_time: e.target.value,
    });
  }

  onChangeTasteNotes(e) {
    this.setState({
      taste_notes: e.target.value,
    });
  }

  onChangeTags(e) {
    this.setState({
      tags: e.target.value,
    });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const recipes = {
      // name: this.state.name,
      title: this.state.title,
      description: this.state.description,
      bean_type: this.state.bean_type,
      brew_time: this.state.brew_time,
      brew_method: this.state.brew_method,
      taste_notes: this.state.taste_notes,
      tags: this.state.tags,
      // id: this.state.id,
      // views: this.state.views,
      // brewer_id: this.state.brewer_id
    };
    
    console.log(recipes);

    const name = {
      name: this.state.name,
      id: this.state.id,
    };
    
    console.log(name);

    // Having challenges with posting the recipe object to the db, 
    // when i console log in the Brewers component after submitting the form
    // i can see the objects name and id but the recipe array is empty, this is where my challenge is.
    axios
      .post(`${API_URL}/brewers/`, name)
      .then((res) => console.log(res.data))
      .catch((error) => {
        // handle error
        console.log(error);
      });

      axios
      .post(`${API_URL}/brewers/${this.brewer_id}`, recipes)
      .then((res) => console.log(res.data))
      .catch((error) => {
        // handle error
        console.log(error);
      });

    window.location = "/";
  }
  // Input fields for recipe
  render() {
    return (
      <div className="recipe">
        <h3>Create New Recipe</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
            <label>Title: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
            <label>Description: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
            <label>Bean Type: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.bean_type}
              onChange={this.onChangeBeanType}
            />

            <label>Brew Method: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.brew_method}
              onChange={this.onChangeBrewMethod}
            />
            <label>Brew Time: </label>
            <input
              type="number"
              required
              className="form-control"
              value={this.state.brew_time}
              onChange={this.onChangeBrewTime}
            />
            <label>Taste Notes: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.taste_notes}
              onChange={this.onChangeTasteNotes}
            />
            <label>Tags: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.tags}
              onChange={this.onChangeTags}
            />
          </div>
          <div className="form-group">
            <button>Create new recipe</button>
          </div>
        </form>
      </div>
    );
  }
}
