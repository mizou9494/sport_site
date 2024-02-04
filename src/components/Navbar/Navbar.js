import React from 'react'

import { navbar_links } from '../../utils/utils'

import styles from './Navbar.module.css'

import Link from '../Link/Link'

function Navbar() {
 

  return (
    <div className={styles.wrapper}>
        <ul className={styles.navbar}>
            {navbar_links.map(({id, label}) => (
                <Link key={id}  id={id} label={label} />
            ))}
        </ul>
        {/* <hr/> */}
    </div>
  )
}

export default Navbar
