import React from 'react'

import { navbar_links } from '../../utils/utils'

import styles from './Navbar.module.css'

import Submenu from '../Submenu'
import Link from '../Link/Link'

function Navbar() {

  // const [activeSubmenu1, setActiveSubmenu1] = React.useState(false);
  // const [activeSubmenu2, setActiveSubmenu2] = React.useState(false);
  // const [activeSubmenu3, setActiveSubmenu3] = React.useState(false);
  // const [activeSubmenu4, setActiveSubmenu4] = React.useState(false);
  // const [activeSubmenu5, setActiveSubmenu5] = React.useState(false);
  // const [activeSubmenu6, setActiveSubmenu6] = React.useState(false);
  // const [activeSubmenu7, setActiveSubmenu7] = React.useState(false);
  // const [activeSubmenu8, setActiveSubmenu8] = React.useState(false);
  
  const [activeSubmenu, setActiveSubmenu] = React.useState(null);

  const toggleSubmenu = (menuName) => {
    setActiveSubmenu((prev) => (prev === menuName ? null : menuName)); // Open clicked submenu and close others
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
              onClick={() => toggleSubmenu(label)}
            >
              {activeSubmenu === label && <Submenu label={label} />}
            </Link>
          ))}
        </ul>
    </div>
  )
}

export default Navbar
