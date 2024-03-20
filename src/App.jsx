import './App.css'
import { useState } from 'react'
import Navigation from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'
import Header from './components/Header'
import { allCrimeArticles, allEntertainmentArticles, allSportsArticles, allSwedenArticles, allWorldArticles } from './data/data'
import SelectedCategory from './components/SelectedCategory'

const ArticleArrays = {
  sweden: allSwedenArticles,
  sport: allSportsArticles,
  crime: allCrimeArticles,
  world: allWorldArticles,
  entertainment: allEntertainmentArticles
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    < >
      <Header />
      <Navigation updateSelectedCategory={setSelectedCategory} />
      {!selectedCategory && <Main />}
      <Footer />
      {selectedCategory && <SelectedCategory category={ArticleArrays[selectedCategory]} />}
    </>
  )
}

export default App
