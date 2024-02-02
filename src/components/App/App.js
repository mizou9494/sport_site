import React from 'react';
import Feed from '../Feed/Feed';
import Navbar from '../Navbar/Navbar';

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