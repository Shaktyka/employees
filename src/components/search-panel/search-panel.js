import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  changeHandler = (evt) => {
      const term = evt.target.value;
      this.setState({term});
      this.props.onUpdateSearch(term);
  }

  render() {
      const {term} = this.state;

      return (
        <input type="text"
            value={term}
            className="form-control search-input"
            placeholder="Найти сотрудника"
            onChange={this.changeHandler}
        />
      );
  }
};

export default SearchPanel;
