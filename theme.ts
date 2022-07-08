interface BreakPoints {
  lg: number
  md: number
  sm: number
  xs: number
}
interface Colors {
  sand: string //bg
  darkGrey: string //text
  white: string
  lighterGrey: string
  mediumGrey: string
}

interface Theme {
  colors: Colors
  breakPoints: BreakPoints
  gap: number
  border: string
}

const lighterGrey = "#f1f1f1"

export const theme: Theme = {
  colors: {
    sand: "#f1f1f1",
    darkGrey: "#2c2c2a",
    lighterGrey: lighterGrey,
    mediumGrey: "#C7C6C8",
    white: "#FFF",
  },
  border: `1px solid ${lighterGrey}`,
  breakPoints: {
    lg: 1200,
    md: 992,
    sm: 768,
    xs: 576,
  },
  gap: 20,
}
