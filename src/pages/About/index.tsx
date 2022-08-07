import React from 'react';

import Title from '../../components/Title';
import Collaborators from '../../components/Collaborators';
import math from '../../assets/images/math.jpg';
import victor from '../../assets/images/victor.jpg';
import { Collaborator } from '../../types/collaborator';

const About = () => {
  const collaborators: Collaborator[] = [
    {
      name: 'Matheus Guilherme Ferreira',
      effectPhrase: '*Insira frase de efeito*',
      about: 'secco',
      avatar: math,
      skills: ['secca'],
      socials: [
        {
          name: 'Github',
          link: 'https://github.com/wyvern800',
        },
        {
          name: 'LinkedIn',
          link: 'https://www.linkedin.com/in/matheus-ferreira-a73711174/',
        },
      ],
    },
    {
      name: 'Victor Bruno Paro',
      effectPhrase: 'Antes tarde do que mais tarde ainda.',
      about:
        'Desenvolvedor com foco em web (e futuramente desenvolvimento de jogos). Comecei a gostar de programação depois de ver na faculdade (sim, meio tarde) e acabei decidindo seguir carreira.',
      avatar: victor,
      skills: [
        'Javascript, especialmente Nodejs e Vuejs. Conhecimento também em Angular e Reactjs, e a linguagem no geral',
        'Typescript',
        'C#, mais focado em desktop',
        'Linux ("I would like to interject")',
        ' Perder duas horas resolvendo um problema no meu bot de discord por uma linha que não percebi.',
      ],
      socials: [
        {
          name: 'Github',
          link: 'https://github.com/Terrible-Developer',
        },
        {
          name: 'LinkedIn',
          link: 'https://www.linkedin.com/in/victor-paro-8b5433185/',
        },
      ],
    },
  ];

  return (
    <>
      <Title name="About" />
      <Collaborators collaborators={collaborators} />
    </>
  );
};

export default About;
