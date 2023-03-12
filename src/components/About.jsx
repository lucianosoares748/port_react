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
          atualmente em Bataguassu-MS, estudo programação a cerca de um ano após
          um amigo meu me incentivar, nós sempre fomos muito ligados e sempre
          compartilhamos coisas relacionadas a tecnologia em um grupo de amigos
          antigo da escola desde 2014 até hoje. Iniciei estudando o básico Html,
          CSS e Java script, e foi ai que eu percebi que queria ser DEV.
        </p>

        <br></br>

        <p className="text-xl">
          Hoje eu continuo me capacitando a procura da primeira oportunidade da
          área, iniciei graduação em Sistema da informação, continuo estudando e
          fazendo cursos para capacitação e melhor entrega de serviços sempre,
          tecnologia é isso. Tenho a ambição me tornar desenvolvedor fullstack,
          amo aprender e desenvolver para usuários que queiram ter uma ótima
          experiência no seu dia a dia com algo desenvolvido por mim. Agora só
          falta entrar para um time, e poder fazer parte de uma familia Dev.
        </p>
      </div>
    </div>
  );
};

export default About;
