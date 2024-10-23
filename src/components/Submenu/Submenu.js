import React from 'react'

import styles from './Submenu.module.css'
import { categories } from '../../utils/utils'

function Submenu({ label }) {
  const menuList = categories[label]

  return (
    <div className={styles.submenu}>
      <div className={styles.container}>
        <strong className={styles.strongTitle}>{label}</strong>
        <ul>
        {menuList.map((item) => (
            <li key={item}> {item} </li>
        ))}
        </ul>
      </div>
    </div>
  )
}

export default Submenu
