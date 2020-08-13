import React, {Component} from 'react';

export default class Post extends Component {
  render() {
    return (
      <div className="post">
        <span className="label">{this.props.value.category}</span>
        <span className="content">{this.props.value.content}</span>
      </div>
    )
  }
}