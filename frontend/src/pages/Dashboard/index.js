import React, {useEffect, useState} from 'react' ;
import {Link} from 'react-router-dom'
import api from '../../services/api'
import './styles.css'


export default function Dashboard(){
    const[spots, setSpots] = useState([])

    useEffect(() =>{
        async function loadSpots(){
            const user_id = localStorage.getItem('user')
            const response = await api.get('./dashboard', {
                headers: {user_id}
            })

            setSpots(response.data)
        }

        loadSpots()
    } , []) /*1 param eh a funcao a ser executada e o 
                                2 param eh e quando que eh executada 
                                (eh tipo o email do login) */ 
    
    return(
        <>
            <ul className="spot-list">
                {spots.map( spot => (
                    <li key={spot._id}>
                        <header style={{ backgroundImage: `url(${spot.thumbnail_url})`}}/>
                        <strong>{spot.company}</strong>
                        <span>{spot.price? `R$${spot.price}/dia`: `GRATUITO`}</span>
                    </li>
                ))}
            </ul>
            <Link to="/new">
                <button className = "btn">Cadastrar novo Spot</button>
            </Link>
        </>
    ) 
}
