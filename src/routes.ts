export const ABOUT_ROUTE = {
  name: "sobre",
  to: "/sobre-a-tumar",
  translateKey: "about",
}
export const CONTACT_ROUTE = {
  name: "contato",
  to: "/contato",
  translateKey: "contact",
}
export const DESIGNERS_ROUTE = {
  name: "designers",
  to: "/designers",
  translateKey: "designers",
}
export const HOME_ROUTE = { name: "home", to: "/", translateKey: "home" }
// export const PRODUCT_ROUTE = { name: "produto", to: "/produto" }
export const PRODUCTS_ROUTE = {
  name: "produtos",
  to: "/produtos",
  translateKey: "products",
}
export const FINISHES_ROUTE = {
  name: "acabamentos",
  to: "/acabamentos/laminas-naturais",
  translateKey: "finishes",
}
// export const SELLERS_ROUTE = { name: "representantes", to: "/representantes" }

export type Route =
  | typeof ABOUT_ROUTE
  | typeof CONTACT_ROUTE
  | typeof DESIGNERS_ROUTE
  | typeof HOME_ROUTE
  // | typeof PRODUCT_ROUTE
  | typeof PRODUCTS_ROUTE
// | typeof SELLERS_ROUTE

export const routes: Route[] = [
  HOME_ROUTE,
  ABOUT_ROUTE,
  DESIGNERS_ROUTE,
  // PRODUCT_ROUTE,
  PRODUCTS_ROUTE,
  FINISHES_ROUTE,
  // SELLERS_ROUTE,
  CONTACT_ROUTE,
]
