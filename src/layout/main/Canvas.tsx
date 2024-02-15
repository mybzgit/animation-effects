import Focusable from '../../components/canvas/Focusable'
import PreviewElement from '../../components/canvas/PreviewElement'
import {
  buttonInitPosition,
  headingInitPosition,
  imageInitPosition,
  paragraphInitPosition,
} from '../../constants'
import Button from '../elements/Button'
import Heading from '../elements/Heading'
import Image from '../elements/Image'
import Paragraph from '../elements/Paragraph'
import './Canvas.css'

const Canvas = () => {
  return (
    <div className='canvas'>
      <PreviewElement
        elementId='heading'
        initialPosition={headingInitPosition}
      >
        <Heading />
      </PreviewElement>
      <Focusable
        elementId='heading'
        initialPosition={headingInitPosition}
      >
        <Heading />
      </Focusable>

      <PreviewElement
        elementId='paragraph'
        initialPosition={paragraphInitPosition}
      >
        <Paragraph />
      </PreviewElement>
      <Focusable
        elementId='paragraph'
        initialPosition={paragraphInitPosition}
      >
        <Paragraph />
      </Focusable>

      <PreviewElement
        elementId='image'
        initialPosition={imageInitPosition}
      >
        <Image />
      </PreviewElement>
      <Focusable
        elementId='image'
        initialPosition={imageInitPosition}
      >
        <Image />
      </Focusable>

      <PreviewElement
        elementId='button'
        initialPosition={buttonInitPosition}
      >
        <Button />
      </PreviewElement>
      <Focusable
        elementId='button'
        initialPosition={buttonInitPosition}
      >
        <Button />
      </Focusable>
    </div>
  )
}

export default Canvas
