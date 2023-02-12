import "./form.css";
import { FormEvent, useState, useEffect } from "react";
import { FormCard } from "./types/form-types";
import { useNavigate, useParams } from "react-router-dom";
import { Api } from "../../data/api/api";
import { RouterPath } from "../../routes/route-type";

export function Form({ isValid }: any) {
  const navigate = useNavigate();
  const id = useParams().id?.replace(":id", "");

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();
      const data: FormCard = {
        title: e.currentTarget.titleCard.value,
        description: e.currentTarget.description.value,
        avaliation: Number(e.currentTarget.avaliation.value),
        image: e.currentTarget.image.value,
      };

      if (!isValid) {
        if(id) {
          const response = await Api.updateMovie(data, id);
          if (response) {
            navigate(RouterPath.MOVIES);
          }
        }
        const response = await Api.creatMovie(data);
        if (response) {
          navigate(RouterPath.MOVIES);
        }
      } else if (isValid === 1) {
        const response = await Api.createSerie(data);
        if (response) {
          navigate(RouterPath.SERIES);
        }        
      } else if (isValid === 3) {
        const response = await Api.createAnime(data)
        if (response) {
          navigate(RouterPath.ANIMES);
        }
      }
    
  }
  return (
    <div className="div_form">
      <div className="div_form_card">
        <h2>formulário</h2>
        <form onSubmit={handleSubmit} className="form_card">
          <input type="text" name="titleCard" placeholder="titulo" />
          <input type="text" name="description" placeholder="descrição" />
          <input type="number" name="avaliation" placeholder="avaliação" />
          <input type="text" name="image" placeholder="imagen" />
          <div className="div_button_form-card">
            <button type="submit">Enviar</button>
            <button
              onClick={() => {
                navigate(RouterPath.HOME);
              }}
            >
              Sair
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
