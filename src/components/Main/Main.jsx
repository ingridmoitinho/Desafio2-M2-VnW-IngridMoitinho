import React, { useState } from "react";
import "./Main.css";
import imagem from "../../assets/east.png";
import imagem2 from "../../assets/alabasta.png";
import imagem3 from "../../assets/sky.png";



setTimeout(() => {
     alert("Embarque nessa aventura, novos episódios toda semana!");
}, 5000);


const myInterval = setInterval(setColor, 4000);

function setColor() {
  let x = document.body;
  x.style.backgroundColor = x.style.backgroundColor == "red" ? "blue" : "red";
}

export default function Main() {
  const [east, setAnime] = useState();
  const [alabasta, setAnime2] = useState();
  const [sky, setAnime3] = useState();

  function descricao() {
    setAnime("Saga East Blue, episódios: 01-61");
    setAnime2("Saga Alabasta, episódios: 62-135");
    setAnime3("Saga Skypiea, episódios: 136 ao 206");
  }

   return (
    <>
      <main>
        <section className="banner"></section>

        <section className="cards">
          <div>
            <h2>Temporada 1 </h2>
            <img onMouseEnter={descricao} src={imagem} alt="logo" />
            <p> {east} </p>
          </div>
          <div>
          <h2>Temporada 2</h2>
            <img onMouseMove={descricao}  src={imagem2} alt="logo" />
            <p> {alabasta} </p>
          </div>
          <div>
          <h2>Temporada 3</h2>
            <img  onMouseEnter={descricao} src={imagem3} alt="logo" />
            <p>{sky}</p>
          </div>
        </section>
      </main>
    </>
  );
}