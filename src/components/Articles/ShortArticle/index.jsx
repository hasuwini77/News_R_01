import styles from './ShortArticle.module.css'
import { getArticle } from '../../../utils/function'

const ShortArticle = ({ headline, deck, category, SAupdateFunction }) => {

    const handleClick = () => {
        SAupdateFunction(getArticle(headline))
    }
    return (

        <div className={styles.shortArticle}>
            <h4 onClick={handleClick}> {headline} {deck} </h4>
            <p className={styles.category}>Category: {category}</p>
            <hr />
        </div>
    )
}

export default ShortArticle