import { css, CSSObject, SimpleInterpolation } from "styled-components"

export const breakpoints = (
  cssProp: string = "padding", // the CSS property to apply to the breakpoints
  values: [string, string, string, string], // array of objects, e.g. [{ 800: 60 }, ...] <-- 800 (key) = screen breakpoint, 60 (value) = CSS prop breakpoint
  mediaQueryType: string = "min-width" // media query breakpoint type, i.e.: max-width, min-width, max-height, min-height
) => {
  const themeBreakpoints = [576, 768, 992, 1200]
  const breakpointProps = values.reduce((mediaQueries, value, index) => {
    return (mediaQueries += `
    @media screen and (${mediaQueryType}: ${themeBreakpoints[index]}px) {
      ${cssProp}: ${value};
    }
    `)
  }, "")
  return css([breakpointProps])
}
