import Image from 'next/image'
import { CarouselProvider, Slider, Slide, DotGroup, Dot } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

const HEIGHT = 769
const WIDTH = 680
const IMGS = [0, 1, 2]

export default function Carousel() {
  return (
    <CarouselProvider
      naturalSlideHeight={HEIGHT}
      naturalSlideWidth={WIDTH}
      totalSlides={3}
      isPlaying
      infinite
      isIntrinsicHeight
    >
      <Slider>
        {IMGS.map((key) => (
          <Slide index={key} key={key}>
            <Image src='/images/drummer.png' alt='drummer' height={HEIGHT} width={WIDTH} />
          </Slide>
        ))}
      </Slider>
      <DotGroup className='-mt-16 flex justify-center gap-4'>
        {IMGS.map((key) => (
          <Dot slide={key} key={key} className='h-4 w-4 rounded-full bg-primary-300' />
        ))}
      </DotGroup>
    </CarouselProvider>
  )
}
