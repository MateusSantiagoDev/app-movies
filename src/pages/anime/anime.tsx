import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Api } from '../../data/api/api';
import { RouterPath } from '../../routes/route-type';
import { CardType } from '../../utils/types/card-types';
import './anime.css'

export function Anime ({ eventHandler }: any) {

    const navigate = useNavigate();
  const [serie, setSerie] = useState<CardType[]>([]);
  const [control, setControl] = useState<boolean>(false);

  async function getAnimes() {
    const response = await Api.getAnime();
    setSerie(response);
    Render();
  }

  async function deleteAnime(id: string) {
    const response = await Api.deleteAnime(id);
    if (response) {
      Render();
    }
  }
  
  function Render() {
    setControl(!control);
  }

  useEffect(() => {
    getAnimes();
  }, [control]);

  return (
    <div className="anime-card">
      <div className="header_anime">
        <div className="div_header_anime-exit">
          <button
            onClick={() => {
              navigate(RouterPath.HOME);
            }}
          >
            Voltar
          </button>
        </div>
        <div className="div_header_anime-create">
          <button
            onClick={(e) => {
                eventHandler(e.currentTarget.ELEMENT_NODE)
                navigate(RouterPath.FORM);
            }}
          >
            Novo Anime
          </button>
        </div>
      </div>
      <div className="div_anime_body-card">
        {serie.map((el, index) => (
          <div className="body_anime" key={index}>
            <h2>{el.title}</h2>
            <img src={el.image} alt="img" />
            <p>{el.description}</p>
            <span>{el.avaliation}</span>
            <div className="div_button_card-anime">
              <button
                onClick={() => {
                  navigate(RouterPath.FORM_UPDATE + el.id);
                }}
              >
                Editar
              </button>
              <button
                onClick={() => {
                    deleteAnime(el.id);
                }}
              >
                Remover
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="footer_anime"></div>
    </div>
  );
}