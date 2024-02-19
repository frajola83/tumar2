import { AllCategoryGraphQlResult, AllDataGraphQlQueryResult } from "./src/interfaces"

export enum Languages {
  Portuguese = "pt",
  Spanish = "es",
  English = "en",
}

export const createCategoryPages = (
  data: AllDataGraphQlQueryResult,
  language: "pt" | "en" | "es",
  createPage: (args: any) => void,
  resolve: any
) => {
  data.allCategoryJson.edges.forEach((edge) => {
    const options = {
      path: "produtos/" + edge.node.slug,
      component: resolve(
        __dirname,
        "./src/template/template-product-category.tsx"
      ),
      context: {
        slug: edge.node.slug,
        language,
      },
    }
    return createPage(options)
  })
}
//
export const createProductSinglePages = (
  data: AllDataGraphQlQueryResult,
  language: "pt" | "en" | "es",
  createPage: (args: any) => void,
  resolve: any
) => {
  data.allProductJson.edges.forEach((edge) => {
    const options = {
      path: "produtos/" + edge.node.category_slug + "/" + edge.node.slug,
      component: resolve(
        __dirname,
        "./src/template/template-product-single.tsx"
      ),
      context: {
        slug: edge.node.slug,
        language,
      },
    }
    return createPage(options)
  })
}

export const createFinishPages = (
  data: AllDataGraphQlQueryResult,
  language: "pt" | "en" | "es",
  createPage: (args: any) => void,
  resolve: any
) => {
  data.allFinishesJson.edges.forEach((edge) => {
    const options = {
      path: "acabamentos/" + edge.node.category_slug,
      component: resolve(
        __dirname,
        "./src/template/template-finishes.tsx"
      ),
      context: {
        category_slug: edge.node.category_slug,
        language,
      },
    }
    return createPage(options)
  })
}

export const createDesignerPages = (
  data: AllDataGraphQlQueryResult,
  language: "pt" | "en" | "es",
  createPage: (args: any) => void,
  resolve: any
) => {
  data.allDesignerJson.edges.forEach((edge) => {
    const options = {
      path: edge.node.slug,
      component: resolve(
        __dirname,
        "./src/template/template-designer-single.tsx"
      ),
      context: {
        slug: edge.node.slug,
        language,
      },
    }
    return createPage(options)
  })
}