import React from 'react';
import PropTypes from 'prop-types';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: true,
    };

    this.printElement = this.printElement.bind(this);
    this.handlerClicked = this.handlerClicked.bind(this);
  }

  handlerClicked() {
    this.setState({ clicked: false });
  }

  printElement(element) {
    return  element.map(e => (
      <ul className={`${this.state.clicked ? 'clicked': '' }`}>
        <li>
          <span onClick={this.props.action(this.handlerClicked)} >{e.label}</span>
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