import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20 ">
          Olá eu chamo Luciano dos Santos Soares, tenho 25 anos e moro
          atualmente em Bataguassu-MS, desde muito pequeno sempre tive
          curiosidade, e interesse pela areá da tecnologia, para jogos, e
          aprendizagem, minha circulo de amizades sempre tiveram pessoas também
          que tinham interesse ou que já estavam trilhando um caminho rumo a
          areá da tecnologia
        </p>

        <br></br>

        <p className="text-xl">
          No inicio de 2022 eu tive meu primeiro contato com uma linha de código
          através de um curso gratuito na Rocketseat indicada por um amigo
          desenvolvedor, depois de um tempo estudando me identifiquei mais ainda
          com a área da tecnologia desde então todos os dias venho estudando, e
          aprendendo algo relacionado a esse lifestyle, comecei com o básico
          html, css, javascript, atualmente estudo React.js, next.js, javascript
          e typescript. Para o futuro tenho ambições como me tornar um
          desenvolvedor mobile, e também back end atingindo o objetivo de
          desenvolvedor Full-stack
        </p>
      </div>
    </div>
  );
};

export default About;
