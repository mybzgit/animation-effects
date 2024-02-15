export interface IElement {
  type: ElementType
  options: ElementOptions
}

export type ElementOptions = {
  x: number
  y: number
  opacity: number
  scale: number
  blur: number
  speed: number
  delay: number
  easing: string
  replay: boolean
}

export type ElementType =
  | 'image'
  | 'heading'
  | 'button'
  | 'paragraph'
  | null

export const initOptions = {
  x: 0,
  y: 0,
  opacity: 1,
  scale: 1,
  blur: 0,
  speed: 0,
  delay: 0,
  easing: 'linear',
  replay: false,
}

export enum EasingFunc {
  Linear = 'linear',
  EaseIn = 'ease-in',
  EaseOut = 'ease-out',
  EaseInOut = 'ease-in-out',
  Steps2 = 'steps(2)',
  Steps3Start = 'steps(3, start)',
  Steps5End = 'steps(5, end)',
  Steps2JumpStart = 'steps(2, jump-start)',
  Steps4JumpEnd = 'steps(4, jump-end)',
  Steps5JumpNone = 'steps(5, jump-none)',
  Steps5JumpBoth = 'steps(5, jump-both)',
}
