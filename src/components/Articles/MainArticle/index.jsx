import styles from './MainArticle.module.css'
import { getImageURL } from '../../../utils/function'

const MainArticle = ({ headline, deck, story, category, image }) => {

    return (
        <div className={styles.mainArticle}>
            <img src={getImageURL(image)} alt={headline} width="100%" className={styles.mainImg} />
            <h2> {headline} {deck}</h2>
            <p>{story.slice(0, 200)}</p>
            <p>Category: {category}</p>
        </div>
    )
}

export default MainArticle
