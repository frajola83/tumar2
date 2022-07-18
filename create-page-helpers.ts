export enum Languages {
  Portuguese = "pt",
  Spanish = "es",
  English = "en",
}

export type DesignerNode = {
  slug: string
}

export type CategoryNode = {
  slug: string
  name: string
  coverImg: string
}

export type ProductNode = {
  slug: string
  category_slug: string
}

export type AllCategoryJson = {
  nodes: CategoryNode[]
}

export type AllDesignerJson = {
  nodes: DesignerNode[]
}

export type AllProductJson = {
  nodes: ProductNode[]
}

export interface GraphQlDataResult {
  allCategoryEnJson: AllCategoryJson
  allCategoryEsJson: AllCategoryJson
  allCategoryPtJson: AllCategoryJson
  allProductEnJson: AllProductJson
  allProductEsJson: AllProductJson
  allProductPtJson: AllProductJson
  allDesignerEnJson: AllDesignerJson
  allDesignerEsJson: AllDesignerJson
  allDesignerPtJson: AllDesignerJson
}
