import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import styled from 'styled-components'


const StyledCard = styled.div`
    border:1px solid black;
    width: 100%;
    background-color: white;
    border-radius: 5px;
    padding:2%;
    margin: 10%;
`;

const Container = ({name, birthDate, eyeColor, gender, hairColor, height}) => (

  <Card>
      <StyledCard>
    <Image src='' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className='date'>Birthdate: {birthDate}</span>
      </Card.Meta>
      <Card.Description>
        Character attributes:
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      
          <p>Eye Color: {eyeColor}</p>
          <p>Gender: {gender}</p>
          <p>Hair Color: {hairColor}</p>
          <p>Height: {height}</p>
        
    </Card.Content>
    </StyledCard>
  </Card>
)
export default Container