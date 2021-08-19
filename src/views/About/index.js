import React, { Component } from 'react';

import { Container, Main, AboutSection } from './styles';
import Title from '../../assets/components/Title';

export default class About extends Component {
  render() {
    return (
      <>
        <Title name="About" />
        <Container>
          <Main>
            <AboutSection>
              <p>placeholder/insert image</p>
              <div className="devInfo">
                <h2>Matheus Guilherme Ferreira</h2>
                <p>*Insira frase de efeito*</p>
                <h3>Sobre:</h3>
                <p>Desenvolvedor ... (Terminar a explicação e tudo)</p>
                <h3>Principais Habilidades:</h3>
                <p>?</p>
              </div>
            </AboutSection>
            <AboutSection>
              <p>placeholder for image</p>
              <div className="devInfo">
                <h2>Victor Bruno Paro</h2>
                <p>"Antes tarde do que mais tarde ainda."</p>
                <h3>Sobre:</h3>
                <p>Desenvolvedor com foco em web (e futuramente desenvolvimento de jogos). Comecei a gostar de programação depois de ver na faculdade (sim, meio tarde)
                  e acabei decidindo seguir carreira.
                </p>
                <h3>Principais Habilidades: </h3>
                <ul>
                  <li>Javascript, especialmente Nodejs e Vuejs. Conhecimento também em Angular e Reactjs, e a linguagem no geral</li>
                  <li>Typescript</li>
                  <li>C#, mais focado em desktop</li>
                  <li>Linux ("I would like to interject")</li>
                  <li>Perder duas horas resolvendo um problema no meu bot de discord por uma linha que não percebi.</li>
                </ul>
              </div>
            </AboutSection>
          </Main>
        </Container>
      </>
    );
  }
}
