import './movie.css'
import { MovieType } from './types/movie-type'
import { useState, useEffect } from 'react'
import { Api } from '../../data/api/api'

export function Movie () {
    const [movie, setMovie] = useState<MovieType[]>([])
    const [control, setControl] = useState<boolean>(false)

    async function getMovies () {
        const response = await Api.getMovie()
        setMovie(response)
        Render()
    }

    function Render () {
        setControl(!control)
    }

    useEffect(() => {
        getMovies()
      }, [control])

    return (
        <div>
            <div className='header_movie'>
                <ul>
                    <li>Adicionar</li>
                    <li>Editar</li>
                    <li>Remover</li>
                </ul>
            </div>
            {movie.map((el, index) => (
            <div className='body_movie' key={index}>
                <h2>{el.title}</h2>
                <img src={el.image} alt="img" />
                <span>{el.description}</span>
                <span>{el.avaliation}</span>
            </div>
            ))}
            <div className='footer_movie'></div>
        </div>
    )
}