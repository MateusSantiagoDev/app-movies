import './home.css'
import { useState, useEffect } from 'react'
import  { BiLogOutCircle } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import { homeImg } from './types/home-type'
import { RouterPath } from '../../routes/route-type'

export function Home() {
  const navigate = useNavigate()
  const [stateMovie, setStateMovie] = useState<homeImg[]>([]);
  const [stateAnime, setStateAnime] = useState<homeImg[]>([]);
  const [stateSerie, setStateSerie] = useState<homeImg[]>([]);

  useEffect(() => {
    fetch("https://app-movies-mu.vercel.app/static/movies.json")
      .then((res) => res.json())
      .then(setStateMovie);

    fetch("https://app-movies-mu.vercel.app/static/series.json")
      .then((res) => res.json())
      .then(setStateSerie);

    fetch("https://app-movies-mu.vercel.app/animes.json")
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

  function logout(){  
    localStorage.removeItem("token");
    navigate(RouterPath.LOGIN);
   }

  return (
    <div className="div_home">
        <h1>Movie Flix 2.0</h1>
        <div className='div_home_menu-img'>
      <div className="div_home-img">
        <div>
          {stateMovie.map((el, index) => (
            <img src={el.image} alt="img" key={index}/>
          ))}
        </div>
        <div>
        {stateAnime.map((el, index) => (
            <img src={el.image} alt="img" key={index}/>
          ))}
        </div>
        <div>
        {stateSerie.map((el, index) => (
            <img src={el.image} alt="img" key={index}/>
          ))}
        </div>
      </div>
      </div>
      <div className="div_home-menu">
        <div>
            <Link className='link_home' to={RouterPath.MOVIES}>Movies</Link>
        </div>
        <div>
            <Link className='link_home' to={RouterPath.SERIES}>Series</Link>
        </div>
        <div>
            <Link className='link_home' to={RouterPath.ANIMES}>Animes</Link>
        </div>
        <div>
            <Link className='link_home' to={RouterPath.PROFILES}>Perfil</Link>
        </div>
        <div className='div_button_logout'>
        <BiLogOutCircle className="button_logout" onClick={logout}/>
        </div>
      </div>
    </div>
  );
}
