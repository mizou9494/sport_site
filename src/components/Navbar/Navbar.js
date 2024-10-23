import React from 'react'

import { navbar_links } from '../../utils/utils'

import styles from './Navbar.module.css'

import Submenu from '../Submenu'
import Link from '../Link/Link'

function Navbar() {

  const [activeSubmenu, setActiveSubmenu] = React.useState(null);

  const toggleSubmenu = (menuId) => {
    setActiveSubmenu((prev) => (prev === menuId ? null : menuId)); // Open clicked submenu and close others
  };

  return (
    <div className={styles.wrapper}>
        <ul className={styles.navbar}>
          {navbar_links.map(({id, label}) => (
            <Link 
              key={id} 
              id={id} 
              activeSubmenu 
              label={label} 
              onClick={() => toggleSubmenu(id)}
            >
              {activeSubmenu === id && <Submenu label={label} />}
            </Link>
          ))}
        </ul>
    </div>
  )
}

export default Navbar
