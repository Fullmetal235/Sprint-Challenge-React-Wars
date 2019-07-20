import React from 'react'
import Container from './Container.js'
import styled from 'styled-components'

const StyledCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
`;


function CardContainer(props){
    console.log(props)
    return (
        <StyledCardContainer>
        {props.person.map(character => (
            <Container key={character.name} character ={character} name={character.name} birthDate={character.birth_year} eyeColor={character.eye_color} gender={character.gender} hairColor={character.hair_color} height={character.height}/>
        ))}
        </StyledCardContainer>    
    )
}
export default CardContainer