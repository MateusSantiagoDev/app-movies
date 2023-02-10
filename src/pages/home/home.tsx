import './home.css'
import { useState, useEffect } from 'react'
import  { BiLogOutCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { homeImg } from './types/home-type'
import { RouterPath } from '../../routes/route-type'

export function Home() {
  const [stateMovie, setStateMovie] = useState<homeImg[]>([]);
  const [stateAnime, setStateAnime] = useState<homeImg[]>([]);
  const [stateSerie, setStateSerie] = useState<homeImg[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/static/movies.json")
      .then((res) => res.json())
      .then(setStateMovie);

    fetch("http://localhost:3000/static/series.json")
      .then((res) => res.json())
      .then(setStateSerie);

    fetch("http://localhost:3000/static/animes.json")
      .then((res) => res.json())
      .then(setStateAnime);
  }, []);

  if (!stateMovie || !stateMovie.length) {
    return null;
  }
  if (!stateAnime || !stateAnime.length) {
    return null;
  }
  if (!stateSerie || !stateSerie.length) {
    return null;
  }

  return (
    <div className="div_home">
        <h1>Movie Flix 2.0</h1>
        <div className='div_home_menu-img'>
      <div className="div_home-img">
        <div>
          {stateMovie.map((el) => (
            <img src={el.image} alt="img" />
          ))}
        </div>
        <div>
        {stateAnime.map((el) => (
            <img src={el.image} alt="img" />
          ))}
        </div>
        <div>
        {stateSerie.map((el) => (
            <img src={el.image} alt="img" />
          ))}
        </div>
      </div>
      </div>
      <div className="div_home-menu">
        <div>
            <Link to={}>Movies</Link>
        </div>
        <div>
            <h2>Series</h2>
        </div>
        <div>
            <h2>Animes</h2>
        </div>
        <div>
            <h2>Perfil</h2>
        </div>
        <div className='div_button_logout'>
        <BiLogOutCircle className="button_logout"/>
        </div>
      </div>
    </div>
  );
}
