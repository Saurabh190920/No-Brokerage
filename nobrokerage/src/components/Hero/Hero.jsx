import React from 'react'
import HeroBanner from './section/HeroBanner/HeroBanner'
import WhyBrokerage from './section/WhyBrokerage/WhyBrokerage'
import EasySteps from './section/EasySteps/EasySteps'
import MoveInNow from './section/MoveInNow/MoveInNow'
import PopularBuilders from './section/PopularBuilders/PopularBuilders'

const Hero = () => {
  return (<>
  <HeroBanner/>
  <WhyBrokerage></WhyBrokerage>
  <EasySteps/>
  <MoveInNow/>
  <PopularBuilders/>
  </>
  )
}

export default Hero