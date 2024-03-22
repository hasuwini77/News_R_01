import { allArticles } from "../data/data";

export const getImageURL = imageName => { 

    return new URL(`../assets/${imageName}`, import.meta.url).href;

}

export const getArticle = headline => { 
return allArticles.find(article => article.headline === headline)
}