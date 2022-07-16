exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  // const templateDesigners = require.resolve("./src/templates/template-desiners")
  const templateProducts = require.resolve("./src/templates/template-products")

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
    }
  `)

  if (result.errror) {
    reporter.panickOnBuild("Error loading GraphQl")
  }

  languages.forEach(language => {
    if (language === "pt") {
      result.data.allCategoryPtJson.nodes.forEach(({ slug }) => {
        createPage({
          path: "/produtos/" + slug,
          component: templateProducts,
          context: {
            language,
          },
        })
      })
    }
    if (language === "en") {
      result.data.allCategoryPtJson.nodes.forEach(({ slug }) => {
        createPage({
          path: "/produtos/" + slug,
          component: templateProducts,
          context: {
            language,
          },
        })
      })
    }
    if (language === "es") {
      result.data.allCategoryPtJson.nodes.forEach(({ slug }) => {
        createPage({
          path: "/produtos/" + slug,
          component: templateProducts,
          context: {
            language,
          },
        })
      })
    }
  })

  // createPage({
  //   path: "/using-dsg",
  //   component: require.resolve("./src/templates/using-dsg.js"),
  //   context: {},
  //   defer: true,
  // })
}
