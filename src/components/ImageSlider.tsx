import 'keen-slider/keen-slider.min.css'
import { styled } from '@mui/material'
import { useKeenSlider } from 'keen-slider/react'
import { useState } from 'react'

const images = [
  '/images/image1.png',
  '/images/image2.png',
  '/images/image3.png',
]

const Fader = styled('div')({
  height: '400px',
  position: 'relative',
  overflow: 'hidden',
})

const FaderSlide = styled('div')({
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
})

const FaderImage = styled('img')({
  backgroundColor: 'transparent',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
})

function ImageSlider() {
  const [opacities, setOpacities] = useState<number[]>([])

  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      slides: images.length,
      loop: true,
      detailsChanged(s) {
        const new_opacities = s.track.details.slides.map(slide => slide.portion)
        setOpacities(new_opacities)
      },
    },
    [
      (slider) => {
        let timeout: any
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver)
            return
          timeout = setTimeout(() => {
            slider.next()
          }, 5000)
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      },
    ],
  )
  return (
      <Fader ref={sliderRef}>
        {images.map((src, idx) => (
          <FaderSlide
            key={idx}
            style={{ opacity: opacities[idx] }}
          >
            <FaderImage src={src} alt=""/>
          </FaderSlide>
        ))}
      </Fader>
  )
}

export default ImageSlider
