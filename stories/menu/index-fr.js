import React from 'react';
import PropTypes from 'prop-types';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.printElement = this.printElement.bind(this);
  }

  printElement(element) {
    return  element.map(e => (
      <ul>
        <li>
          <span>{e.label}</span>
          {e.list && this.printElement(e.list)}
        </li>
      </ul>
    ));
  }

  render () {
    return (
      <div>
        {this.printElement(this.props.list)}
      </div>
    );
  };
}

Menu.propTypes = {
  list: PropTypes.array.isRequired,
};

export default Menu;