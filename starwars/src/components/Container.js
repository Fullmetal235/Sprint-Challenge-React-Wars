import React from 'react'
import CardComponent from './CardComp.js'
import styled from 'styled-components'

const StyledCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

function Container(props){
    console.log(props)
    return (
        <StyledCardContainer>
        {props.person.map(character => (
            <CardComponent key={character.name} character ={character} name={character.name} birthDate={character.birth_year}/>
        ))}
        </StyledCardContainer>    
    )
}
export default Container