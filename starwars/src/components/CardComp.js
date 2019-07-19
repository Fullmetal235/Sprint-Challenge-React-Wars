import React from 'react'
import { Card, Image } from 'semantic-ui-react'

 const CardComponent = ({name, birthDate, description}) => (
  <Card>
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
  </Card>
)

 export default CardComponent