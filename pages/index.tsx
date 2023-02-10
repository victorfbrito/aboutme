import Head from 'next/head'
import React, { useState, useEffect, useContext, useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'

import MouseContextProvider from "../context/mouse-context";

import Noise_Wrapper from '../components/Noise_wrapper'
import Footer from '../components/Footer'
import Signature from '../components/Signature'
import Introduction from '../components/Introduction'
import Cursor from '../components/Cursor'
import About from '../components/About'
import Skills from '../components/Skills' 
import ScrollButton from '../components/ScrollButton'
import HorizontalGuide from '../components/Horizontal_Guide'
import Extra from '../components/Extra'
import WorkCard from '../components/Work_Card'
import WorkDetails from '../components/Work_Details'
import WorkList from '../components/Work_List'
import Background_Wrapper from '../components/Background_wrapper'

export default function Home() {
  const parallax = useRef<IParallax>(null!)

  return (
    <MouseContextProvider>
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
      <Parallax ref={parallax} pages={3.5}>
        <ParallaxLayer  
          offset={0} 
          speed={0.5}
          >
          <Introduction/>
        </ParallaxLayer>
        <ParallaxLayer  
          offset={0.8} 
          speed={0}
          >
          <HorizontalGuide
          scrollTo={(pos:number) => parallax.current.scrollTo(pos)}
          />
        </ParallaxLayer>
        <ParallaxLayer  
          offset={1.2} 
          speed={0.2}
          >
          <About/>
        </ParallaxLayer>
        <ParallaxLayer  
          offset={1.65}
          speed={0}
          >
          <Extra/>
        </ParallaxLayer>
        <ParallaxLayer  
          offset={1.4}
          speed={0.4}
          >
          <Skills/>
        </ParallaxLayer>
        <ParallaxLayer  
          offset={1.85}
          speed={0}
          >
          <ScrollButton
            dist="35%"
            scrollTo={() => parallax.current.scrollTo(2)}
            label="Work"
          />
        </ParallaxLayer>
        <ParallaxLayer  
          offset={2.48}
          speed={0}
          >
          <WorkCard/>
        </ParallaxLayer>
        <ParallaxLayer  
          offset={2.2}
          speed={0.2}
          >
          <WorkDetails/>
          <WorkList/>
        </ParallaxLayer>
        <ParallaxLayer  
          offset={2.85}
          speed={0}
          >
          <ScrollButton
            dist="65%"
            scrollTo={() => parallax.current.scrollTo(2.5)}
            label="Contact"
          />
        </ParallaxLayer>
        <ParallaxLayer  
          offset={3.2}
          speed={0}
          >
          <Signature
          />
        </ParallaxLayer>
        <ParallaxLayer  
          offset={3}
          speed={0.2}
          style={{ backgroundColor: 'black' }}
          >
          <Footer/>
        </ParallaxLayer>
      </Parallax>
      <Cursor/>
      <Noise_Wrapper/>
      <Background_Wrapper/>
    </MouseContextProvider>
  )
}