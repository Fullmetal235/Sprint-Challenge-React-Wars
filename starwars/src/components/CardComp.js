import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import styled from 'styled-components'

const StyledCard = styled.div`
    border:1px solid black;
    width: 100%;
    background-color: white;
    border-radius: 5px;
`;

 const CardComponent = ({name, birthDate, description}) => (
    <Card>
    <StyledCard>
  <Image src='' wrapped ui={false} />
  <Card.Content>
    <Card.Header>{name}</Card.Header>
    <Card.Meta>
      <span className='date'>Birthdate: {birthDate}</span>
    </Card.Meta>
    <Card.Description>
      {description}
    </Card.Description>
  </Card.Content>
  <Card.Content extra>
    <a>
    </a>
  </Card.Content>
  </StyledCard>
</Card>
)

 export default CardComponent