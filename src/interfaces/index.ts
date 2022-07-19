export interface Category {
  slug: string
  name: string
  nameEs: string
  nameEn: string
  coverImg: string
}

export interface Product {
  ref: string
  slug: string
  name: string
  images: string[]
  variations: string[]
  designer_slug: string
  designer_name: string
  description: string
  descriptionEn: string
  descriptionEs: string
  cover_img: string
  ambients: string[]
  category_slug: string
  category_name: string
  measurements: string[]
  measurementsEn: string[]
}

export type CategoryNode = {
  node: Category
}
export type ProductNode = {
  node: Product
}

export interface AllProductGraphQlResult {
    edges: ProductNode[]
}
export interface AllCategoryGraphQlResult {
    edges: CategoryNode[]
}

export interface AllDataGraphQlQueryResult {
  allProductJson: AllProductGraphQlResult
  allCategoryJson: AllCategoryGraphQlResult
}

export const parseCategories = (data: AllCategoryGraphQlResult): Category[] => {
  return data.edges.map(edge => edge.node)
}

export const parseProducts = (data: AllProductGraphQlResult): Product[] => {
  return data.edges.map(edge => edge.node)
}
