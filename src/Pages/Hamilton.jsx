import React from "react";

const Hamilton = () => {
  return (
    <div className="Test">
      <header>Hamilton Anxiety Rating Scale, HARS</header>
      <article className="Test__questionary">
        <strong>Instrucciones:</strong>
        <p>Este cuestionario consta de diversas oraciones. Por favor lee con atención cada una de las estas cuidadosamente.  Luego elija la opción correspondiente a la frecuencia con lo que sientes, piensas o vives en las últimas semanas incluído el día lo referente al enuncuiado.</p>
      </article>

      <hr />

      <form className="Test__questionary" action="" name="">
        <aside>
          <label>1. Humor ansioso (inquietud, espera de lo peor, aprensión [anticipación temerosa], irritabilidad)</label>
          <ol>
            <input type="radio" name="anxiety_humor" value="0"></input>
            <label for="0">Nunca</label><br/>

            <input type="radio" name="anxiety_humor" value="1"></input>
            <label for="1">Una vez a la semana</label><br/>

            <input type="radio" name="anxiety_humor" value="2"></input>
            <label for="2">2/3 veces por semana</label><br/>

            <input type="radio" name="anxiety_humor" value="3"></input>
            <label for="3">4/5 veces por semana</label><br/>

            <input type="radio" name="anxiety_humor" value="4"></input>
            <label for="4">6/7 veces por semana</label><br/>
          </ol>
        </aside>,

        <aside>
          <label>2. Tensión(sensación de tensión, fatigabilidad, imposibilidad de relajarse, llanto fácil, temblor, sensación de no poder quedarse en un lugar)</label>
          <ol>
            <input type="radio" name="anxiety_humor" value="0"></input>
            <label for="0">Nunca</label><br/>

            <input type="radio" name="anxiety_humor" value="1"></input>
            <label for="1">Una vez a la semana</label><br/>

            <input type="radio" name="anxiety_humor" value="2"></input>
            <label for="2">2/3 veces por semana</label><br/>

            <input type="radio" name="anxiety_humor" value="3"></input>
            <label for="3">4/5 veces por semana</label><br/>

            <input type="radio" name="anxiety_humor" value="4"></input>
            <label for="4">6/7 veces por semana</label><br/>
          </ol>
        </aside>
        <button id="" type="button" onclick="onCLickTotalHamilton()">Calculate</button>
      </form>
    </div>
  );
};

export default Hamilton;