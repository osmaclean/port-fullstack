export interface StackProps {
  imgPath: string
  ariaLabel: string
  alt: string
}

export interface AllStackProps {
  imgPath: string
  ariaLabel: string
  alt: string
  title: string
}

export interface WorkProjectCardType {
  stacks: StackProps[]
  title: string
  labels: string[]
  imgProject: string
}

export interface WorkProjectCardProps {
  card: WorkProjectCardType
}
