import React from 'react'

import { navbar_links } from '../../utils/utils'

import styles from './Navbar.module.css'

import Submenu from '../Submenu'
import Link from '../Link/Link'

function Navbar() {
  
  const [activeSubmenu, setActiveSubmenu] = React.useState(null);

  const toggleSubmenu = (menuName) => {
    setActiveSubmenu((prev) => (prev === menuName ? null : menuName)); // Open clicked submenu and close others
  };

  return (
    <div className={styles.wrapper}>
        <Link label={"Home"}></Link>
        <ul className={styles.navbar}>
          {navbar_links.map(({id, label}) => (
            <Link 
              key={id} 
              id={id} 
              activeSubmenu 
              label={label} 
              onClick={() => toggleSubmenu(label)}
            >
              {activeSubmenu === label && <Submenu label={label} />}
            </Link>
          ))}
        </ul>
        <Link label={"Search"}></Link>
    </div>
  )
}

export default Navbar
