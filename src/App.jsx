import './App.css'
import { useState } from 'react'
import Navigation from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'
import Header from './components/Header'
import { allCrimeArticles, allEntertainmentArticles, allSportsArticles, allSwedenArticles, allWorldArticles } from './data/data'
import SelectedCategory from './components/SelectedCategory'
import CurrentArticle from './components/CurrentArticle'

const ArticleArrays = {
  sweden: allSwedenArticles,
  sport: allSportsArticles,
  crime: allCrimeArticles,
  world: allWorldArticles,
  entertainment: allEntertainmentArticles
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentArticle, setCurrentArticle] = useState(null);
  console.log("Current Article is" + currentArticle);

  return (
    < >
      <Header />
      <Navigation updateSelectedCategory={setSelectedCategory} NupdateFunction={setCurrentArticle} />
      {
        currentArticle ? < CurrentArticle article={currentArticle} />
          : selectedCategory ? <SelectedCategory category={ArticleArrays[selectedCategory]} SCupdateFunction={setCurrentArticle} />
            : <Main FPupdateFunction={setCurrentArticle} />
      }
      <Footer />
    </>
  )
}

export default App
