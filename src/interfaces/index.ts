export interface Category {
  slug: string
  name: string
  nameEs: string
  nameEn: string
  coverImg: string
}

export interface Finish {
  slug: string
  name: string
  nameEs: string
  nameEn: string
}

export interface DesignerProduct {
  link: string
  name: string
  nameEs: string
  nameEn: string
  src: string
}

export interface Designer {
  id: string
  slug: string
  coverImg: string
  description: string
  descriptionEn: string
  descriptionEs: string
  title: string
  products: DesignerProduct[]
}

export interface FinishGroup {
  category_name: string
  category_name_en: string
  category_name_es: string
  category_slug: string
  finishes: Finish[]
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
  measurementsEs: string[]
}

export type CategoryNode = {
  node: Category
}
export type ProductNode = {
  node: Product
}

export type FinishEdge = {
  node: FinishGroup
}

export type DesignerNode = {
  node: Designer
}

export interface AllProductGraphQlResult {
  edges: ProductNode[]
}
export interface AllCategoryGraphQlResult {
  edges: CategoryNode[]
}

export interface AllFinishGraphQlResult {
  edges: FinishEdge[]
}

export interface AllDesignerGraphQlResult {
  edges: DesignerNode[]
}

export interface DesignerGraphQlResult {
  data: {
    designerJson: Designer
  }
}

export interface AllDataGraphQlQueryResult {
  allProductJson: AllProductGraphQlResult
  allCategoryJson: AllCategoryGraphQlResult
  allFinishesJson: AllFinishGraphQlResult
  allDesignerJson: AllDesignerGraphQlResult
}

export const parseCategories = (data: AllCategoryGraphQlResult): Category[] => {
  return data.edges.map(edge => edge.node)
}

export const parseProducts = (data: AllProductGraphQlResult): Product[] => {
  return data.edges.map(edge => edge.node)
}

export const parseFinishes = (data: any): FinishGroup[] => {
  return data.allFinishesJson.edges.map(edge => edge.node)
}

