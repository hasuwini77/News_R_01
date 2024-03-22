import ImageArticle from '../Articles/ImageArticle';
import styles from './FeaturedNews.module.css';
import { featuredNews } from '../../data/data';

const FeaturedNews = ({ FNupdateFunction }) => {
    return (
        <div className={styles.featuredNews}>
            {featuredNews.map((article, index) => (
                <ImageArticle key={index} {...article} IAupdateFunction={FNupdateFunction} />
            ))}
        </div>
    );
};

export default FeaturedNews;
