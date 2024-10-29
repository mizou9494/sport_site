import React from 'react'

import styles from './TeamsInfo.module.css'
import TeamCard from '../TeamCard/TeamCard';

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

function extractObjectKeys(object) {
  let objectKeys = [];
  let objectsValues1 = []
  let objectsValues = []
  
  Object.keys(object).forEach(objectKey => {
    let value = object.objectKey
    if(typeof value !== 'object' || !objectKeys.includes(objectKey) || value === null) {
      objectKeys.push(objectKey)
    } else if (typeof value === 'object') {
      objectsValues.push(value)
      objectsValues1 = [...objectKeys, ...extractObjectKeys(value)]
    }
  })

  return objectKeys;
}

function flattenLeaguesInfos(infos) {
  // console.log("infos", infos) 
  let flattenedInfos = [];
  for (let i = 0; i < infos.length; i++) {
    flattenedInfos = ([...flattenedInfos, extractObjectKeys(infos[i])])
  }
  return flattenedInfos
}

export default function TeamsInfo() {
    let [detailedNBAStats, setDetailedNBAStats] = React.useState([])
    let [flattenedLeaguesInfos, setFlattenedLeaguesInfos] = React.useState([])
    let [defaultData, setDefaultData] = React.useState("")
  
    React.useEffect(() => {
      const fetchData = async () => {
        try { 
          const responses = await fetch(api_url, options);
          const { response } = await responses.json();
          if(!response) {
            setDefaultData("Failed to fetch data")
          }
          setDetailedNBAStats(response);

          console.log("response", response);
          const ourFlattenedLeaguesInfos = flattenLeaguesInfos(
            response.map(({ leagues }) => leagues)
          )
          setFlattenedLeaguesInfos(ourFlattenedLeaguesInfos)
          console.log("flattenedLeaguesInfos", flattenedLeaguesInfos) 
        } catch (error) {
          console.error('Error fetching data "HAMZA" :', error);
        }
      };
      fetchData()
    }, [])
    
    return (
      <div className={styles.wrapper}>
        {defaultData && <div>{defaultData}</div>}
        {detailedNBAStats?.map(({ id, name, nickname, city, logo  }) => {

          return <TeamCard key={id} id={id} name={name} nickname={nickname} logo={logo} city={city} />
        })}
    </div>
  )
}