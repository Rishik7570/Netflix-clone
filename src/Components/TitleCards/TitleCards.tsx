import { Link } from "react-router-dom";
import "./titlecards.css";
import { useEffect, useRef, useState } from "react";

type titleprops = {
  title:string
  category:string
}

type api = {
  backdrop_path: string
  id: number
  overview: string
  release_date: string
  title: string
}[]


const TitleCards = ({title, category}:titleprops) => {

  const [apidata,setApidata] = useState<api | null>(null)

  const cardsRef = useRef<HTMLDivElement>(null);

  const handlewheel = (e:WheelEvent) => {
    e.preventDefault();
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += e.deltaY;
    }
  };

  

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODRiOTM3YzFjNzVhNjA2NTIwOGIyMWY0YzFjNTIyYSIsIm5iZiI6MTcyMjk3NzAxMS4zNzI2MTcsInN1YiI6IjY2YjI4OWI4NzY4OGFkZjc0NzhiODFmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rajsO942I1dwcnywxIjvEARO0xiTg7a7mWVSaCFEYH8'
    }
  };
  
  

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApidata(response.results))
    .catch(err => console.error(err));


    const currentRef = cardsRef.current;
    if (currentRef) {
      currentRef.addEventListener("wheel", handlewheel);
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener("wheel", handlewheel);
      }
    };
  });

  return (
    <div className="title-cards">
      <h2>{title?title:'Popular on Netflix'}</h2>
      <div className="card-list" ref={cardsRef}>
        {apidata?.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} key={index} className="card">
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" className="" />
              <p>{card.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
