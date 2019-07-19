import React, {useState, useEffect} from 'react'
import axios from 'axios'

 function Card() {
    const [person, setPerson] = useState('')

     useEffect(() => {
        axios
        .get('https://swapi.co/api/people/')
        .then(response => {
           const persons = response.data.results
            setPerson(persons)
            console.log(persons)
        }).catch(error => {
            console.log("They shot into the exhaust of the Death Star!", error)
        })
    }, [])
    return <div>
    <CardComponent />
</div>
}
export default Card
