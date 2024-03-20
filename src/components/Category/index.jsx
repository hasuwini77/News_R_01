import styles from './Category.module.css';
import ImageArticle from '../Articles/ImageArticle';

const Category = ({ name, articleArray }) => {
    return (
        <>
            <h3>{name}</h3>
            <div className={styles.category}>
                {articleArray.map((article, index) => (
                    <ImageArticle key={index} {...article} />
                ))}
            </div>
        </>
    );
};

export default Category;
