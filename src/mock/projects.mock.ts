import { WorkProjectCardHomeType } from '@/@types/interface'

import {
  stacksConvert3D,
  stacksIgnite,
  stacksKleitow,
  stacksMar,
} from './stacks.mock'

export const WorkProjectCard: WorkProjectCardHomeType[] = [
  {
    title: 'Kleytow Moreira',
    imgProject: '/projects/project1st.png',
    labels: ['fullstack', 'react.js', 'node.js'],
    stacks: stacksKleitow,
    website: 'https://www.kleytowmoreira.art/home',
    github: 'https://github.com/DVisioun/cleiton-port-front',
  },
  {
    title: 'Convert3D Pro',
    imgProject: '/projects/project3th.png',
    labels: ['fullstack', 'react.js', 'php'],
    stacks: stacksConvert3D,
    website: 'https://convert3dpro.com/',
  },
  {
    title: 'Mar de Rosas',
    imgProject: '/projects/project2nd.png',
    labels: ['frontend', 'react.js', 'tailwind'],
    stacks: stacksMar,
    website: 'https://confirme.omarderosas.com.br/',
  },
  {
    title: 'Mecânica Mundial',
    imgProject: '/projects/project4th.png',
    labels: ['frontend', 'react.js', 'tailwind'],
    stacks: stacksMar,
    website: 'https://mecanica-mundial.vercel.app/',
    github: 'https://github.com/Mecanica-Mundial/mecanica-mundial',
  },
  {
    title: 'Ignite Timer',
    imgProject: '/projects/project5th.png',
    labels: ['frontend', 'react.js', 'styled component'],
    stacks: stacksIgnite,
    website: 'https://ignite-timer-seven-chi.vercel.app/',
    github: 'https://github.com/osmaclean/igniteTimer',
  },
]
