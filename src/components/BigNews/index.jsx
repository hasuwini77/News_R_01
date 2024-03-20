import { mainArticle } from '../../data/data'
import MainArticle from '../Articles/MainArticle'
import styles from './BigNews.module.css'

const BigNews = () => {

    return (
        <div className={styles.bigNews}>
            < MainArticle {...mainArticle} />
        </div>
    )
}

export default BigNews