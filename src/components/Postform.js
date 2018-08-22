import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

import PropTypes from 'prop-types';

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

  onSubmitHandler = e => {
    e.preventDefault();

    const postData = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.createPost(postData);
  };

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmitHandler}>
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

Postform.propTypes = {
  createPost: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    createPost: (postData) => dispatch(createPost(postData))
  }
};

export default connect(null, mapDispatchToProps)(Postform);
