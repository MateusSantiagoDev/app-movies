import './movie.css'
import { CardType } from '../../utils/types/card-types'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Api } from '../../data/api/api'
import { RouterPath } from '../../routes/route-type'

export function Movie () {
    const navigate = useNavigate()
    const [movie, setMovie] = useState<CardType[]>([])
    const [control, setControl] = useState<boolean>(false)

    async function getMovies () {
        const response = await Api.getMovie()
        setMovie(response)
        Render()
    }

    async function deleteMovie (id: string) {
        await Api.deleteMovie(id)        
        Render()        
    }

    function Render () {
        setControl(!control)
    }

    useEffect(() => {
        getMovies()
      }, [control])

    return (
        <div className='movie-card'>
            <div className='header_movie'>
                <div className='div_header_movie-exit'>
                <button onClick={() => {
                  navigate(RouterPath.HOME)
                }}>Voltar</button>
                </div>
                <div className='div_header_movie-create'>
                <button onClick={() => {
                  navigate(RouterPath.FORM)
                }}>Novo Filme</button>
                </div>
            </div>
            <div className='div_movie_body-card'>
            {movie.map((el, index) => (
            <div className='body_movie' key={index}>
                <h2>{el.title}</h2>
                <img src={el.image} alt="img" />
                <p>{el.description}</p>
                <span>{el.avaliation}</span>
                <div className='div_button_card-movie'>
                    <button onClick={() => {
                        navigate(RouterPath.FORM_UPDATE + el.id)
                    }}>Editar</button>
                    <button onClick={() => {
                        deleteMovie(el.id)
                    }}>Remover</button>
                </div>
            </div>
            ))}
            </div>
            <div className='footer_movie'>
                
            </div>
        </div>
    )
}