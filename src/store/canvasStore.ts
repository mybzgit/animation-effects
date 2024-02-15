import { makeAutoObservable } from 'mobx'
import {
  ElementOptions,
  ElementType,
  IElement,
  initOptions,
} from '../interfaces/element'

class CanvasStore {
  heading: IElement = localStorage.heading
    ? JSON.parse(localStorage.heading)
    : {}
  paragraph: IElement = localStorage.paragraph
    ? JSON.parse(localStorage.paragraph)
    : {}
  button: IElement = localStorage.button
    ? JSON.parse(localStorage.button)
    : {}
  image: IElement = localStorage.image
    ? JSON.parse(localStorage.image)
    : {}

  constructor() {
    makeAutoObservable(this)
    if (localStorage.getItem('heading') == null) this.initCanvas()
  }

  initCanvas = () => {
    this.heading.type = 'heading'
    this.heading.options = initOptions

    this.paragraph.type = 'paragraph'
    this.paragraph.options = initOptions

    this.button.type = 'button'
    this.button.options = initOptions

    this.image.type = 'image'
    this.image.options = initOptions

    localStorage.setItem('heading', JSON.stringify(this.heading))
    localStorage.setItem('paragraph', JSON.stringify(this.paragraph))
    localStorage.setItem('button', JSON.stringify(this.button))
    localStorage.setItem('image', JSON.stringify(this.image))
  }

  setOption = (
    type: ElementType,
    key: keyof ElementOptions,
    value: number | string,
  ) => {
    let element: IElement = {} as IElement
    switch (type) {
      case 'heading':
        element = this.heading
        break
      case 'paragraph':
        element = this.paragraph
        break
      case 'button':
        element = this.button
        break
      case 'image':
        element = this.image
        break
      default:
        break
    }
    if (type == null) return
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    element.options[key] = value

    localStorage.setItem(type!, JSON.stringify(element!))
  }

  getOptions = (type: ElementType) => {
    if (type == 'heading') return this.heading.options
    if (type == 'paragraph') return this.paragraph.options
    if (type == 'button') return this.button.options
    if (type == 'image') return this.image.options
    else return initOptions
  }
}

const canvasStore = new CanvasStore()

export default canvasStore
