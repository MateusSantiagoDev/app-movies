import './serie.css'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../../data/api/api";
import { RouterPath } from "../../routes/route-type";
import { CardType } from "../../utils/types/card-types";

export function Serie({ eventHandler, eventHandlerId }: any) {
  const navigate = useNavigate();
  const [serie, setSerie] = useState<CardType[]>([]);
  const [control, setControl] = useState<boolean>(false);

  async function getSeries() {
    const response = await Api.getSerie();
    setSerie(response);
    Render();
  }

  async function deleteMovie(id: string) {
    const response = await Api.deleteSerie(id);
    if (response) {
      Render();
    }
  }
  
  function Render() {
    setControl(!control);
  }

  useEffect(() => {
    getSeries();
  }, [control]);

  return (
    <div className="serie-card">
      <div className="header_serie">
        <div className="div_header_serie-exit">
          <button
            onClick={() => {
              navigate(RouterPath.HOME);
            }}
          >
            Voltar
          </button>
        </div>
        <div className="div_header_serie-create">
          <button
            onClick={(e) => {
                eventHandler(e.currentTarget.ELEMENT_NODE)
                navigate(RouterPath.FORM);
            }}
          >
            Nova Serie
          </button>
        </div>
      </div>
      <div className="div_serie_body-card">
        {serie.map((el, index) => (
          <div className="body_serie" key={index}>
            <h2>{el.title}</h2>
            <img src={el.image} alt="img" />
            <p>{el.description}</p>
            <span>{el.avaliation}</span>
            <div className="div_button_card-serie">
              <button
                onClick={(e) => {
                  eventHandlerId(e.currentTarget.ELEMENT_NODE)
                  navigate(RouterPath.FORM_UPDATE + el.id);
                }}
              >
                Editar
              </button>
              <button
                onClick={() => {
                  deleteMovie(el.id);
                }}
              >
                Remover
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="footer_serie"></div>
    </div>
  );
}
