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

export interface WorkProjectCardHomeType {
  stacks: StackProps[]
  title: string
  labels: string[]
  imgProject: string
  website: string
  github?: string
}

export interface WorkProjectCardHomeProps {
  card: WorkProjectCardHomeType
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

export interface DropDownMenuProps {
  isDrop: boolean
}

export interface NavInfosProps {
  label: string
  href: string
}
