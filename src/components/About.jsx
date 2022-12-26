import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <p className="text-xl">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              About
            </p>
          </div>
          Olá, me chamo Luciano dos Santos Soares, tenho 25 anos e moro
          atualmente em Bataguassu-MS, desde muito pequeno sempre tive
          curiosidade e interesse pela área da tecnologia voltada para jogos,
          meu circulo de amizades sempre teve pessoas que também tinham
          interesse por essa área ou que já estavam trilhando um caminho rumo a
          carreira da tecnologia
        </p>

        <br></br>

        <p className="text-xl">
          No inicio de 2022, eu tive meu primeiro contato com linha de código
          através de um curso gratuito na Rocketseat indicado por um amigo
          desenvolvedor, depois de um tempo estudando me identifiquei mais ainda
          com a área da tecnologia, desde então todos os dias venho estudando,
          adquirindo curso e aprendendo algo relacionado a esse lifestyle de
          desenvolvedor, comecei com o básico html, css, javascript, atualmente
          estudo React.js, next.js, javascript e typescript. Para o futuro tenho
          ambições como me tornar um desenvolvedor mobile, e também back end,
          atingindo o meu objetivo de se tornar um desenvolvedor Full-stack.
        </p>
      </div>
    </div>
  );
};

export default About;
