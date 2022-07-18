exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  // const templateDesigners = require.resolve("./src/templates/template-desiners")
  const templateProductsPt = require.resolve(
    "./src/templates/template-products-pt"
  )
  const templateProductsEs = require.resolve(
    "./src/templates/template-products-es"
  )
  const templateProductsEn = require.resolve(
    "./src/templates/template-products-en"
  )

  const templateSingleProductPt = require.resolve(
    "./src/templates/template-single-product-pt"
  )
  const templateSingleProductEs = require.resolve(
    "./src/templates/template-single-product-es"
  )
  const templateSingleProductEn = require.resolve(
    "./src/templates/template-single-product-en"
  )

  const languages = [
    { lang: "pt", slug: "" },
    { lang: "en", slug: "en" },
    { lang: "es", slug: "es" },
  ]

  const result = await graphql(`
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
    }
  `)

  if (result.error) {
    reporter.panickOnBuild("Error loading GraphQl")
    console.log(result.error)
  }

  languages.forEach(language => {
    if (language.lang === "pt") {
      result.data.allCategoryPtJson.nodes.forEach(({ slug }) => {
        createPage({
          path: "/produtos/" + slug,
          component: templateProductsPt,
          context: {
            slug,
          },
        })
      })
      result.data.allProductPtJson.nodes.forEach(({ slug, category_slug }) => {
        createPage({
          path: "/produtos/" + category_slug + "/" + slug,
          component: templateSingleProductPt,
          context: {
            slug,
          },
        })
      })

    }
    if (language.lang === "en") {
      result.data.allCategoryEnJson.nodes.forEach(({ slug }) => {
        createPage({
          path: "en/produtos/" + slug,
          component: templateProductsEn,
          context: {
            slug,
          },
        })
      })
      result.data.allProductEnJson.nodes.forEach(({ slug, category_slug }) => {
        createPage({
          path: "en/produtos/" + category_slug + "/" + slug,
          component: templateSingleProductEn,
          context: {
            slug,
          },
        })
      })
    }
    if (language.lang === "es") {
      result.data.allCategoryEsJson.nodes.forEach(({ slug }) => {
        createPage({
          path: "es/produtos/" + slug,
          component: templateProductsEs,
          context: {
            slug,
          },
        })
      })
      result.data.allProductEsJson.nodes.forEach(({ slug, category_slug }) => {
        createPage({
          path: "es/produtos/" + category_slug + "/" + slug,
          component: templateSingleProductEs,
          context: {
            slug,
          },
        })
      })
    }
  })

  // result.data.allCategoryEnJson.nodes.forEach(({ slug }) => {
  //   createPage({
  //     path: `/produtos/${slug}`,
  //     component: templateProductsEn,
  //     context: {
  //       slug,
  //     },
  //   })
  // })
}

// createPage({
//   path: '/produtos/' + ,
//   component: templateProductsEn,
//   context: {},
// })

//

// createPage({
//   path: "/using-dsg",
//   component: require.resolve("./src/templates/using-dsg.js"),
//   context: {},
//   defer: true,
// })
