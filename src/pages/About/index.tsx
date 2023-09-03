import React from 'react';

import Title from '../../components/Title';
import Collaborators from '../../components/Collaborators';
import math from '../../assets/images/math.jpg';
import victor from '../../assets/images/victor.jpg';
import { Collaborator } from '../../types/collaborator';
import { Story } from './styles';

const About = () => {
  const collaborators: Collaborator[] = [
    {
      name: 'Matheus G. Ferreira',
      effectPhrase:
        "Ak 47's MAC 11's glocks and nine",
      about:
        "Average gay guy who thinks coding motivates living. Been into this since I was aged 12, and I'm still learning every day",
      avatar: math,
      skills: [
        'Java & Spring',
        'JavaScript, TypeScript, Node & React',
        'HTML & CSS',
        'Node',
        'Python: Flask & Django',
      ],
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
      <Story>
        <h3>Story behind this blog</h3>
        This blog was developed solely with the purpose of learning, when me
        (wyvern800) and Victor (Terrible-Developer) started our post-graduation
        course. The main objective of this app was to create a blog to fill with
        dev. related content so other people worldwide could learn what are the
        current development trends and what we can offer with nothing you must
        give back, just because we feel altruist enough. Also this is some kind
        of a portfolio so other companies can see what do we know and how we are
        evolving in our career. We hope you guys enjoy your stay here!
        <h3 style={{marginTop: '15px'}}>Are we open to work?</h3>
        Yes, definitely.
      </Story>

      <Collaborators collaborators={collaborators} />
    </>
  );
};

export default About;
