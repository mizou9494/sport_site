import React from 'react'

import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper'
import styled from 'styled-components'
import TeamsInfo from '../TeamsInfo/TeamsInfo'

function Feed() {
  return (
    <MaxWidthWrapper>
      <Wrapper>
        <Advertisement> 
          <h1>Advertisement</h1>
        </Advertisement>
        <Sidebar />
        <TeamsInfo />
      </Wrapper>
    </MaxWidthWrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'sidebar advertisement advertisement'
    'sidebar main main'
    'sidebar main main';
  grid-template-columns: 1fr 1fr 1fr;
`;

const Sidebar = styled.div`
  grid-area: sidebar;
  background-color: rgb(175, 216, 216);
`;

const Advertisement = styled.div`
  border: 3px solid hsla(2, 65%, 48%, 0.75);
  border-radius: 10px;
  background: #999999;
  height: 200px;
  grid-area: advertisement;
  display: grid;
  place-content: center;

  h1 {
    color: white;
  }
`;

export default Feed
