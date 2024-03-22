import styles from './BreakingNews.module.css';
import { getArticle } from '../../utils/function';

const BreakingNews = ({ headline, BNupdateFunction }) => {

    const handleClick = () => {
        BNupdateFunction(getArticle(headline))
    }

    return (
        <>
            <span className={styles.breaking} onClick={handleClick}> {headline} → </span>
        </>
    )
}

export default BreakingNews