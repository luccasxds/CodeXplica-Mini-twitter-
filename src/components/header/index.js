import React from 'react';
import PropTypes from 'prop-types';
import { Header, Text } from './styles';

const Navbar = props => {
  function handleClick() {
    props.history.push('/');
  }

  return (
    <Header>
      <Text onClick={handleClick}>VC CODA</Text>
    </Header>
  );
};

Navbar.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Navbar;
