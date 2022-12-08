import React, { useRef, useState, useEffect, useMemo } from 'react'
import Image from 'next/image'

import B from '../ActionButton'

import * as sc from './styled'

export default function Footer({ ref }: any) {

  const downloadPdf = () => {
    // using Java Script method to get PDF file
    fetch('SamplePDF.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'SamplePDF.pdf';
            alink.target = "_blank"
            alink.click();
        })
    })
  }

  return (
    <sc.MainWrapper 
    ref={ref}
    >
      <sc.TextWrapper>
        <p>
          If you have a project you&apos;d like to talk about, you can find me on <B href="http://www.linkedin.com/in/vbrito-dev">LinkedIn</B>, <B href="https://github.com/victorfbrito">GitHub</B>, <B href="mailto:victor_f_brito@outlook.com">email</B> me or check my <B href="/resume.pdf">resume</B>.
        </p>
      </sc.TextWrapper>
      <sc.ImageWrapper>
        <Image src="/arrow-outline.svg" alt="" layout="fill"/>
        <sc.FilledImage src="/arrow-filled.svg" alt="" layout="fill"/>
      </sc.ImageWrapper>
    </sc.MainWrapper>
  )
}