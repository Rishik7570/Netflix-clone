import './player.css'
import back_arrow from '../../assets/back_arrow_icon.png'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


type api = {
    name: string
    key: string
    type: string
    published_at:string
}

const Player = () => {

    const [apidata, setApidata] = useState<api | null>(null)
    const navigate = useNavigate()
    const {id} = useParams()

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODRiOTM3YzFjNzVhNjA2NTIwOGIyMWY0YzFjNTIyYSIsIm5iZiI6MTcyMjk3NzAxMS4zNzI2MTcsInN1YiI6IjY2YjI4OWI4NzY4OGFkZjc0NzhiODFmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rajsO942I1dwcnywxIjvEARO0xiTg7a7mWVSaCFEYH8'
  }
};

const fetchapi = ()=>{
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(response => response.json())
  .then(response => setApidata(response.results[0]))
  .catch(err => console.error(err));
}


  return (
    <div className='player' onLoad={fetchapi}>
      <img src={back_arrow} alt="" onClick={()=>{navigate('/')}} />
      <iframe src={`https://www.youtube.com/embed/${apidata?.key}`}
        title='trailer' width='90%' height='90%' allowFullScreen></iframe>
        <div className="player-info">
           <p>{apidata?.published_at.slice(0,10)}</p>
           <p>{apidata?.name}</p>
           <p>{apidata?.type}</p> 
        </div>
    </div>
  )
}

export default Player
