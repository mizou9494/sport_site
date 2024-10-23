import React from 'react'

// import * as Tooltip from '@radix-ui/react-tooltip'
import { ChevronUp, ChevronDown, Search, X } from 'react-feather'

import Boop from '../../effects/Boop'

import styles from './Link.module.css'

import Submenu from '../Submenu'

function Link({ id, label, activeSubmenu, onClick, children }) {
    // const [isClicked, setIsClicked] = React.useState(false)


    // Function to toggle submenu visibility
    
    // function handleLinkClick() {
    //     setIsClicked(!isClicked) 
    // }

    if( label === "Home" ) {
        return (
            <li style={{ paddingInlineEnd: '15px' }}>
                {label}
            </li>
        )
    }
 
    if( label === "Search" ) {
        return (
            <li className={styles.search}>
                <label>{label}</label>
                <Boop rotation={90} timing={100}>
                    <Search color='limegreen' strokeWidth={2.5} style={{ marginLeft:'10px' }} />
                </Boop>
            </li>
        )
    }
    
  return (
    <li 
        className={styles.link}
        label={label} 
        onClick={onClick}
    >   
        <label>{label}</label>
        {activeSubmenu   
            ? 
                <ChevronUp 
                    strokeWidth={1.5} 
                    // style={{ 
                    //     transform: activeSubmenu === id  ? `rotate(0deg)` : `rotate(180deg)`, 
                    //     transition: 'transform 250ms' 
                    // }} 
                /> 
            : 
                <ChevronDown 
                    strokeWidth={1.5} 
                    // style={{ 
                    //     transform: !activeSubmenu === id  ? 'rotate(180deg)' : 'rotate(0deg)', 
                    //     transition: 'transform 250ms' 
                    // }} 
                />
        }
        {children}
    </li>
  )
}

export default Link