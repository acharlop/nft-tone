import type { PropsWithChildren } from 'react'
import Image from 'next/image'
import { CarouselProvider, Slider, Slide, DotGroup, Dot } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

export default function Carousel() {
  return (
    <CarouselProvider
      naturalSlideHeight={769}
      naturalSlideWidth={680}
      totalSlides={3}
      isPlaying
      infinite
      // className='flex h-fit flex-col'
    >
      <Slider>
        <Slide index={0}>
          <Image src='/images/drummer.png' alt='drummer' height={769} width={680} />
        </Slide>
        <Slide index={1}>
          <Image src='/images/drummer.png' alt='drummer' height={769} width={680} />
        </Slide>
        <Slide index={2}>
          <Image src='/images/drummer.png' alt='drummer' height={769} width={680} />
        </Slide>
      </Slider>
      <DotGroup className='flex justify-center gap-4'>
        {[0, 1, 2].map((key) => (
          <Dot slide={key} key={key} className='h-4 w-4 rounded-full bg-primary-300' />
        ))}
      </DotGroup>
    </CarouselProvider>
  )
}
