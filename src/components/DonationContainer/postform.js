import React, {Component} from 'react';

const categories = ['$1.00', '$5.00', '$10', '$20'];

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.props.onSubmit({
      category: this.category.value,
      content: this.content.value
    });
    this.category.value = categories[0];
    this.content.value = '';
    event.preventDefault();
  }

  render() {
    return (
      <div className="post-form">
        <form onSubmit={this.handleSubmit}>
          <label>
            Amount:
            <select ref={(input) => this.category = input}>
              {categories.map((category, index) =>
                <option key={category} value={category}>{category}</option>
              )}
            </select>
          </label>
          <label>
            Charity:
            <input type="text" ref={(input) => this.content = input} />
          </label>
          <button className="button">Submit</button>
        </form>
        <form onSubmit = {localStorage.clear()}>
          <button className="button">clear</button>
        </form>
      </div>
    )
  }
}