import styles from './ImageArticle.module.css';
import { getImageURL, getArticle } from '../../../utils/function';

const ImageArticle = ({ image, headline, deck, IAupdateFunction }) => {

    const handleClick = () => {
        IAupdateFunction(getArticle(headline))
    }

    return (
        <div className={styles.imageArticle}>
            <hr />
            <img src={getImageURL(image)} alt={headline} width="100%" className={styles.imgArticle} />
            <hr />
            <h4 onClick={handleClick}> {headline}</h4>
            <p className={styles.para}>{deck}</p>
        </div>
    );
}

export default ImageArticle;
