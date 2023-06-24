import React from 'react'
import Benefits from '../components/elements/Benefits'
import Brand from '../components/elements/Brand'
import Exclusive from '../components/elements/Exclusive'
import Features from '../components/elements/Features'
import Friends from '../components/elements/Friends'
import Hero from '../components/elements/Hero'
import Live from '../components/elements/Live'
import Mission from '../components/elements/Mission'
import Platform from '../components/elements/Platform'
import Protected from '../components/elements/Protected'
import Roadmap from '../components/elements/Roadmap'
import Staking from '../components/elements/Staking'
import Tokenomics from '../components/elements/Tokenomics'
import Vision from '../components/elements/Vision'
import Faqs from '../components/utils/Faqs'


const Home = () => {
  return (
    <>
    <Hero/>
    <Brand/>
    <Platform/>
    <Exclusive/>
    <Features/>
   
    <Staking/>

    <Benefits/>
    <Live/>
    <Mission/>
    <Vision/>
    <Tokenomics/>
    <Roadmap/>
    <Protected/>
    <Faqs/>
    <Friends/>
    </>
  )
}

export default Home