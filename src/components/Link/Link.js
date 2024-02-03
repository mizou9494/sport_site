import React from 'react'

import { ChevronUp, ChevronDown } from 'react-feather'

function Link({ id, label }) {
    const [isClicked, setIsClicked] = React.useState(false)

    function handleLinkClicking() {
        if(isClicked) setIsClicked(false)
        else setIsClicked(true)
    }

  return (
    <li onClick={handleLinkClicking} key={id}>
        {isClicked ? <ChevronUp /> : <ChevronDown/>}
        {label}
    </li>
  )
}

export default Link