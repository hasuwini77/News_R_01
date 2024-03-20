import ImageArticle from '../Articles/ImageArticle';
import styles from './FeaturedNews.module.css';
import { featuredNews } from '../../data/data';

const FeaturedNews = () => {
    return (
        <div className={styles.featuredNews}>
            {featuredNews.map((article, index) => (
                <ImageArticle key={index} {...article} />
            ))}
        </div>
    );
};

export default FeaturedNews;
