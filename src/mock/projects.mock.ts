import { WorkProjectCardType } from '@/@types/interface'

import {
  stacksConvert3D,
  stacksIgnite,
  stacksKleitow,
  stacksMar,
} from './stacks.mock'

export const WorkProjectCard: WorkProjectCardType[] = [
  {
    title: 'Kleitow Moreira',
    imgProject: '/projects/project1st.png',
    labels: ['fullstack', 'react.js', 'node.js'],
    stacks: stacksKleitow,
    href: 'https://www.kleytowmoreira.art/home',
  },
  {
    title: 'Convert3D Pro',
    imgProject: '/projects/project3th.png',
    labels: ['fullstack', 'react.js', 'php'],
    stacks: stacksConvert3D,
    href: 'https://convert3dpro.com/',
  },
  {
    title: 'Mar de Rosas',
    imgProject: '/projects/project2nd.png',
    labels: ['frontend', 'react.js', 'tailwind'],
    stacks: stacksMar,
    href: 'https://confirme.omarderosas.com.br/',
  },
  {
    title: 'Mecânica Mundial',
    imgProject: '/projects/project4th.png',
    labels: ['frontend', 'react.js', 'tailwind'],
    stacks: stacksMar,
    href: 'https://mecanica-mundial.vercel.app/',
  },
  {
    title: 'Ignite Timer',
    imgProject: '/projects/project5th.png',
    labels: ['frontend', 'react.js', 'styled component'],
    stacks: stacksIgnite,
    href: 'https://ignite-timer-seven-chi.vercel.app/',
  },
]
