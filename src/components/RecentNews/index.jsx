import ShortArticle from '../Articles/ShortArticle'
import styles from './RecentNews.module.css'
import { recentArticles } from '../../data/data'

const RecentNews = ({ RCupdateFunction }) => {

    return (
        <div className={styles.recentNews}>
            <h2 className={styles.recentTitle}>Recent News</h2>
            {recentArticles.map((article, index) => (
                < ShortArticle key={index} {...article} SAupdateFunction={RCupdateFunction} />
            ))}
        </div>
    )
}

export default RecentNews