import { WorkProjectCardType } from '@/@types/interface'
import { stacksIgnite, stacksKleitow, stacksMar } from './stacks.mock'

export const WorkProjectCard: WorkProjectCardType[] = [
  {
    title: 'Kleitow Moreira',
    imgProject: '/projects/project1st.png',
    labels: ['fullstack', 'react.js', 'node.js'],
    stacks: stacksKleitow,
  },
  {
    title: 'Mecânica Mundial',
    imgProject: '/projects/project4th.png',
    labels: ['frontend', 'react.js', 'tailwind'],
    stacks: stacksMar,
  },
  {
    title: 'Ignite Timer',
    imgProject: '/projects/project5th.png',
    labels: ['frontend', 'react.js', 'styled component'],
    stacks: stacksIgnite,
  },
  {
    title: 'Mar de Rosas',
    imgProject: '/projects/project2nd.png',
    labels: ['frontend', 'react.js', 'tailwind'],
    stacks: stacksMar,
  },
  {
    title: 'px8',
    imgProject: '/projects/project3th.png',
    labels: ['frontend', 'react.js', 'tailwind'],
    stacks: stacksMar,
  },
]
