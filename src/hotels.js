import { useState } from 'react';
import './App.css';
import { dataTwo } from './dataTwo'; 
import './App.css';

function Hotels() {
    const [hotel, setHotel] = useState(0);
    const {id, hotely, image, description} = dataTwo[hotel];

    const previousHotel = () =>{
        setHotel((hotel =>{
            hotel --;
            if (hotel < 0){
                return dataTwo.length-1;
            }
            return hotel;
        }))
    }

    const nextHotel = () =>{
        setHotel((hotel => {
            hotel ++;
            if(hotel > dataTwo.length-1){
                hotel = 0;
            }
            return hotel;
        }))
    }


    return(
        <div className='container two'>
            <h1>Hotels to stay in Rome</h1>
            <h2>{id}. {hotely}</h2>

            <div claassName='container'>
                <img src={image} width='700px' alt="Hotel"/>
            </div>

            <div className='container'>
                <p>{description}</p>
            </div>

            <div>
                <button className='btn three' onClick = {previousHotel}>Previous</button>
                <button className='btn three' onClick ={nextHotel}>Next</button>
            </div>
        </div>

    )
}



export default Hotels;