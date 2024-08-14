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

export interface allEducationsProps {
  name: string
  company: string
  hours: number
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

export interface InputProps {
  htmlFor: string
  label: string
  type: string
  name: string
  placeholder: string
}

export interface InputContentProps {
  content: InputProps
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void
  value?: string
}
