import React, {useState, useEffect} from 'react'
import CardContainer from './CardContainer.js'
import axios from 'axios'

 function Card() {
    const [person, setPerson] = useState([])

    useEffect(() => {
        axios
        .get('https://swapi.co/api/people/?page=1')
        .then(response => {
            // console.log(response.data.results)
            // const persons = response.data.results
            setPerson(response.data.results)
            
        }).catch(error => {
            console.log('Not getting info from startwars api', error)
        })
    }, [])
        console.log(person)
    return (<div>
        
        <CardContainer person ={person}/>
    </div>)
}
export default Card
