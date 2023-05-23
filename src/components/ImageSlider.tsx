import 'keen-slider/keen-slider.min.css'
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined'
import { IconButton, styled } from '@mui/material'
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

const Dots = styled('div')({
  display: 'flex',
  paddingTop: '3vh',
  justifyContent: 'center',
})

const Dot = styled('button')({
  border: 'none',
  width: '10px',
  height: '10px',
  background: '#c5c5c5',
  borderRadius: '50%',
  margin: '0 5px',
  padding: '5px',
  cursor: 'pointer',
})

const ArrowButton = styled(IconButton)({
  // width: '50px',
  // height: '50px',
  position: 'absolute',
  top: '35%',
  cursor: 'pointer',
})

function ImageSlider() {
  const [opacities, setOpacities] = useState<number[]>([])
  const [loaded, setLoaded] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: images.length,
      loop: true,
      detailsChanged(s) {
        const new_opacities = s.track.details.slides.map(slide => slide.portion)
        setOpacities(new_opacities)
      },
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel)
      },
      created() {
        setLoaded(true)
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
    <>
      <Fader ref={sliderRef}>
        {images.map((src, index) => (
          <FaderSlide
            key={index}
            style={{ opacity: opacities[index] }}
          >
            <FaderImage src={src} alt=""/>
          </FaderSlide>
        ))}
      </Fader>
      {loaded && instanceRef.current && (
        <>
          <ArrowButton
            onClick={(e: any) => {
              e.stopPropagation()
              if (currentSlide !== 0)
                instanceRef.current?.prev()
              else
                instanceRef.current?.moveToIdx(images.length - 1)
            }}
            sx={{ left: '5px' }}
          >
            <KeyboardArrowLeftOutlinedIcon fontSize="large"/>
          </ArrowButton>
          <ArrowButton
            onClick={(e: any) => {
              e.stopPropagation()
              if (currentSlide !== images.length - 1)
                instanceRef.current?.next()
              else
                instanceRef.current?.moveToIdx(0)
            }}
            sx={{
              left: 'auto',
              right: '5px',
            }}
          >
            <KeyboardArrowRightOutlinedIcon fontSize="large" />
          </ArrowButton>
        </>
      )}
      {loaded && instanceRef.current && (
        <Dots>
          {images.map((_, index) => {
            return (
              <Dot
                key={index}
                onClick={() => {
                  instanceRef.current?.moveToIdx(index)
                }}
                sx={currentSlide === index ? { background: '#222' } : {}}
              />
            )
          })}
        </Dots>
      )}
    </>
  )
}

export default ImageSlider
