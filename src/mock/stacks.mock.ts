import { StackProps, WorkProjectCardType } from '@/@types/interface'

export const stacksKleitow: StackProps[] = [
  {
    imgPath: '/stacksKleitow/fastify.png',
    ariaLabel: 'Fastify Icon',
    alt: 'Fastify Icon',
  },
  {
    imgPath: '/stacksKleitow/mysql.png',
    ariaLabel: 'MySQL Icon',
    alt: 'MySQL Icon',
  },
  {
    imgPath: '/stacksKleitow/node.png',
    ariaLabel: 'Node Icon',
    alt: 'Node Icon',
  },
  {
    imgPath: '/stacksKleitow/prisma.png',
    ariaLabel: 'Prisma Icon',
    alt: 'Prisma Icon',
  },

  {
    imgPath: '/stacksKleitow/react.png',
    ariaLabel: 'React Icon',
    alt: 'React Icon',
  },

  {
    imgPath: '/stacksKleitow/tailwind.png',
    ariaLabel: 'Tailwind Icon',
    alt: 'Tailwind Icon',
  },

  {
    imgPath: '/stacksKleitow/ts.png',
    ariaLabel: 'TypeScript Icon',
    alt: 'TypeScript Icon',
  },

  {
    imgPath: '/stacksKleitow/semantic.png',
    ariaLabel: 'Semantic Icon',
    alt: 'Semantic Icon',
  },
]

export const stacksMar: StackProps[] = [
  {
    imgPath: '/stacksMar/tailwind.png',
    ariaLabel: 'Tailwind Icon',
    alt: 'Tailwind Icon',
  },
  {
    imgPath: '/stacksMar/react.png',
    ariaLabel: 'React Icon',
    alt: 'React Icon',
  },
  {
    imgPath: '/stacksMar/ts.png',
    ariaLabel: 'TypeScript Icon',
    alt: 'TypeScript Icon',
  },
]

export const stacksIgnite: StackProps[] = [
  {
    imgPath: '/stacksIgnite/styled.png',
    ariaLabel: 'Styled Components Icon',
    alt: 'Styled Components Icon',
  },
  {
    imgPath: '/stacksIgnite/react.png',
    ariaLabel: 'React Icon',
    alt: 'React Icon',
  },
  {
    imgPath: '/stacksIgnite/ts.png',
    ariaLabel: 'TypeScript Icon',
    alt: 'TypeScript Icon',
  },
]

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
