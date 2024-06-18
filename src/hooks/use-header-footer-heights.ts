import { useLayoutEffect, useState } from 'react'

export const useHeaderFooterHeights = () => {
  const [headerHeight, setHeaderHeight] = useState(70)
  const [footerHeight, setFooterHeight] = useState(395)

  useLayoutEffect(() => {
    const header = document.querySelector('header')
    const footer = document.querySelector('footer')

    const setHeaderFooter = () => {
      if (header) setHeaderHeight(header.getBoundingClientRect().height)
      if (footer) setFooterHeight(footer.getBoundingClientRect().height)
    }

    setHeaderFooter()
    window.addEventListener('resize', setHeaderFooter)

    return () => {
      window.removeEventListener('resize', setHeaderFooter)
    }
  }, [])

  return { headerHeight, footerHeight }
}
