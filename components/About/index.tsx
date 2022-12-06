import React, { useEffect, useState } from 'react'

import * as sc from './styled'

export default function About() {

  return (
    <sc.MainWrapper>
      <p>
        My goal is to create pretty and reliable websites, where design and efficiency can be combined to provide the best user experience.
      </p>
      <p>
        I&apos;m passionate about visual effects and anything motion related.
      </p>
      <p>
      My favorite frameworks are:
      React, jQuery, Vue, Node.js, Express, Next.js and Three.js;

      But I&apos;m open for new things.
      </p>
    </sc.MainWrapper>
  )
}