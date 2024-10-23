import React from 'react'

import { animated, useSpring } from 'react-spring';

function Boop({
    rotation = 0, 
    timing = 150, 
    scale = 1,
    x = 0,
    y = 0,
    children
}) {
    const [isBooped, setIsBooped] = React.useState(false)

    const style = useSpring({
        display: 'inline-block',
        backfaceVisibility: 'hidden',
        transform: isBooped
            ?  `scale(${scale})
                translate(${x}px, ${y}px)
                rotate(${rotation}deg)`
            :  `rotate(0deg)
                scale(1)
                translate(0px, 0px)`,
        config: {
            tension: 100,
            friction: 10
        }
            // transition: `transform ${timing}ms`
    });

    React.useEffect(() => {
        if(!isBooped) {
            return;
        }

        const timeoutId = window.setTimeout(() => {
            setIsBooped(false)
        }, timing)

        return () => {
            window.clearTimeout(timeoutId)
        }
    }, [isBooped, timing])

    const trigger = () => {
        setIsBooped(true)
    }

  return (
    <animated.span onMouseEnter={trigger} style={style}>
      {children}
    </animated.span>
  )
}

export default Boop
