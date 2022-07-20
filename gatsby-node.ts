import { GatsbyNode } from "gatsby"
import { resolve } from "path"
import {
  createCategoryPages,
  createDesignerPages,
  createFinishPages,
  createProductSinglePages,
  Languages,
} from "./create-page-helpers"
import {
  AllCategoryGraphQlResult,
  AllDataGraphQlQueryResult,
} from "./src/interfaces"

interface ProductQueryResult {}

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
  reporter,
}) => {
  const { createPage } = actions

  const result: { error?: any; data?: AllDataGraphQlQueryResult } =
    await graphql(`
      query MyQuery {
        allProductJson {
          edges {
            node {
              slug
              category_slug
            }
          }
        }
        allCategoryJson {
          edges {
            node {
              slug
            }
          }
        }
        allFinishesJson {
          edges {
            node {
              category_name
              category_name_en
              category_name_es
              category_slug
              finishes {
                name
                nameEn
                nameEs
                slug
              }
            }
          }
        }
        allDesignerJson {
          edges {
            node {
              slug
            }
          }
        }
      }
    `)

  if (result.error || !result.data) {
    reporter.panicOnBuild("Error loading GraphQl")
    console.log(result.error)
    return
  }

  const langs = Object.keys(Languages)
  if (result.data) {
    langs.forEach(lang => {
      const currentLanguage = Languages[lang]
      createCategoryPages(result.data!, currentLanguage, createPage, resolve)
      createProductSinglePages(
        result.data!,
        currentLanguage,
        createPage,
        resolve
      )
      createFinishPages(result.data!, currentLanguage, createPage, resolve)
      createDesignerPages(result.data!, currentLanguage, createPage, resolve)
    })
  }

  // const langs = Object.keys(Languages)

  // langs.forEach(lang => {
  //   const currentLanguage = Languages[lang]
  //   switch (currentLanguage) {
  //     case "en": {
  //       result.data?.allDesignerEnJson.nodes.forEach(node => {
  //         const options = {
  //           path: currentLanguage + node.slug,
  //           component: resolve(
  //             __dirname,
  //             "./src/templates/template-single-designer.tsx"
  //           ),
  //           context: {
  //             slug: node.slug,
  //             language: currentLanguage,
  //           },
  //         }
  //         return createPage(options)
  //       })
  //       result.data?.allCategoryEnJson.nodes.forEach(node => {
  //         const options = {
  //           path: currentLanguage + "/" + node.slug,
  //           component: resolve(
  //             __dirname,
  //             "./src/templates/template-products-index.tsx"
  //           ),
  //           context: {
  //             slug: node.slug,
  //             language: currentLanguage,
  //           },
  //         }
  //         return createPage(options)
  //       })
  //       result.data?.allProductEnJson.nodes.forEach(node => {
  //         const options = {
  //           path: currentLanguage + "/" + node.category_slug + "/" + node.slug,
  //           component: resolve(
  //             __dirname,
  //             "./src/templates/template-products-index.tsx"
  //           ),
  //           context: {
  //             slug: node.slug,
  //             language: currentLanguage,
  //           },
  //         }
  //         createPage(options)
  //       })
  //       break
  //     }
  //     case "en": {
  //       result.data?.allDesignerEsJson.nodes.forEach(node => {
  //         const options = {
  //           path: currentLanguage + node.slug,
  //           component: resolve(
  //             __dirname,
  //             "./src/templates/template-single-designer.tsx"
  //           ),
  //           context: {
  //             slug: node.slug,
  //             language: currentLanguage,
  //           },
  //         }
  //         return createPage(options)
  //       })
  //       result.data?.allCategoryEsJson.nodes.forEach(node => {
  //         const options = {
  //           path: currentLanguage + "/" + node.slug,
  //           component: resolve(
  //             __dirname,
  //             "./src/templates/template-products-index.tsx"
  //           ),
  //           context: {
  //             slug: node.slug,
  //             language: currentLanguage,
  //           },
  //         }
  //         return createPage(options)
  //       })
  //       result.data?.allProductEsJson.nodes.forEach(node => {
  //         const options = {
  //           path: currentLanguage + "/" + node.category_slug + "/" + node.slug,
  //           component: resolve(
  //             __dirname,
  //             "./src/templates/template-products-index.tsx"
  //           ),
  //           context: {
  //             slug: node.slug,
  //             language: currentLanguage,
  //           },
  //         }
  //         createPage(options)
  //       })
  //       break
  //     }
  //     default:
  //       result.data?.allDesignerPtJson.nodes.forEach(node => {
  //         const options = {
  //           path: node.slug,
  //           component: resolve(
  //             __dirname,
  //             "./src/templates/template-single-designer.tsx"
  //           ),
  //           context: {
  //             slug: node.slug,
  //             language: currentLanguage,
  //           },
  //         }
  //         return createPage(options)
  //       })
  //       result.data?.allCategoryPtJson.nodes.forEach(node => {
  //         const options = {
  //           path: node.slug,
  //           component: resolve(
  //             __dirname,
  //             "./src/templates/template-products-index.tsx"
  //           ),
  //           context: {
  //             slug: node.slug,
  //             language: currentLanguage,
  //           },
  //         }
  //         return createPage(options)
  //       })
  //       result.data?.allProductPtJson.nodes.forEach(node => {
  //         const options = {
  //           path: node.category_slug + "/" + node.slug,
  //           component: resolve(
  //             __dirname,
  //             "./src/templates/template-products-index.tsx"
  //           ),
  //           context: {
  //             slug: node.slug,
  //             language: currentLanguage,
  //           },
  //         }
  //         createPage(options)
  //       })
  //       break
  //   }
  // })
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
