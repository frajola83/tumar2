export interface Designer {
  id: string
  slug: string
  title: string
  coverImg: string
  description: string
  products: DesignerProduct[]
}

export interface DesignerProduct {
  name: string
  src: string
  link: string
}
