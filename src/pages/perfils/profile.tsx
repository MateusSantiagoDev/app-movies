import "./profile.css";
import { useState, useEffect } from "react";
import { Api } from "../../data/api/api";
import { useNavigate } from "react-router-dom";
import { RouterPath } from "../../routes/route-type";
import { CardType } from "../../utils/types/card-types";
import { Select } from "./options/options";

export function Profiles() {
  const navigate = useNavigate();
  const [control, setControl] = useState<boolean>(false);
  const [selectValue, setSelectValue] = useState<string>("");
  const [movie, setMovie] = useState<CardType[]>([]);
  const [serie, setSerie] = useState<CardType[]>([]);
  const [anime, setAnime] = useState<CardType[]>([]);
  const options = ["Movies", "Series", "Animes"];

  async function getMovie() {
    const response = await Api.getMovie();
    if (response) {
      setMovie(response);
      Render();
    }
  }

  async function getSerie() {
    const response = await Api.getSerie();
    if (response) {
      setSerie(response);
      Render();
    }
  }

  async function getAnime() {
    const response = await Api.getAnime();
    if (response) {
      setAnime(response);
      Render();
    }
  }

  function Render() {
    setControl(!control);
  }

  useEffect(() => {
    getMovie();
    getSerie();
    getAnime();
  }, [control]);

  return (
    <div className="div_profile">
      <div className="div_menu_profile">
        <button
          onClick={() => {
            navigate(RouterPath.HOME);
          }}
        >
          Voltar
        </button>
      </div>
      <div className="div_body_profile">
        <div className="div_body_profile-card">
          <Select options={options} selectOptions={setSelectValue} />
          <div className="div_profile_card">
            {selectValue === "Movies" && (
              <>
                {movie.map((el, index) => (
                  <div className="profile_card" key={index}>
                    <h3>{el.title}</h3>
                    <img src={el.image} alt="img" />
                    <p>{el.description}</p>
                    <span>{el.avaliation}</span>
                  </div>
                ))}
              </>
            )}
            {selectValue === "Series" && (
              <>
                {serie.map((el, index) => (
                  <div className="profile_card" key={index}>
                    <h3>{el.title}</h3>
                    <img src={el.image} alt="img" />
                    <p>{el.description}</p>
                    <span>{el.avaliation}</span>
                  </div>
                ))}
              </>
            )}
            {selectValue === "Animes" && (
              <>
                {anime.map((el, index) => (
                  <div className="profile_card" key={index}>
                    <h3>{el.title}</h3>
                    <img src={el.image} alt="img" />
                    <p>{el.description}</p>
                    <span>{el.avaliation}</span>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
        <div className="div_footer_profile"></div>
      </div>
    </div>
  );
}
