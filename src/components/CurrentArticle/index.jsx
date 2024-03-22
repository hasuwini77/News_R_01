import React from 'react';
import styles from './CurrentArticle.module.css';

const CurrentArticle = ({ article }) => {
    const handleClick = () => {
        article(null)
    }

    return (
        <div className={styles.article}>
            {article.headline}
            <button onClick={handleClick} className={styles.button}> Go back</button>
        </div>
    );
}

export default CurrentArticle;