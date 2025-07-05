import Head from "next/head";
import React, { useState, useEffect, useContext, useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

import MouseContextProvider from "../context/mouse-context";

import {
  Cursor,
  Footer,
  Signature,
  Introduction,
  About,
  Skills,
  Extra,
  ScrollButton,
  HorizontalGuide,
  WorkCard,
  WorkDetails,
  WorkList,
  Noise_Wrapper,
  Background_Wrapper,
} from "../components";
import { useTranslation } from "react-i18next";

export default function Home() {
  const parallax = useRef<IParallax>(null!);
  const { t } = useTranslation();

  const layers = [
    { offset: 0, speed: 0.5, element: <Introduction /> },
    {
      offset: 0.8,
      speed: 0,
      element: (
        <HorizontalGuide
          scrollTo={(pos: any) => parallax.current.scrollTo(pos)}
        />
      ),
    },
    { offset: 1.2, speed: 0.2, element: <About /> },
    { offset: 1.65, speed: 0, element: <Extra /> },
    { offset: 1.4, speed: 0.4, element: <Skills /> },
    {
      offset: 1.85,
      speed: 0,
      element: (
        <ScrollButton
          dist="35%"
          scrollTo={() => parallax.current.scrollTo(2)}
          label={t("guides.work")}
        />
      ),
    },
    { offset: 2.48, speed: 0, element: <WorkCard /> },
    {
      offset: 2.2,
      speed: 0.2,
      element: (
        <>
          <WorkDetails />
          <WorkList />
        </>
      ),
    },
    {
      offset: 2.85,
      speed: 0,
      element: (
        <ScrollButton
          dist="65%"
          scrollTo={() => parallax.current.scrollTo(2.5)}
          label={t("guides.contact")}
        />
      ),
    },
    { offset: 3.2, speed: 0, element: <Signature /> },
    {
      offset: 3,
      speed: 0.2,
      style: { backgroundColor: "black" },
      element: <Footer />,
    },
  ];

  return (
    <MouseContextProvider>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Parallax ref={parallax} pages={3.5}>
        {layers.map(({ offset, speed, element, style }, i) => (
          <ParallaxLayer key={i} offset={offset} speed={speed} style={style}>
            {element}
          </ParallaxLayer>
        ))}
      </Parallax>
      <Cursor />
      <Noise_Wrapper />
      <Background_Wrapper />
    </MouseContextProvider>
  );
}
