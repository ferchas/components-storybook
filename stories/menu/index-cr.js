import React from 'react';
import PropTypes from 'prop-types';

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return  this.props.list.map(e => (
      <ul>
        <li>
          <span>{e.label}</span>
          {e.list && <Menu list={e.list} />}
        </li>
      </ul>

    ));
  };
}

Menu.propTypes = {
  list: PropTypes.array.isRequired,
};

export default Menu;