import styles from './ImageArticle.module.css';
import { getImageURL } from '../../../utils/function';

const ImageArticle = ({ image, headline, deck }) => {

    return (
        <div className={styles.imageArticle}>
            <hr />
            <img src={getImageURL(image)} alt={headline} width="100%" className={styles.imgArticle} />
            <hr />
            <h4> {headline}</h4>
            <p className={styles.para}>{deck}</p>
        </div>
    );
}

export default ImageArticle;
