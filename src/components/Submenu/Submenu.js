import React from 'react'

import styles from './Submenu.module.css'

function Submenu({ label }) {
  return (
    <div className={styles.submenu}>
      <label>{label}</label>
    </div>
  )
}

export default Submenu
