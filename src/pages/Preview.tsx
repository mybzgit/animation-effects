import AnimatedElement from '../components/canvas/AnimatedElement'
import {
  buttonInitPosition,
  headingInitPosition,
  imageInitPosition,
  paragraphInitPosition,
} from '../constants'
import Button from '../layout/elements/Button'
import Heading from '../layout/elements/Heading'
import Image from '../layout/elements/Image'
import Paragraph from '../layout/elements/Paragraph'

const Preview = () => {
  return (
    <div className='canvas'>
      <AnimatedElement
        elementId='heading'
        initialPosition={headingInitPosition}
      >
        <Heading />
      </AnimatedElement>

      <AnimatedElement
        elementId='paragraph'
        initialPosition={paragraphInitPosition}
      >
        <Paragraph />
      </AnimatedElement>

      <AnimatedElement
        elementId='image'
        initialPosition={imageInitPosition}
      >
        <Image />
      </AnimatedElement>

      <AnimatedElement
        elementId='button'
        initialPosition={buttonInitPosition}
      >
        <Button />
      </AnimatedElement>
    </div>
  )
}

export default Preview
