import React from 'react'

import styles from './TeamsInfo.module.css'

const api_url = 'https://api-nba-v1.p.rapidapi.com/teams'

const myHeader = {
  'X-RapidAPI-Key': '937132fc89mshac1172e9ce9980ap1f7f79jsn98ababcec47d',
  'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
} 

const options = {
  method: 'GET',
  mode: 'cors',
  headers: myHeader,
  params: {conference: 'East'},
};

function TeamsInfo() {
    let [detailedStats, setDetailedStats] = React.useState([])
  
    React.useEffect(() => {
      const fetchData = async () => {
        try {
          const responses = await fetch(api_url, options);
          const {response} = await responses.json()
          console.log('API response:', response);
          setDetailedStats(response);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData()
    }, [])

  return (
    <div className={styles.wrapper}>
      {detailedStats?.map(({ id, name, nickname, city, logo  }) => (
        <div 
          key={id}
          className={styles.infos} 
        >
          <p>The logo of the club is this :
            <img alt='club-logo' src={logo} />
          </p> 
          <p>name: <strong>{name}</strong></p>
          <p>nickname: {nickname}</p>
          <p>city: {city}</p>
        </div>
      ))}
    </div>
  )
}

export default TeamsInfo
