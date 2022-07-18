import { GatsbyNode } from "gatsby"
import { resolve } from "path"

enum Languages {
  Portuguese = "pt",
  Spanish = "es",
  English = "en",
}

type DesignerNode = {
  slug: string
}

type AllCategoryJson = {
  nodes: {
    slug: string
    name: string
    coverImg: string
  }
}

type AllDesignerJson = {
  nodes: DesignerNode[]
}

type AllProductJson = {
  nodes: {
    slug: string
    category_slug: string
  }
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

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
  reporter,
}) => {
  const { createPage } = actions
  const result: { error?: any; data?: GraphQlDataResult } = await graphql(`
    query AllData {
      allCategoryEnJson {
        nodes {
          slug
          name
          coverImg
        }
      }
      allCategoryEsJson {
        nodes {
          slug
          name
          coverImg
        }
      }
      allCategoryPtJson {
        nodes {
          slug
          name
          coverImg
        }
      }
      allProductPtJson {
        nodes {
          slug
          category_slug
        }
      }
      allProductEnJson {
        nodes {
          slug
          category_slug
        }
      }
      allProductEsJson {
        nodes {
          slug
          category_slug
        }
      }
      allDesignersEnJson {
        nodes {
          id
        }
      }
      allDesignersEsJson {
        nodes {
          id
        }
      }
      allDesignersPtJson {
        nodes {
          id
        }
      }
    }
  `)

  if (result.error) {
    reporter.panicOnBuild("Error loading GraphQl")
    console.log(result.error)
  }

  const langs = Object.keys(Languages)

  langs.forEach(lang => {
    const currentLanguage = Languages[lang]
    switch (currentLanguage) {
      case "en":
        result.data?.allDesignerEnJson.nodes.forEach(node => {
          createPage({
            path: "en/designers/" + node.slug,
            component: require.resolve(
              "./src/templates/template-single-designer"
            ),
            context: {
              slug: node.slug,
              language: "en",
            },
          })
        })
        break
      case "es":
        result.data?.allDesignerEsJson.nodes.forEach(node => {
          createPage({
            path: "es/designers/" + node.slug,
            component: require.resolve(
              "./src/templates/template-single-designer"
            ),
            context: {
              slug: node.slug,
              language: "es",
            },
          })
        })
        break

      default:
        result.data?.allDesignerEnJson.nodes.forEach(node => {
          createPage({
            path: "designers/" + node.slug,
            component: require.resolve(
              "./src/templates/template-single-designer"
            ),
            context: {
              slug: node.slug,
              language: "en",
            },
          })
        })
        break
    }
  })
}

// exports.createPages = async ({ actions, graphql, reporter }) => {
//   const { createPage } = actions
//   // const templateDesigners = require.resolve("./src/templates/template-desiners")
//   const templateProductsPt = require.resolve(
//     "./src/templates/template-products-pt"
//   )
//   const templateProductsEs = require.resolve(
//     "./src/templates/template-products-es"
//   )
//   const templateProductsEn = require.resolve(
//     "./src/templates/template-products-en"
//   )

//   const templateSingleProduct = require.resolve(
//     "./src/templates/template-single-product"
//   )
//   // const templateSingleProductEs = require.resolve(
//   //   "./src/templates/template-single-product-es"
//   // )
//   // const templateSingleProductEn = require.resolve(
//   //   "./src/templates/template-single-product-en"
//   // )

//   if (result.error) {
//     reporter.panickOnBuild("Error loading GraphQl")
//     console.log(result.error)
//   }

//   languages.forEach(language => {
//     switch (language.lang) {
//       case "en":
//         result.data.allCategoryPtJson.nodes.forEach(({ slug }) => {
//           createPage({
//             path: "en/produtos/" + slug,
//             component: templateProductsPt,
//             context: {
//               slug,
//             },
//           })
//         })
//         result.data.allProductPtJson.nodes.forEach(
//           ({ slug, category_slug }) => {
//             createPage({
//               path: "en/produtos/" + category_slug + "/" + slug,
//               component: templateSingleProduct,
//               context: {
//                 slug,
//                 language: language.lang,
//               },
//             })
//           }
//         )
//         result.data.allDesignersPtJson.nodes.forEach(
//           ({ slug, category_slug }) => {
//             createPage({
//               path: "/produtos/" + category_slug + "/" + slug,
//               component: templateSingleProduct,
//               context: {
//                 slug,
//                 language: language.lang,
//               },
//             })
//           }
//         )
//         break

//       default:
//         break
//     }

//     if (language.lang === "pt") {
//       result.data.allCategoryPtJson.nodes.forEach(({ slug }) => {
//         createPage({
//           path: "/produtos/" + slug,
//           component: templateProductsPt,
//           context: {
//             slug,
//           },
//         })
//       })
//       result.data.allProductPtJson.nodes.forEach(({ slug, category_slug }) => {
//         createPage({
//           path: "/produtos/" + category_slug + "/" + slug,
//           component: templateSingleProduct,
//           context: {
//             slug,
//             language: language.lang,
//           },
//         })
//       })
//       result.data.allDesignersPtJson.nodes.forEach(
//         ({ slug, category_slug }) => {
//           createPage({
//             path: "/produtos/" + category_slug + "/" + slug,
//             component: templateSingleProduct,
//             context: {
//               slug,
//               language: language.lang,
//             },
//           })
//         }
//       )
//     }
//     if (language.lang === "en") {
//       result.data.allCategoryEnJson.nodes.forEach(({ slug }) => {
//         createPage({
//           path: "en/produtos/" + slug,
//           component: templateProductsEn,
//           context: {
//             slug,
//           },
//         })
//       })
//       result.data.allProductEnJson.nodes.forEach(({ slug, category_slug }) => {
//         createPage({
//           path: "en/produtos/" + category_slug + "/" + slug,
//           component: templateSingleProduct,
//           context: {
//             slug,
//             language: language.lang,
//           },
//         })
//       })
//     }
//     if (language.lang === "es") {
//       result.data.allCategoryEsJson.nodes.forEach(({ slug }) => {
//         createPage({
//           path: "es/produtos/" + slug,
//           component: templateProductsEs,
//           context: {
//             slug,
//           },
//         })
//       })
//       result.data.allProductEsJson.nodes.forEach(({ slug, category_slug }) => {
//         createPage({
//           path: "es/produtos/" + category_slug + "/" + slug,
//           component: templateSingleProduct,
//           context: {
//             slug,
//             language: language.lang,
//           },
//         })
//       })
//     }
//   })

//   // result.data.allCategoryEnJson.nodes.forEach(({ slug }) => {
//   //   createPage({
//   //     path: `/produtos/${slug}`,
//   //     component: templateProductsEn,
//   //     context: {
//   //       slug,
//   //     },
//   //   })
//   // })
// }

// // createPage({
// //   path: '/produtos/' + ,
// //   component: templateProductsEn,
// //   context: {},
// // })

// //

// // createPage({
// //   path: "/using-dsg",
// //   component: require.resolve("./src/templates/using-dsg.js"),
// //   context: {},
// //   defer: true,
// // })
