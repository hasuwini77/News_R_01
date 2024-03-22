import { mainArticle } from '../../data/data'
import MainArticle from '../Articles/MainArticle'
import styles from './BigNews.module.css'

const BigNews = ({ BNupdateFunction }) => {

    return (
        <div className={styles.bigNews}>
            < MainArticle {...mainArticle} MAupdateFunction={BNupdateFunction} />
        </div>
    )
}

export default BigNews