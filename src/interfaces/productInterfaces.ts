export interface Product {
    ref: string;
    slug: string;
    name: string;
    images: string[];
    variations: string[]; 
    designer_slug: string;
    designer_name: string;
    description: string;
    cover_img: string;
    ambients: string[];
    category_slug: string;
    category_name: string;
    measurements: string[];
};

export interface TranslationProductResponse {
    data: {
        productEnJson: Product;
        productEsJson: Product;
        productPtJson: Product;
    }
}