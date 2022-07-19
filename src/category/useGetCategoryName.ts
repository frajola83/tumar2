import { I18nextContext } from "gatsby-plugin-react-i18next"
import { useContext } from "react"

type CategorySlug =
  | "banquetas"
  | "cadeiras"
  | "poltronas"
  | "bancos-e-puffs"
  | "mesas-de-jantar"
  | "mesas-laterais-centro"
  | "luminarias"
  | "carro-bar"

export const useGetCategoryName = (category_slug: CategorySlug) => {
  const context = useContext(I18nextContext)
  switch (category_slug) {
    case "banquetas": {

    }
  }

}
