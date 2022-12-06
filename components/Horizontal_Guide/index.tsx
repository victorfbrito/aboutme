import React, { useState, useEffect } from 'react'

import ScrollButton from '../ScrollButton'

import * as sc from './styled'

export default function HorizontalGuide({ scrollTo }: any) {
  return (
    <sc.MainWrapper>
      <sc.buttonWrapper
          dist="5%"
          >
        <ScrollButton
          dist="5%"
          scrollTo={() => scrollTo(1)}
          label="About me"
        />
      </sc.buttonWrapper>
      <sc.buttonWrapper
          dist="35%"
          >
        <ScrollButton
          dist="35%"
          scrollTo={() => scrollTo(2)}
          label="Work"
        />
      </sc.buttonWrapper>
      <sc.buttonWrapper
          dist="65%"
          >
        <ScrollButton
          dist="65%"
          scrollTo={() => scrollTo(2.5)}
          label="Contact"
        />
      </sc.buttonWrapper>
      <sc.buttonWrapper
          dist="5%"
          >
      </sc.buttonWrapper>
    </sc.MainWrapper>
  )
}