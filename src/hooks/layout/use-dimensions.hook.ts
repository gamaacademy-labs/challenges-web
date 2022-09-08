import * as React from 'react'

import { useIsomorphicLayoutEffect } from './use-isomorphic-layout-effect.hook'

import { UseDimensionsResponse } from './use-dimensions.types'

const getWindowDimensions = (): UseDimensionsResponse => {
  if (typeof window === 'undefined') return { width: 0, height: 0 }
  const { innerWidth: width, innerHeight: height } = window
  return { width, height }
}

/**
 * This is just an alternative to use the useLayoutEffect without catching the gigantic warning
 *
 * Credits to: https://medium.com/@alexandereardon/uselayouteffect-and-ssr-192986cdcf7a
 */

export const useDimensions = (): UseDimensionsResponse => {
  const [windowDimensions, setWindowDimensions] = React.useState<UseDimensionsResponse>(getWindowDimensions())

  function handleResize() {
    setWindowDimensions(getWindowDimensions())
  }

  React.useEffect(() => {
    window.addEventListener('resize', handleResize)
    window.addEventListener('load', handleResize)

    return () => {
      window.removeEventListener('load', handleResize)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useIsomorphicLayoutEffect(() => {
    handleResize()
  }, [])

  return windowDimensions
}
