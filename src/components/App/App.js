import React from 'react';
import Feed from '../Feed/Feed';
import Navbar from '../Navbar/Navbar';

import styled from 'styled-components'
import {X as Close} from 'react-feather'

import styles from './App.module.css'

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Feed />
      <StickyButton>
        <Close size={100} color='blue' />
      </StickyButton>
    </div>
  );
}

const StickyButton = styled.section`
  width: fit-content;
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 1;
`

export default App;