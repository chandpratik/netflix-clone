import React from 'react';
import { Container, Inner } from './styles/jumbotron';
const Jumbotron = ({ children, direction = 'row', ...restProps }) => {
  return (
    <Inner direction={direction}>
      <p>I am the Jumbo!</p>
    </Inner>
  );
};

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}> {children}</Container>;
};

export default Jumbotron;
