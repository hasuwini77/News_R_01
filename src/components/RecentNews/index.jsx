import ShortArticle from '../Articles/ShortArticle'
import styles from './RecentNews.module.css'
import { recentArticles } from '../../data/data'

const RecentNews = () => {

    return (
        <div className={styles.recentNews}>
            <h2 className={styles.recentTitle}>Recent News</h2>
            {recentArticles.map((article, index) => (
                < ShortArticle key={index} {...article} />
            ))}
        </div>
    )
}

export default RecentNews