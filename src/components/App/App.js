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
    </div>
  );
}

export default App;