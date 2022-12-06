import React, { useRef } from 'react'
import Image from 'next/image'

import * as sc from './styled'

export default function Noise_Wrapper() {
  return (
    <sc.MainWrapper>
      <sc.NoiseBg/>
    </sc.MainWrapper>
  )
}