exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  // const templateDesigners = require.resolve("./src/templates/template-desiners")
  const templateProductsPt = require.resolve("./src/templates/template-products-pt")
  const templateProductsEs = require.resolve("./src/templates/template-products-es")
  const templateProductsEn = require.resolve("./src/templates/template-products-en")

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

  if (result.error) {
    reporter.panickOnBuild("Error loading GraphQl")
    console.log(result.error)
  }

  console.log(JSON.stringify(result))

  try {
      languages.forEach(language => {
        console.log(JSON.stringify(result.data));
        if (language === "pt") {
          result.data.allCategoryPtJson.nodes.forEach(({ slug }) => {
            createPage({
              path: "/produtos/" + slug,
              component: templateProductsPt,
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
              component: templateProductsEn,
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
              component: templateProductsEs,
              context: {
                language,
              },
            })
          })
        }
      })
  } catch (error) {
    constole.log({error})
  }

  // createPage({
  //   path: "/using-dsg",
  //   component: require.resolve("./src/templates/using-dsg.js"),
  //   context: {},
  //   defer: true,
  // })
}
