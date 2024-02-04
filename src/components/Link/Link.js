import React from 'react'

import * as Tooltip from '@radix-ui/react-tooltip'
import { ChevronUp, ChevronDown } from 'react-feather'

import Submenu from '../Submenu'

function Link({ id, label }) {
    const [isHovered, setIsHovered] = React.useState(false)

    function handleLinkHoverEnter() {
        if(isHovered){
            setIsHovered(false)
        } else {
            setIsHovered(true)
        } 
    }
  return (
    <li 
        onMouseEnter={handleLinkHoverEnter} 
        onMouseLeave={() => setIsHovered(false)} 
        label={label}
        key={id} 
    >
        {label}
        {isHovered ? <ChevronUp /> : <ChevronDown/>}
        {isHovered && <Submenu label={label} />}
    </li>
  )
}

export default Link