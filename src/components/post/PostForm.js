import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

//says we need purecomponent thus a class because were going to save the local form state inside of state??

//make form here, then bring it in to high level component that create submit handlers?
//guessing we then call it in app?
export default class PostForm extends PureComponent{
  static propTypes= {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    title: '',
    body: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  handleSubmit = event => {
    event.preventDefault();
    //returning title and body so that when we submit the form, we can grab the state and then pass it along to Posts to make a post 
    const { title, body } = this.state;

    //buttons is clicked. which calls onSubmit, onSubmit dispatches the addPost action, which is handled in store.js
    this.onSubmit(title, body);
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          Create A Post:
          <input name="title" value={this.state.title} onChange={this.handleChange} />
          <textarea name="body" value={this.state.body} onChange={this.handleChange}></textarea>
          <button>Submit</button>
        </form>
      </>
    );
  }
}

