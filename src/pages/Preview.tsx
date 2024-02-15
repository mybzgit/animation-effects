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
        animate={true}
      >
        <Heading />
      </AnimatedElement>

      <AnimatedElement
        elementId='paragraph'
        initialPosition={paragraphInitPosition}
        animate
      >
        <Paragraph />
      </AnimatedElement>

      <AnimatedElement
        elementId='image'
        initialPosition={imageInitPosition}
        animate
      >
        <Image />
      </AnimatedElement>

      <AnimatedElement
        elementId='button'
        initialPosition={buttonInitPosition}
        animate
      >
        <Button />
      </AnimatedElement>
    </div>
  )
}

export default Preview
