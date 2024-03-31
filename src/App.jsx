import React, { Fragment } from 'react';
import { Card } from './Card';
import { Wrapper } from './Wrapper';
import './styles.css';

export default function App() {
  return (
    <Fragment>
      <Wrapper>
        <Card />
      </Wrapper>
    </Fragment>
  );
}
