exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const languages = [
    {lang: "pt", slug: ""},
    {lang: "en", slug: "en"},
    {lang: "es", slug: "es"},
  ];



  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
