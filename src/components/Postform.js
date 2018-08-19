import React, { Component } from 'react';

class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
  }

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.onChangeHandler}
          />
          <label>Body</label>
          <textarea
            name="body"
            value={this.state.body}
            onChange={this.onChangeHandler}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Postform;
