import React from 'react';

import styles from './TeamsInfo.module.css'

function TeamCard({ id, name, nickname, city, logo }) {
  return (
    <div 
      key={id}
      className={styles.infoBlock} 
    >
      <div className={styles.upperPart}>
        <img alt='club-logo' src={logo} />
        <p>name:{' '}<strong>{name}</strong></p>
      </div> 
      <div className={styles.lowerPart}>   
        <p>nickname:{' '}<strong>{nickname}</strong></p>
        <p>city:{city}</p>
        <p className={styles.description}><strong>Description:</strong> lorem ipsum something is written just as a bowler plate text to see the display of grid in this Team card section lorem ipsum something is written just a bowler plate text to see the display of grid in this Team card section </p>
      </div>
    </div>
  )
}

export default TeamCard;
